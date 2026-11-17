---
title: AI-policy för organisationen
slug: ai-policy-organisation
category: hr-rekrytering
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17T00:00:00.000Z
updated_at: 2026-11-17
changelog:
  - version: "1.1"
    date: 2026-11-17
    change: "Artikel 4 beskrivs enligt lydelsen efter förordning (EU) 2026/1744. Obelagd hänvisning till IMY:s riktlinjer borttagen. Kravet på MBL-förhandling beskrivs enligt 11 och 12 §§ MBL. Omtestad."
tags:
  - ai-styrning
  - policy
  - personal
  - ai-verktyg
  - hr
---
## Syfte

Tar fram AI-policy för medarbetare med stöd i AI Act artikel 4 och GDPR. Täcker godkända verktyg, datahantering, incidentrapportering och utbildning. Artikel 4 fick ny lydelse genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32026R1744): organisationen ska vidta åtgärder för att främja AI-kunnighet hos personalen, men behöver inte garantera en viss nivå hos varje person.

## Prompt

```txt
# Roll
Du är HR-rådgivare med perspektiv på AI-styrning enligt AI Act och GDPR. Perspektiv: policyn ska vara konkret nog att följas, kort nog att läsas.

# Uppgift
Ta fram utkast till AI-policy för medarbetare. Policyn ska täcka godkända verktyg, datahantering, incidentrapportering och utbildning.

# Kontext
Organisation: [storlek, bransch, offentlig eller privat]
Nuläge AI-användning: [ingen styrning, enskilda medarbetare testar, några verktyg inköpta, bred användning]
Befintliga godkända verktyg: [t.ex. Microsoft Copilot, ChatGPT Enterprise, Claude Team, inga]
Känslig data: [personuppgifter, affärshemligheter, kundinformation, patientdata]
Regulatorisk kontext: [GDPR, AI Act, branschspecifik reglering]
Avtalsform: [kollektivavtal eller ej]

# Regler
- Policyn ska rymmas på 2-3 A4, medarbetare läser inte längre
- Fokusera på vad som ÄR tillåtet, inte bara förbud
- Inkludera konkret datahanterings-sektion: vilken data får skickas in, vilken får inte
- Ange kanal för incidentrapportering (dataläcka, felaktig AI-output som påverkat beslut)
- Referera AI Act artikel 4 i lydelsen efter förordning (EU) 2026/1744: organisationen ska vidta åtgärder för att främja AI-kunnighet hos personal som arbetar med AI-system, med hänsyn till deras kunskaper, erfarenhet och sammanhang. Kravet gäller ingen garanterad nivå hos varje person
- Hänvisa till GDPR vid personuppgiftsfrågor, detaljera inte regelverket
- Ersätt inte förhandling med fack. Med kollektivavtal: förhandla enligt 11 § MBL om policyn är en viktigare förändring av verksamheten eller arbetsförhållandena. Facket kan begära förhandling även annars (12 §)

# Utdataformat
1. **Syfte**: varför policyn finns (3-5 rader)
2. **Godkända verktyg**: lista med version eller plan där relevant
3. **Datahantering**: vad får och får inte skickas till AI
4. **Användningsregler**: du-form, exempel på användning och gränser
5. **Transparens**: när behöver du ange att AI använts (mot kunder, kollegor, i leveranser)
6. **Incidentrapportering**: vem, hur, när
7. **Utbildning**: hur organisationen främjar AI-kunnighet enligt artikel 4
8. **Revision**: när uppdateras policyn, vem äger den
```

## Användning

Specificera vilka AI-verktyg som redan används och vilken känslig data organisationen hanterar. Har organisationen kollektivavtal: pröva om policyn är en viktigare förändring som kräver förhandling enligt [11 § MBL](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-1976580-om-medbestammande-i-arbetslivet_sfs-1976-580/) innan beslut. Facket kan begära förhandling även i andra fall (12 §). Utkastet är underlag, inte beslut.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (IT-konsultbolag med 120 anställda, Copilot och kollektivavtal). Beskrev artikel 4 som organisationens åtgärder för att främja AI-kunnighet, bedömde att en första AI-policy talar för förhandling enligt 11 § MBL och nämnde att facket kan begära förhandling enligt 12 §.
