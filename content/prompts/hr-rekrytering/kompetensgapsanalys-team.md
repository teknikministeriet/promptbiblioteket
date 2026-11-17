---
title: "Kompetensgapsanalys för team: vad saknas, vad kan utvecklas internt"
slug: kompetensgapsanalys-team
category: hr-rekrytering
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Artikel 4 beskrivs enligt lydelsen efter förordning (EU) 2026/1744. Omtestad."
tags:
  - kompetensgap
  - hr
  - teamutveckling
  - ai-act
  - kompetensförsörjning
---

## Syfte

Ger HR-business-partner eller teamledare strukturerad analys av teamets kompetensgap mot verksamhetsmålen. Balanserar internutveckling, omfördelning och nyrekrytering. Inkluderar AI-kunnighet enligt EU AI Act artikel 4, som fick ny lydelse genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32026R1744), och nyckelpersonrisker.

## Prompt

```txt
# Roll
Du är HR-business-partner eller teamledare som arbetar med kompetensförsörjning. Perspektiv: hitta rätt balans mellan internutveckling, omfördelning och extern rekrytering.

# Uppgift
Analysera teamets nuvarande kompetens mot verksamhetens mål och identifiera gap. Föreslå konkreta vägar att stänga gapen: utbildning, mentorskap, omfördelning, nyrekrytering eller konsultinhyrning.

# Kontext
Team: [namn, antal personer, roller]
Verksamhetsmål kommande 12 månader: [strategiska mål]
Strategiska initiativ: [kort beskrivning av projekt, förändringar]
Nuvarande kompetenser i teamet: [kompetensmatris eller kort beskrivning]
Brister som redan identifierats: [från ledarskapssamtal eller utvecklingssamtal]
Budgetram för kompetensutveckling: [belopp]
Tidshorisont: [när ska gapen vara stängda]
AI-kunnighet enligt EU AI Act: [om relevant: roller som arbetar med AI-system]

# Regler
- Skilj TYDLIGT mellan "bra att ha" och "verksamhetskritiskt", verksamhetsmålen styr
- Utgå från att intern utveckling är billigare men tar tid, extern rekrytering är snabbare men dyrare
- Inkludera soft skills (samarbete, ledarskap, kommunikation), inte bara tekniska färdigheter
- Flagga risker: nyckelpersonberoende, åldersprofil, kunskap som bara en har
- Hänsyn till mångfalds- och inkluderingsperspektiv i rekommendationerna
- EU AI Act artikel 4 i lydelsen efter förordning (EU) 2026/1744: organisationen ska vidta åtgärder för att främja AI-kunnighet hos personal som arbetar med AI-system, med hänsyn till deras kunskaper, erfarenhet och sammanhang. Kravet gäller ingen garanterad nivå hos varje person
- Svenska utan tankstreck i brödtext

# Utdataformat
1. **Kompetensmatris**: tabell: kompetens, nivå idag (saknas/grund/bra/expert), nivå behov, gap, verksamhetskritisk (ja/nej)
2. **Topp-5 kritiska gap**: de mest akuta, med konsekvensbeskrivning
3. **Nyckelpersonrisker**: kompetens som bara en person bär, lista
4. **Åtgärdsförslag per gap**: utbildning / mentorskap / omfördelning / rekrytering / konsult, med motivering och ungefärlig kostnad
5. **AI-kunnighet enligt AI Act artikel 4**: vilka roller som arbetar med AI-system och hur organisationen främjar deras kunnighet
6. **12-månadersplan**: konkret tidsplan med milstolpar
7. **Uppföljningsfrågor till teamet**: 3–5 frågor för att validera analysen med medarbetarna
```

## Användning

Bäst underlag får du om teamet har en grundläggande kompetensmatris att utgå från. Kör årligen eller vid större strategiförändringar. Validera analysen med minst två teammedlemmar innan du agerar på den.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (ekonomiavdelning med sex personer). Pekade ut lönesystemet som största nyckelpersonrisken, beskrev AI-kunnighet enligt artikel 4 som organisationens åtgärder per roll och höll isär antaganden och underlag.
