---
title: "Årsbokslut-förberedelse: checklista enligt K2 eller K3"
slug: arsbokslut-forberedelse-k2-k3
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
    change: "Kontroll av om företaget får använda K2 tillagd, efter BFN:s ändrade tillämpningsområde från räkenskapsår som inleds efter 31 december 2025. Omtestad."
tags:
  - årsbokslut
  - K2
  - K3
  - redovisning
  - årsredovisning
---

## Syfte

Hjälper företagare och ekonomiansvariga att förbereda årsbokslutet utan att missa svenska deadlines eller regelverksspecifika krav. Skiljer tydligt mellan K2 och K3 och vad företagaren själv ska göra.

## Prompt

```txt
# Roll
Du är redovisningskonsult i ett svenskt småföretag. Perspektiv: ägaren ska få en renodlad checklista för årsbokslutet, inte en redovisningsföreläsning.

# Uppgift
Skapa en konkret förberedelse-checklista inför årsbokslutet, anpassad till företagets storlek och valda regelverk (K2 eller K3).

# Kontext
Företagsform: [AB, HB, EF]
Regelverk: [K2 eller K3]
Räkenskapsår: [t.ex. 2026-01-01 till 2026-12-31]
Verksamhetens art: [kort beskrivning]
Antal anställda: [antal]
Omsättning föregående år: [belopp SEK]
Eventuella förändringar under året: [nyanställningar, nya avtal, ägarbyte, nytt lånekapital]

# Regler
- Följ svensk årsredovisningslag och Bokföringsnämndens allmänna råd
- Kontrollera att valt regelverk är tillåtet. Från räkenskapsår som inleds efter 31 december 2025 får vissa företag inte längre använda K2 Årsredovisning, bland annat bostadsrättsföreningar och företag över vissa storleksgränser. Flagga om företaget kan vara ett av dem
- Skilj tydligt mellan punkter som revisorn/redovisningskonsulten hanterar och punkter som ägaren/företagaren själv måste förbereda
- Flagga deadlines enligt Skatteverket och Bolagsverket (inkomstdeklaration, årsredovisning)
- Svenska belopp och datum
- Var konkret, undvik fraser som "se till att allt stämmer"

# Utdataformat
1. **Deadlines**: tabell med datum, vad som ska lämnas in, till vem
2. **Checklista bokföring**: 6–10 punkter, sorterade efter om de är företagarens ansvar eller redovisningskonsultens
3. **Dokument att samla in**: konkret lista (kontoutdrag, lagerinventering, anläggningsregister, etc.)
4. **Vanliga misstag för detta regelverk**: 3–5 punkter specifika för K2 respektive K3
5. **Frågor till revisor/konsult**: 3–5 frågor ägaren bör ställa innan bokslutet slutförs
```

## Användning

Fyll i företagsform och välj rätt regelverk. Bokföringsnämnden har ändrat vilka företag som får använda K2 från räkenskapsår som inleds efter 31 december 2025, se [BFN:s sida om ändringen](https://www.bfn.se/andrat-tillampningsomrade-for-k2-arsredovisning-for-mindre-foretag/). Kör 2–3 månader före räkenskapsårets slut för bästa effekt. Kombinera med dialog med revisor/redovisningskonsult, prompten ersätter inte dem.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (IT-konsultbolag AB med K2 och fem anställda, räkenskapsår 2026). Flaggade först att K2-behörigheten ska stämmas av mot BFN:s ändrade regler för räkenskapsår efter 31 december 2025 och listade bolagets siffror för jämförelsen, och gav sedan deadlines, checklista och vanliga misstag med K2.
