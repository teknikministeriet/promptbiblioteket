---
title: "Fakturapåminnelse: eskaleringstrappa från vänlig till inkasso"
slug: fakturapaminnelse-eskalering
category: ekonomi-finans
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17
updated_at: 2026-11-17
changelog:
  - version: "1.1"
    date: 2026-11-17
    change: "Påminnelseavgiften hänvisar till rätt lag och gäller alla gäldenärer. Förseningsersättning mellan företag tillagd, liksom regeln att avgifterna inte läggs ovanpå den. Omtestad."
tags:
  - faktura
  - påminnelse
  - inkasso
  - betalning
  - kundfordringar
---

## Syfte

Ger småföretagare en färdig eskaleringstrappa för obetalda fakturor som utgår från [räntelagen](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/rantelag-1975635_sfs-1975-635/) och [lagen (1981:739) om ersättning för inkassokostnader m.m.](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1981739-om-ersattning-for-inkassokostnader-m-m_sfs-1981-739/). Bevarar kundrelationen i tidiga steg och ger tydligt beslutsunderlag innan inkasso.

## Prompt

```txt
# Roll
Du är ekonomiansvarig i ett svenskt småföretag. Perspektiv: behålla kundrelationen samtidigt som betalningen kommer in.

# Uppgift
Skriv en eskaleringstrappa för obetald faktura: tre påminnelsetexter plus beslutsunderlag för inkasso, anpassade till svenska betalningsvillkor och räntelag.

# Kontext
Kund: [namn, typ av kund: privat/företag, relation: ny/långvarig]
Faktura: [nummer, belopp SEK, förfallodatum, vad fakturan avser]
Antal dagar förfallet: [antal]
Tidigare kommunikation: [beskriv kort, t.ex. ingen kontakt, kunden har svarat, tvist om leverans]
Företagets policy: [har ni dröjsmålsränta, påminnelseavgift, inkassopartner?]

# Regler
- Dröjsmålsränta enligt räntelagen: referensräntan plus åtta procentenheter, om inte annan ränta har avtalats
- Påminnelseavgift högst 60 kr, och bara om den avtalats senast när skulden uppkom (2 och 4 §§ lagen (1981:739) om ersättning för inkassokostnader m.m.). Gäller både privatpersoner och företag
- Mellan företag: förseningsersättning 450 kr när dröjsmålsränta gäller (4 a § samma lag). Påminnelseavgift och inkassoavgift tas då bara ut till den del de tillsammans överstiger 450 kr (5 § andra stycket), lägg dem inte ovanpå
- Första påminnelse: vänlig ton, anta att fakturan missats
- Andra påminnelse: tydligare, hänvisa till förfallodatum och eventuell ränta
- Tredje påminnelse: formell, varsla om inkasso och tillkommande kostnader
- Inga hotfulla formuleringar, håll professionell ton även i sista steget
- Skriv på svenska utan tankstreck i brödtext

# Utdataformat
1. **Påminnelse 1** (skickas dag 7 efter förfall): kort mejltext, cirka 60 ord
2. **Påminnelse 2** (skickas dag 14): mejltext med räntebesked, cirka 80 ord
3. **Påminnelse 3** (skickas dag 21): formell text med inkassovarning, cirka 100 ord
4. **Beslutsmatris för inkasso**: tabell med kriterier: belopp, kundens betalningshistorik, kommunikation, rekommendation (egen inkasso, inkassopartner, avskrivning)
5. **Interna noteringar**: 3–4 punkter som ska dokumenteras i kundkortet
```

## Användning

Fyll i kontext om kunden och fakturan. Välj rätt påminnelsenivå baserat på hur många dagar som gått efter förfallodatum. Beslutsmatrisen används när påminnelse 3 inte lett till betalning.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (företagskund, 48 500 kr, 21 dagar efter förfallodagen). Angav räntan som referensräntan plus åtta procentenheter och förseningsersättning 450 kr enligt 4 a §, och lät påminnelse- och inkassoavgiften rymmas inom den enligt 5 § andra stycket.
