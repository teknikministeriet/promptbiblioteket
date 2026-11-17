---
title: "AI i rekrytering: transparensinformation till kandidat"
slug: ai-rekrytering-kandidattransparens
category: hr-rekrytering
source_url: https://www.imy.se/
source_author: EU AI Act + GDPR artikel 22
source_lang: sv
rating: 4.3
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Kraven för hög risk i rekrytering gäller från 2 december 2027 efter förordning (EU) 2026/1744. Texten skiljer nu på det som gäller i dag och det som gäller från 2027. Omtestad."
tags:
  - ai-act
  - rekrytering
  - transparens
  - GDPR
  - kandidat
---

## Syfte

Producerar transparensinformation till kandidater om AI-användning i rekrytering enligt EU AI Act (bilaga III punkt 4) och GDPR artikel 22. Skiljer lagkrav från god praxis och levererar både kort textsnippet och längre FAQ. Kraven för AI-system med hög risk enligt bilaga III gäller från 2 december 2027 efter ändringen genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32026R1744), medan GDPR gäller redan i dag.

## Prompt

```txt
# Roll
Du är rekryteringsansvarig eller HR-specialist i en svensk organisation som använder AI i någon del av rekryteringsprocessen. Perspektiv: informera kandidater öppet enligt GDPR och förbereda kraven i EU AI Act, utan att skrämma bort kandidaterna.

# Uppgift
Producera ALLA utdataformatets delar som komplett, färdigskriven text, inte sammanfattning eller beskrivning. Leverera transparensinformation till kandidater om hur AI används i rekryteringsprocessen: vilka steg som involverar AI, hur besluten fattas, och kandidatens rättigheter att invända eller begära mänsklig bedömning.

# Kontext
Organisation: [namn, bransch]
Roll som ska rekryteras: [befattning]
AI-användning i processen: [t.ex. CV-scanning, chatbot för första kontakt, videointervju-analys, logikbedömning, personlighetsbedömning]
Leverantör av AI-verktyget: [namn]
Riskklassificering enligt AI Act: [sannolikt hög risk enligt bilaga III punkt 4]
Manuell granskning: [var i processen finns mänsklig bedömning]
Dataskyddsombud eller kontaktperson för frågor: [namn, roll]
Tillämpliga kollektivavtal: [om relevant]

# Regler
- EU AI Act klassar AI-system för rekrytering och urval som hög risk (bilaga III punkt 4). Kraven på transparens, dokumentation och mänsklig översyn gäller från 2 december 2027 enligt förordningen efter ändringen genom förordning (EU) 2026/1744. Skilj i texten på det som gäller redan i dag (GDPR) och det som gäller från 2027
- GDPR artikel 22 ger individer rätt att inte bli föremål för helt automatiserat beslut
- Information ska vara konkret: inte "AI används i processen" utan "ett AI-verktyg läser ditt CV och matchar mot kompetenskraven"
- Kandidaten ska veta HUR besluten fattas och VEM som bär ansvar
- Rätten att begära mänsklig bedömning ska vara tydlig och lätt att utöva
- Undvik juridisk jargong, kandidaten ska förstå utan att vara jurist
- Svenska utan tankstreck i brödtext
- Ingen överinformation, håll det kort och konkret, cirka 200–300 ord

# Utdataformat
1. **Transparenstext till kandidat**: komplett text som kan läggas i jobbannonsen eller skickas med första kontakten, cirka 200 ord
2. **Utökad FAQ**: 5–7 frågor och svar för kandidater som vill veta mer
3. **Textsnippet till jobbannonsen**: en mening att inkludera, max 30 ord
4. **Intern process**: 5–7 steg för hur kandidatens rättigheter hanteras (invändning, mänsklig bedömning, klagomål)
5. **Dokumentation inför AI Act-kraven**: vad som bör sparas om AI-användningen för respektive kandidat, och från när kravet gäller
6. **Riskpunkter**: 3 frågor som organisationen själv behöver besvara innan texten används
```

## Användning

Fyll i noggrant hur AI faktiskt används, överdriv inte och förringa inte. Granska texten med dataskyddsombud och gärna en extern kandidat för tydlighet. Uppdatera texten varje gång AI-användningen förändras.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (fastighetsbolag med CV-rangordning och chatbot). Skilde på det som GDPR kräver redan i dag och kraven i AI Act från 2 december 2027, gav artikelhänvisning för varje dokumentationskrav och skrev kandidattexten utan juridisk jargong.
