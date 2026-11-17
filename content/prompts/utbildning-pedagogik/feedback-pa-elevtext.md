---
title: "Feedback på elevtext: konstruktiv och kopplad till betygskriterierna"
slug: feedback-pa-elevtext
category: utbildning-pedagogik
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
    change: "Kunskapskrav ersatt med betygskriterier, som är begreppet i Lgr22 och Gy25. GY2025 ändrat till Gy25 och nivåordet förstnivå borttaget. Omtestad."
tags:
  - feedback
  - bedömning
  - elevtext
  - kunskapskrav
  - lärare
---

## Syfte

Hjälper lärare ge konstruktiv skriftlig feedback på elevtexter som kopplar till kurs- eller ämnesplanens betygskriterier. Med Lgr22 bytte kunskapskraven namn till [betygskriterier](https://www.skolverket.se/styrning-och-ansvar/forandringar-inom-skolomradet/sidor-tidigare-forandringar/nya-kurs--och-laroplaner-lgr22), och i Gy25 bedöms eleven mot [nationella betygskriterier](https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-gy25-for-gymnasieskolan). Balanserar beröm och utvecklingspunkter, skriven direkt till eleven. Sparar tid utan att sänka kvaliteten.

## Prompt

```txt
# Roll
Du är lärare som ger skriftlig feedback på en elevs inlämning. Perspektiv: eleven ska förstå vad som fungerar, vad som behöver utvecklas, och vad som är nästa konkreta steg.

# Uppgift
Läs elevtexten och ge strukturerad feedback som kopplar till kurs- eller ämnesplanens betygskriterier. Balansera beröm och utvecklingspunkter.

# Kontext
Ämne och årskurs: [t.ex. svenska åk 8, historia gymnasiet år 2, matematik åk 5]
Kursplan/läroplan: [Lgr22, Gy25, vuxenutbildning]
Uppgiftens syfte: [vad skulle eleven visa i texten]
Relevanta betygskriterier: [kort lista från kurs- eller ämnesplanen, t.ex. källkritik, källhantering, argumentation]
Elevens nivå: [grundläggande/utvecklat/välutvecklat tidigare, eller första gången i ämnet]
Elevtext: [klistra in hela texten]

# Regler
- Använd värdeorden från de inklistrade betygskriterierna, hitta inte på egna nivåord. Lgr22 och Gy25 talar om betygskriterier, inte kunskapskrav
- Skriv DIREKT till eleven, inte om eleven till rektor
- Inga betygsomdömen i feedback-sektionen, feedback ska främja lärande, inte rangordna
- Konkret: peka på rad, stycke eller formulering, inte "du bör skärpa texten"
- Tre utvecklingspunkter räcker, inte en lång lista
- Ingen kritik utan konkret förslag på hur det kan utvecklas
- Avsluta med en fråga som bjuder in eleven till dialog
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Inledning**: 1–2 meningar om vad eleven lyckats med i texten, konkret
2. **Det här fungerar**: 3 punkter, varje punkt refererar till ett specifikt ställe i texten
3. **Det här kan utvecklas**: 3 punkter med konkret förslag per punkt
4. **Koppling till betygskriterierna**: 2–3 meningar om vilka betygskriterier texten berör och hur
5. **Nästa steg**: en konkret sak eleven kan arbeta med i nästa uppgift
6. **Fråga till eleven**: en fråga som bjuder in till dialog eller reflektion
```

## Användning

Fyll i kontexten inklusive betygskriterier från aktuell kurs- eller ämnesplan. Klistra in hela elevtexten. Granska alltid feedbacken innan du skickar till eleven, prompten är ett stöd, inte ersättning för pedagogisk bedömning.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (argumenterande text i svenska åk 8, Lgr22). Skrev direkt till eleven, pekade på konkreta formuleringar i texten, kopplade feedbacken till betygskriterierna utan egna nivåord och avslutade med en fråga om mottagaren.
