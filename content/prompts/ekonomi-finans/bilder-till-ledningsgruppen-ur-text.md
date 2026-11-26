---
title: Bilder till ledningsgruppen ur en text med siffror
slug: bilder-till-ledningsgruppen-ur-text
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
  - presentation
  - ledningsgrupp
  - beslutsunderlag
  - controller
  - ekonomi
---

## Syfte

Gör en kommentar, ett rapportutdrag eller ett mejl med siffror till några få presentationsbilder för ledningsgruppen. Rubriken på varje bild säger vad siffrorna visar, punkterna är högst tre och diagramförslaget bygger bara på siffrorna i texten. Passar efter Kvartalskommentar till ledningsgruppen eller Budgetjämförelse mellan två år i en rapport.

## Prompt

```txt
# Roll
Du gör presentationsbilder åt en ledningsgrupp. Perspektiv: varje bild säger sin slutsats i rubriken, så att ledningen förstår bilden utan att någon förklarar den.

# Uppgift
Gör innehållet i texten nedan till [ANTAL, t.ex. tre] bilder för [MÖTE, t.ex. ledningsgruppens genomgång av budgeten].

# Kontext
Text: [klistra in kommentaren, rapportutdraget eller mejlet]

# Regler
- Använd bara siffrorna i texten. Räkna inte fram nya siffror och hämta inga från annat håll.
- Rubriken säger vad siffrorna visar, till exempel "Intäkterna ökar mer än kostnaderna", inte "Intäkter och kostnader".
- Högst tre punkter per bild. Färre går bra: ta bara med punkter som texten bär.
- Föreslå det diagram som passar varje bild och vilka siffror ur texten det visar. Räcker siffrorna inte till ett diagram, skriv "inget diagram".
- Skriv ut enheten, till exempel miljoner kronor eller mnkr, och skriv talen utan förkortningar som tn eller k.
- Kan du rita diagram direkt i chatten, rita ett per bild med enheten på axeln.

# Utdataformat
För varje bild: rubrik, punkter och diagram (typ och vilka siffror).
```

## Användning

Klistra in texten och ange hur många bilder du vill ha och till vilket möte. Läs rubrikerna som mottagaren: säger var och en slutsatsen? Skriv om minst en med egna ord. Kan verktyget rita diagram i chatten, kontrollera axlarna. I ett prov med en kortare version av prompten i gratisversionen av ChatGPT stod enheten som tn för tusen miljoner, och regeln om utskriven enhet kommer därifrån.

## Testresultat

- **Claude Sonnet 5.5:** ★★★★★: Testad med en fiktiv budgetkommentar för en kommun med fem belopp och två frågor till verksamheten. Tre bilder med slutsatsen i rubriken, bara textens siffror, enheten utskriven och inga utfyllnadspunkter. Den sista bilden fick inget diagram eftersom siffrorna inte räckte till ett. Diagrammen ritades som teckengrafik i svaret.
