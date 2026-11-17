---
title: AI-riskanalys enligt AI Act
slug: ai-riskanalys-ai-act
category: juridik-compliance
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.3
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17T00:00:00.000Z
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Tillämpningsdatumen uppdaterade efter ändringen av AI-förordningen genom förordning (EU) 2026/1744: hög risk enligt bilaga III från 2 december 2027 och enligt bilaga I från 2 augusti 2028. Omtestad."
tags:
  - ai-styrning
  - ai-act
  - risklassning
  - compliance
  - juridik
---
## Syfte

Klassificerar AI-system enligt EU:s AI Act (förbjuden, hög, begränsad eller minimal risk) och skapar underlag inför kraven för AI-system med hög risk. Efter ändringen genom [förordning (EU) 2026/1744](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=CELEX:32026R1744) gäller kraven för hög risk enligt bilaga III från 2 december 2027 och enligt bilaga I från 2 augusti 2028.

## Prompt

```txt
# Roll
Du är compliance-rådgivare med perspektiv på EU:s AI-förordning (AI Act). Perspektiv: klassificering enligt Artikel 5 (förbjudna), Artikel 6 och Annex III (hög risk), begränsad risk, minimal risk.

# Uppgift
Klassificera AI-systemet nedan enligt AI Act och lista tillämpliga krav. Beskriv vad organisationen behöver göra före respektive tillämpningsdatum.

# Kontext
AI-system: [beskriv funktion och ändamål]
Domän: [rekrytering, kreditbedömning, utbildning, biometri, kritisk infrastruktur, offentlig tjänst, annat]
Användare: [vem fattar beslut baserat på AI: HR, kundtjänst, automatiserat]
Berörda personer: [anställda, kunder, medborgare]
Leverantör: [köpt lösning, egen utveckling, open source]
Geografisk marknad: [Sverige, EU, globalt]

# Regler
- Klassificera i EN av fyra kategorier: förbjuden (Art 5), hög risk (Art 6 + Annex III), begränsad risk (transparenskrav), minimal risk
- Vid hög risk: lista krav på riskhanteringssystem, dokumentation, datakvalitet, mänsklig översyn (Art 8-15)
- Flagga om systemet tangerar förbjudna tillämpningar (manipulation, social scoring, emotionsinferens i arbete eller skola)
- Särskilt utmärkande risker för svenska SME: rekryterings-AI, kreditbedömning, tillgång till offentliga tjänster
- Ange tillämpningsdatum enligt förordningen efter ändringen genom förordning (EU) 2026/1744: Art 5 från 2 feb 2025 (förbuden som lades till i Art 5.1 ba och bb från 2 dec 2026), hög risk enligt Art 6.2 och Annex III från 2 dec 2027, hög risk enligt Art 6.1 och Annex I från 2 aug 2028. Utgå från dessa datum, inte från äldre uppgifter om 2 aug 2026
- Detta ERSÄTTER inte juridisk rådgivning, komplex klassificering ska verifieras av jurist
- Böter upp till 35 MEUR eller 7 % av global omsättning, ta inte lätt på förbjuden-flaggan

# Utdataformat
1. **Klassificering**: förbjuden, hög, begränsad eller minimal risk med motivering
2. **Relevanta lagrum**: specifika artiklar och Annex III-punkter
3. **Tillämpningsdatum**: när respektive krav träder i kraft
4. **Krav att uppfylla**: tabell med krav, deadline, ansvarig roll
5. **Red flags**: förbjudna tillämpningar som måste åtgärdas direkt
6. **Nästa steg**: vad organisationen bör göra först
```

## Användning

Beskriv AI-systemet konkret med ändamål och användning. Datumen i prompten gäller förordningen efter ändringen genom förordning (EU) 2026/1744, antagen 8 juli 2026. Kontrollera aktuell lydelse på EUR-Lex innan underlaget används. Verifiera alltid komplex klassificering med jurist, böter upp till 35 MEUR eller 7 % av global omsättning vid förbjuden kategori.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (köpt verktyg som rangordnar CV till kundtjänstroller). Klassade systemet som hög risk enligt Art 6.2 och bilaga III punkt 4 a, angav datumen efter förordning (EU) 2026/1744 (2 dec 2026, 2 dec 2027, 2 aug 2028), skilde på leverantör och tillhandahållare och bad om juristkontroll av lydelsen.
