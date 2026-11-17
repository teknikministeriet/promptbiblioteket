#!/usr/bin/env node

/**
 * Säkerhetsgranskning av beroenden med tidsbegränsade undantag.
 *
 * Kör `npm audit --json` i angiven katalog och fallerar på varje advisory
 * med allvarsgrad moderate eller högre, utom de som står i
 * scripts/audit-undantag.json. Ett undantag gäller ett enskilt GHSA-id,
 * aldrig ett paketnamn, och har ett slutdatum. Efter slutdatumet fallerar
 * granskningen igen.
 *
 * Användning:
 *   node scripts/audit.js <katalog>
 *   node scripts/audit.js <katalog> --fil <audit.json> --undantag <fil.json>   (test)
 *
 * Exitkod 0 = inga fynd utanför giltiga undantag. Allt annat = 1.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const NIVAER = ['info', 'low', 'moderate', 'high', 'critical'];
const LAGSTA = NIVAER.indexOf('moderate');

function fel(meddelande) {
  console.error(`audit: ${meddelande}`);
  process.exit(1);
}

function flagga(namn) {
  const i = process.argv.indexOf(namn);
  if (i === -1) return null;
  const varde = process.argv[i + 1];
  if (!varde || varde.startsWith('--')) fel(`${namn} saknar värde`);
  return varde;
}

const katalog = process.argv[2];
if (!katalog || katalog.startsWith('--')) fel('ange katalog, till exempel: node scripts/audit.js site');
if (!fs.existsSync(path.join(katalog, 'package-lock.json'))) fel(`${katalog} saknar package-lock.json`);

// Undantagen
const undantagFil = flagga('--undantag') || path.join(__dirname, 'audit-undantag.json');
let undantag;
try {
  undantag = JSON.parse(fs.readFileSync(undantagFil, 'utf8'));
} catch (e) {
  fel(`kan inte läsa ${undantagFil}: ${e.message}`);
}
if (!Array.isArray(undantag)) fel(`${undantagFil} ska vara en lista`);

const idag = new Date().toISOString().slice(0, 10);
const giltiga = new Map();
for (const u of undantag) {
  if (!/^GHSA-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/.test(u.id || '')) fel(`ogiltigt id i undantag: ${JSON.stringify(u.id)}`);
  if (!u.skal) fel(`${u.id} saknar skal`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(u.giltig_till || '')) fel(`${u.id} saknar giltig_till (ÅÅÅÅ-MM-DD)`);
  if (u.giltig_till < idag) {
    console.error(`audit: undantaget för ${u.id} (${u.paket}) gick ut ${u.giltig_till}.`);
    console.error('audit: uppdatera paketet om en rättning finns, annars ta ställning till undantaget på nytt.');
    process.exit(1);
  }
  giltiga.set(u.id, u);
}

// Audit-rapporten
let ra;
const fil = flagga('--fil');
if (fil) {
  try {
    ra = fs.readFileSync(fil, 'utf8');
  } catch (e) {
    fel(`kan inte läsa ${fil}: ${e.message}`);
  }
} else {
  const r = spawnSync('npm', ['audit', '--json'], { cwd: katalog, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (r.error) fel(`npm audit kunde inte köras: ${r.error.message}`);
  ra = r.stdout;
}

let rapport;
try {
  rapport = JSON.parse(ra);
} catch {
  fel('npm audit gav ingen läsbar JSON');
}
if (rapport.error) fel(`npm audit gav fel: ${JSON.stringify(rapport.error)}`);
if (!rapport.vulnerabilities || typeof rapport.vulnerabilities !== 'object') fel('rapporten saknar vulnerabilities');

// Samla advisories (objekt i via). Strängar i via pekar på andra paket i
// samma rapport, och deras advisories samlas där.
const advisories = new Map();
for (const [paket, sarbarhet] of Object.entries(rapport.vulnerabilities)) {
  for (const via of sarbarhet.via || []) {
    if (typeof via === 'string') {
      if (!rapport.vulnerabilities[via]) fel(`${paket} hänvisar till ${via}, som saknas i rapporten`);
      continue;
    }
    const id = String(via.url || '').split('/').pop();
    if (!id.startsWith('GHSA-')) fel(`advisory utan GHSA-id i ${paket}: ${JSON.stringify(via)}`);
    if (!NIVAER.includes(via.severity)) fel(`okänd allvarsgrad ${via.severity} för ${id}`);
    const a = advisories.get(id) || { id, severity: via.severity, titel: via.title, paket: new Set() };
    a.paket.add(`${via.name || paket} ${via.range || ''}`.trim());
    advisories.set(id, a);
  }
}

const blockerande = [];
const undantagna = [];
for (const a of advisories.values()) {
  if (NIVAER.indexOf(a.severity) < LAGSTA) continue;
  (giltiga.has(a.id) ? undantagna : blockerande).push(a);
}

console.log(`audit ${katalog}: ${advisories.size} advisories, ${undantagna.length} undantagna, ${blockerande.length} blockerande`);
for (const a of undantagna) {
  const u = giltiga.get(a.id);
  console.log(`  undantag: ${a.id} (${[...a.paket].join(', ')}), ${a.severity}, gäller till ${u.giltig_till}`);
}
const anvanda = new Set(undantagna.map(a => a.id));
for (const u of giltiga.values()) {
  if (!anvanda.has(u.id)) console.log(`  oanvänt undantag här: ${u.id} (${u.paket})`);
}
for (const a of blockerande) {
  console.error(`  BLOCKERAR: ${a.id} (${[...a.paket].join(', ')}), ${a.severity}: ${a.titel || ''}`);
}

process.exit(blockerande.length ? 1 : 0);
