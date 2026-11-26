---
title: Budgetjämförelse mellan två år i en rapport
slug: budgetjamforelse-tva-ar-i-rapport
category: ekonomi-finans
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.0"
tested_models:
  - claude-sonnet-5-5
tested_date: 2026-11-26
tags:
  - budget
  - analys
  - ledningsgrupp
  - controller
  - ekonomi
---

## Syfte

Hittar de poster som förändras mest mellan två budgetår i en lång rapport, till exempel en verksamhetsplan, budget eller årsredovisning i PDF, och rangordnar dem i en tabell med tryckt sidnummer. Orsaker som rapporten själv anger hålls isär från frågor till verksamheten. För controllers som ska förklara budgeten för ledningsgruppen eller nämnden.

## Prompt

```txt
# Roll
Du är controller och läser en budget åt ledningsgruppen. Perspektiv: ledningen ska förstå vad som förändras mellan åren, och varje belopp ska gå att hitta i dokumentet.

# Uppgift
Jämför budgeten för [ÅR 2] med budgeten för [ÅR 1] i det bifogade dokumentet och visa de [ANTAL, t.ex. fem] poster som förändras mest.

# Kontext
Dokument: [bifoga PDF:en, till exempel verksamhetsplan, budget eller årsredovisning]
Tabell: [till exempel Resultatbudget, eller lämna tomt om du inte vet var den står]
Mottagare: [till exempel ledningsgruppen eller nämnden]
Enhet: [till exempel miljoner kronor]

# Regler
- Hämta beloppen ur dokumentet och räkna förändringarna ur dem. Saknas ett år eller en post, skriv det i stället för att uppskatta.
- Rangordna efter förändringens storlek i kronor, oavsett om posten ökar eller minskar.
- Ta med enskilda intäkts- och kostnadsposter i tabellen. Summeringsrader som verksamhetens intäkter, kostnader och resultat visas för sig under tabellen.
- Kostnader står ofta med minustecken. Skriv därför i ord om posten ökar eller minskar.
- Ange sidorna med det sidnummer som står tryckt i dokumentet, och bara det.
- Orsaker: ta bara med orsaker som dokumentet självt anger, med sida. Andra möjliga orsaker skrivs som frågor till verksamheten.

# Utdataformat
1. Tabell med kolumnerna Post, [ÅR 1], [ÅR 2], Förändring (ökar eller minskar, belopp) och Förändring i procent, sorterad på störst förändring
2. Summeringsraderna för båda åren
3. Högst tre meningar om vad förändringarna betyder för mottagaren
4. Orsaker enligt dokumentet med sida, och frågor till verksamheten
```

## Användning

Bifoga PDF:en och fyll i åren, antalet poster och vilken tabell det gäller. Vet du inte var tabellen står, lämna raden tom. Ställ sedan Hämtat eller räknat: kontrollfråga om AI:ns siffror i samma chatt och sök upp två av beloppen i dokumentet. Sök på beloppet med sökfunktionen, eftersom det tryckta sidnumret ofta skiljer sig från sidan i PDF-läsaren. Frågorna till verksamheten tar du med till dem som äger posterna.

## Testresultat

- **Claude Sonnet 5.5:** ★★★★☆: Testad på en offentlig verksamhetsplan i PDF på 72 sidor, med budget för två år i följd. De fem posterna, beloppen och summeringsraderna stämde mot dokumentet, i en gemensam rangordning för intäkter och kostnader och med ökning eller minskning i ord. Orsakerna fick tryckt sida, och alla sidor stämde vid kontroll. En mening om vad förändringarna betyder räknade fel med 5 miljoner kronor, eftersom avskrivningarna inte kom med, så kör Hämtat eller räknat efteråt. En kort fråga om samma dokument gav två tabeller utan gemensam rangordning och orsaker utan sida.
