---
title: "GDPR-incident: beslutsstöd för anmälan till IMY"
slug: gdpr-incident-beslutsstod
category: juridik-compliance
source_url: https://www.imy.se/
source_author: IMY (artikel 33–34 GDPR)
source_lang: sv
rating: 4.4
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-17
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Påståendet om att IMY föredrar överanmälan borttaget, bedömningen följer artikel 33. Omtestad."
tags:
  - GDPR
  - incident
  - IMY
  - dataskydd
  - beslutsstöd
---

## Syfte

Ger strukturerat beslutsunderlag vid misstänkta personuppgiftsincidenter. Klarlägger om IMY-anmälan krävs enligt artikel 33 och om registrerade ska informeras enligt artikel 34. Hjälper organisationen att hålla 72-timmarsfristen i artikel 33 och att dokumentera incidenten, vilket artikel 33.5 kräver även när den inte anmäls. [IMY beskriver reglerna för personuppgiftsincidenter](https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/personuppgiftsincidenter/).

## Prompt

```txt
# Roll
Du är dataskyddsombud eller informationssäkerhetsansvarig i en svensk organisation. Perspektiv: skydda de registrerade först, dokumentera korrekt, och fatta beslut om IMY-anmälan inom 72-timmarsfönstret.

# Uppgift
Analysera en misstänkt personuppgiftsincident och ge beslutsunderlag: ska incidenten anmälas till IMY, ska de registrerade informeras, och vilka åtgärder behöver vidtas omedelbart.

# Kontext
Organisation: [namn, bransch, storlek]
Vad hände: [beskriv händelsen, när upptäcktes, hur]
Typ av personuppgifter: [namn, mejl, personnummer, lönedata, hälsoinformation, etc.]
Antal berörda: [uppskattning]
Känsliga uppgifter enligt artikel 9: [ja/nej/osäkert]
Hur skedde exponeringen: [intern läcka, extern hack, fysisk förlust, felsändning, felkonfiguration]
Är läckan stoppad: [ja/nej/delvis]
Hur länge var exponeringen öppen: [tid]
Nuvarande åtgärder: [lista]

# Regler
- Följ GDPR artikel 33 (anmälan till tillsynsmyndighet) och artikel 34 (information till registrerade)
- 72-timmarsfönstret räknas från när någon i organisationen blev medveten om incidenten, inte från själva händelsen
- Bedöm sannolikhet för risk/hög risk för de registrerades rättigheter och friheter
- Anmälan behövs inte om det är osannolikt att incidenten medför en risk för de registrerades rättigheter och friheter (artikel 33.1). Vid osäkerhet: motivera bedömningen och dokumentera den
- Hänvisa till IMY:s vägledning där relevant
- Svenska utan tankstreck i brödtext
- Markera punkter där juridisk rådgivning krävs

# Utdataformat
1. **Sammanfattning av händelsen**: 3–4 meningar neutralt
2. **Riskklassificering**: låg / risk / hög risk med motivering
3. **Beslut: anmäla till IMY**: ja/nej/osäkert med motivering, hänvisning till relevant artikel
4. **Beslut: informera registrerade**: ja/nej/osäkert med motivering
5. **Omedelbara åtgärder (24h)**: numrerad lista med ansvarig roll
6. **Uppföljning (72h och därefter)**: vad ska dokumenteras, vilka frågor ska besvaras
7. **Juridiska frågor som kräver rådgivning**: 2–4 punkter där dataskyddsombud eller advokat bör konsulteras
```

## Användning

Kör omedelbart vid misstanke om personuppgiftsincident. Fyll i så mycket fakta du har, osäkerhet är OK och ska flaggas. Prompten ersätter inte dataskyddsombud eller juridisk rådgivning, men ger strukturerat underlag att utgå från.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (felsänd fil med 340 hyresgästers uppgifter). Motiverade anmälan med artikel 33.1, räknade ut 72-timmarsfristen, tog med dokumentationen enligt artikel 33.5 och bedömde informationen till de registrerade enligt artikel 34 för sig.
