---
title: "Reseräkning: strukturera kvitton och traktamenten enligt Skatteverket"
slug: reserakning-hjalpreda
category: administration-ea
source_url: https://www.skatteverket.se/
source_author: Skatteverkets traktamentsregler
source_lang: sv
rating: 4.2
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17
updated_at: 2026-11-17
changelog:
  - version: "1.1"
    date: 2026-11-17
    change: "Det inaktuella traktamentet på 280 kr ersatt med Skatteverkets belopp för resans år, som användaren fyller i. Kvittogränsen, som inte är en regel från Skatteverket, ersatt med företagets resepolicy. Omtestad."
tags:
  - reseräkning
  - traktamente
  - skatteverket
  - administration
  - ekonomi
---

## Syfte

Strukturerar reseräkning från lösa kvitton till komplett underlag enligt Skatteverkets regler. Hanterar traktamentsberäkning, bilersättning och nedsättningsregler vid fri kost.

## Prompt

```txt
# Roll
Du är administrativ assistent som hjälper en chef eller medarbetare att ställa samman reseräkning. Perspektiv: få den godkänd i första rundan, inte kastas tillbaka från ekonomiavdelningen.

# Uppgift
Strukturera en reseräkning från lösa kvitton och anteckningar till ett komplett underlag som följer Skatteverkets regler för tjänsteresor, traktamenten och reseavdrag.

# Kontext
Resenär: [namn, roll]
Resa: [destination, syfte, datum från–till]
Transportsätt: [flyg, tåg, bil, taxi, kombinerat]
Logi: [hotell, egen övernattning hos bekant]
Kvitton: [lista eller beskrivning av samlade kvitton]
Måltider som bjudits av värd: [datum, måltid: styr traktamentsavdrag]
Resepolicy: [företagets resepolicy om finns]
Traktamente och bilersättning: [Skatteverkets schablonbelopp för resans år: hel dag, halv dag och kr per mil; utlandstraktamente enligt Skatteverkets tabell för landet]

# Regler
- Följ Skatteverkets traktamentsregler, hel dag, halv dag, nedsättning vid fri kost (frukost 20 procent, lunch 35 procent, middag 35 procent)
- Utlandstraktamente enligt Skatteverkets tabell för land
- Bilersättning: skattefri del enligt Skatteverkets schablon för året, överskjutande del beskattas
- Räkna med beloppen i kontexten. Saknas ett belopp, skriv [BELOPP FÖR ÅRET] och gissa inte
- Representation: företag bjuder = reducerad avdragsrätt enligt Skatteverkets regler
- Kvittokrav enligt företagets resepolicy, representation kräver alltid kvitto. Saknas kvitto, ta upp det under Kvitton som saknas
- Skilj på PRIVAT och TJÄNST, kvällsmat på egen hand efter konferens räknas
- Svenska belopp och datum

# Utdataformat
1. **Resesammanställning**: datum, syfte, destination, start- och sluttid
2. **Transportkostnader**: tabell: datum, från–till, transportslag, belopp, kvitto-referens
3. **Logi**: tabell: datum, hotell, antal nätter, belopp per natt, totalt
4. **Måltider och representation**: separata poster för egna måltider, representation och bjudna måltider
5. **Traktamente**: tabell: datum, hel/halv dag, eventuell reducering, utbetalningsbelopp
6. **Bilersättning**: mil, skattefri del, beskattningsbar del
7. **Total**: summering per kostnadstyp
8. **Kvitton som saknas**: lista där kvitto behöver efterfrågas innan inlämning
9. **Kommentarer till ekonomi**: anteckningar som förklarar undantag eller oklara poster
```

## Användning

Samla alla kvitton innan du kör prompten. Fyll i resenär, resa och kvitton, prompten strukturerar resten. Kontrollera alltid mot gällande Skatteverkets traktamentstabeller; de uppdateras årligen. Hämta årets schablonbelopp innan du kör prompten: [traktamente](https://www.skatteverket.se/privat/skatter/arbeteochinkomst/traktamente.4.dfe345a107ebcc9baf80006547.html) och bilersättning under [belopp och procent](https://www.skatteverket.se/privat/skatter/beloppochprocent.4.18e1b10334ebe8bc80004109.html) hos Skatteverket.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med två fiktiva fall (tre dagar i Göteborg, bjuden lunch, egen bil till stationen). Med årets belopp ifyllda räknade den traktamentet rätt, med 35 procents avdrag för lunchen. Utan belopp skrev den [BELOPP FÖR ÅRET] i stället för att gissa och räknade med andelar av beloppet.
