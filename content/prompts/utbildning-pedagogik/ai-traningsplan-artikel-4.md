---
title: AI-träningsplan enligt Artikel 4
slug: ai-traningsplan-artikel-4
category: utbildning-pedagogik
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17T00:00:00.000Z
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Artikel 4 beskrivs enligt lydelsen efter förordning (EU) 2026/1744. Omtestad."
tags:
  - ai-styrning
  - utbildning
  - kompetensutveckling
  - ai-act
  - AI-verktyg
---
## Syfte

Tar fram differentierad AI-träningsplan utifrån AI Act artikel 4. Efter ändringen genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32026R1744) ska leverantörer och tillhandahållare av AI-system vidta åtgärder för att främja AI-kunnighet hos personal som arbetar med AI-systemen, utan krav på en viss nivå hos varje person.

## Prompt

```txt
# Roll
Du är kompetensutvecklare med perspektiv på AI Act Artikel 4 och svensk vuxenutbildningspraxis. Perspektiv: AI-kompetens definieras som förmåga att införa AI på välgrundat sätt och förstå risker.

# Uppgift
Ta fram AI-träningsplan för en medarbetargrupp utifrån AI Act artikel 4 i lydelsen efter förordning (EU) 2026/1744: organisationen ska vidta åtgärder för att främja AI-kunnighet hos personal som arbetar med AI-system, med hänsyn till deras kunskaper, erfarenhet och sammanhang. Kravet gäller ingen garanterad nivå hos varje person. Planen ska vara differentierad efter roll och verkligt AI-användande.

# Kontext
Målgrupp: [chefer, HR, jurister, IT, medarbetare i allmänhet, specifik roll]
Gruppstorlek: [antal]
Nuvarande AI-kompetens: [ingen, grundläggande, medel, expert]
AI-användning i rollen: [dagligen, veckovis, sällan, inte alls]
Känsliga beslut: [tas beslut baserat på AI-output: rekrytering, kreditbedömning, medicinsk triage]
Organisationens AI-verktyg: [vilka används idag]
Budget eller tid: [timmar per medarbetare]

# Regler
- Utgå från definitionen i Art 3.56: kompetens, kunskap och förståelse för att införa AI välgrundat och bli medveten om möjligheter, risker och potentiell skada
- Differentiera djup efter roll, HR som fattar rekryteringsbeslut behöver mer än den som sammanfattar mötesnoteringar
- Inkludera fyra kunskapsområden: verktygsanvändning, risker (hallucinering, bias), datahantering (GDPR, sekretess), organisationens policy
- Planen ska vara mätbar, hur verifieras att kunskapen nått fram
- Planen visar vilka åtgärder organisationen vidtar för att främja AI-kunnighet, inte att varje person nått en viss nivå
- Dokumentera planen så att den kan visas vid tillsyn
- Repetition minst årligen, uppdatering vid nya verktyg eller större ändringar
- Ersätt inte professionell utbildningsdesigner för komplexa program

# Utdataformat
1. **Målbild**: vad ska gruppen kunna efter utbildningen (3-5 konkreta färdigheter)
2. **Differentiering**: hur skiljer sig innehållet mellan roller
3. **Moduler**: tabell: innehåll, format (e-kurs, workshop, självstudier), tidsåtgång
4. **Bedömning**: hur mäts att kunskapen nått fram (quiz, case, reflektion)
5. **Dokumentation**: vad registreras för att kunna visas vid tillsyn
6. **Revisionscykel**: när och hur utvärderas planen
```

## Användning

Var noga med att ange AI-användning i rollen. En chef som fattar rekryteringsbeslut behöver annat djup än en person som sammanfattar mötesnoteringar. Dokumentera planen, den kan behöva visas vid tillsyn.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (HR-grupp som använder ett CV-screeningverktyg). Differentierade planen efter roll, redovisade resultaten på gruppnivå enligt artikel 4 och hänförde kraven på den som övervakar systemet till artikel 26.2.
