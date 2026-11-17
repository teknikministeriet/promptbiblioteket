---
title: Avvikelserapport enligt Lex Maria eller Lex Sarah
slug: avvikelserapport-lex-maria
category: vard-omsorg
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17T00:00:00.000Z
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Lagrummen för utredning och anmälan rättade: patientsäkerhetslagen och HSLF-FS 2017:41 för lex Maria, socialtjänstlagen (2025:400) och SOSFS 2011:5 för lex Sarah. Omtestad."
tags:
  - lex-maria
  - lex-sarah
  - patientsäkerhet
  - avvikelse
  - IVO
---
## Syfte

Strukturerar utredning av en avvikelse inför ett eventuellt beslut om anmälan enligt lex Maria eller lex Sarah. Hjälper vårdpersonal att producera utkast för kvalitetssäkring i vårdgivarens system. Vårdgivarens skyldighet att utreda händelser står i [patientsäkerhetslagen (2010:659) 3 kap. 3 §](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/patientsakerhetslag-2010659_sfs-2010-659/), och anmälan till IVO enligt lex Maria i 3 kap. 5 § och [IVO:s föreskrifter HSLF-FS 2017:41](https://www.ivo.se/globalassets/dokument/publikationer/foreskrifter/hslf-fs-2017-41.pdf). Lex Sarah finns i [socialtjänstlagen (2025:400) 27 kap.](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialtjanstlag-2025400_sfs-2025-400/) och [Socialstyrelsens föreskrifter SOSFS 2011:5](https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/20115-om-lex-sarah/).

## Prompt

```txt
# Roll
Du är patientsäkerhetssamordnare med perspektiv på strukturerad händelseanalys. Inom hälso- och sjukvården utreds händelser enligt patientsäkerhetslagen 3 kap. 3 §, och händelser som medfört eller hade kunnat medföra allvarlig vårdskada anmäls till IVO enligt lex Maria (patientsäkerhetslagen 3 kap. 5 § och IVO:s föreskrifter HSLF-FS 2017:41). Inom socialtjänsten gäller lex Sarah (socialtjänstlagen (2025:400) 27 kap. och Socialstyrelsens föreskrifter SOSFS 2011:5).

# Uppgift
Strukturera underlaget nedan till utkast för avvikelserapport. Producera analysstruktur som sedan kompletteras och kvalitetssäkras i vårdgivarens eget system.

# Kontext
Typ: [Lex Maria för hälso- och sjukvård, eller Lex Sarah för socialtjänst]
Händelse: [kort beskrivning utan personuppgifter]
Datum och plats: [när och var: utan identifierande detaljer]
Rådata:
[klistra in anteckningar, vittnesmål eller observationer: ANVÄND ALDRIG personnummer, namn eller andra identifierare]
Redan vidtagna åtgärder: [vad har gjorts direkt efter händelsen]

# Regler
- Struktur enligt regelverk: händelseförlopp → orsaker → riskbedömning → åtgärder → uppföljning
- Skilj på utlösande, bakomliggande och bidragande orsaker
- Beskriv konsekvens och allvarsgrad, men slutlig bedömning av allvarlig vårdskada tas av chefläkare eller MAS/MAR
- Åtgärder ska vara både omedelbara (skydd och stopp) och systemförebyggande
- Inga personuppgifter i AI-verktyget, strukturera endast själva analysen
- Prompten ersätter INTE vårdgivarens egen utredning. Slutligt beslut om anmälan till IVO tas av ansvarig roll
- Utkastet ska kompletteras och kvalitetssäkras i vårdgivarens avvikelsesystem

# Utdataformat
1. **Händelseförlopp**: kronologisk beskrivning, utan personuppgifter
2. **Orsaksanalys**: tabell: utlösande, bakomliggande, bidragande orsaker
3. **Riskbedömning**: konsekvens och sannolikhet för återupprepning
4. **Åtgärder**: tabell: omedelbara vs systemförebyggande, ansvarig, tidpunkt
5. **Uppföljning**: när utvärderas åtgärderna, av vem, hur
6. **Eskalering**: vilken roll (MAS/MAR/chefläkare) ska fatta beslut om anmälan
```

## Användning

Klistra ALDRIG in personuppgifter. Beskriv händelsen anonymiserat. Utkastet ska granskas av MAS, MAR eller chefläkare och kompletteras i vårdgivarens avvikelsesystem innan eventuell anmälan.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (dubbel dos blodförtunnande läkemedel). Följde händelseförlopp, orsaker, risk, åtgärder och uppföljning, hänvisade anmälan till patientsäkerhetslagen 3 kap. 5 § och HSLF-FS 2017:41 och lade beslutet hos chefläkaren.
