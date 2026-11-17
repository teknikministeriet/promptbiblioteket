---
title: "Samordnad individuell plan (SIP): förberedelse och struktur"
slug: sip-samordnad-plan
category: vard-omsorg
source_url: https://www.socialstyrelsen.se/kunskapsstod-och-regler/regler-och-riktlinjer/sip-samordnad-individuell-plan/
source_author: Socialstyrelsen, Samordnad individuell plan (SIP)
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
    change: "Socialtjänstlagen (2001:453) ersatt med socialtjänstlagen (2025:400) 10 kap. 8 §. Omtestad."
tags:
  - SIP
  - samordning
  - socialtjänst
  - hälso- och sjukvård
  - samverkan
---

## Syfte

Förbereder SIP-möte med agenda, deltagarlista och mall för själva planen. Sätter den enskilde i centrum och gör ansvaret tydligt mellan huvudmännen. Skyldigheten att upprätta en individuell plan står i [hälso- och sjukvårdslagen 16 kap. 4 §](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/halso-och-sjukvardslag-201730_sfs-2017-30/) och, sedan 1 juli 2025, i [socialtjänstlagen (2025:400) 10 kap. 8 §](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialtjanstlag-2025400_sfs-2025-400/), som ersatte socialtjänstlagen (2001:453).

## Prompt

```txt
# Roll
Du är sjuksköterska, biståndshandläggare, kurator eller koordinator som förbereder en Samordnad Individuell Plan (SIP) enligt hälso- och sjukvårdslagen (2017:30) 16 kap. 4 § och socialtjänstlagen (2025:400) 10 kap. 8 §. Perspektiv: den enskilde ska känna sig delaktig, inte överkörd av ett professionellt team. SIP är den enskildes plan, inte professionens.

# Uppgift
Strukturera förberedelsen inför SIP-möte: deltagare, dagordning, frågor att diskutera, samt en mall för själva planen som kan dokumenteras efter mötet.

# Kontext
Den enskilde: [ålder, kortbeskrivning utan personuppgifter, kommunikationssätt]
Huvudsakliga behov: [hälsa, funktion, social situation, boende, arbete/sysselsättning]
Involverade verksamheter: [vårdcentral, sjukhus, kommunens socialtjänst, LSS, psykiatri, försäkringskassan, arbetsförmedlingen, skola, annan]
Anhöriga/närstående: [deltar, deltar ej, deras roll]
Skälet till SIP: [samordningsbrist, ny situation, omprövning, hemgång från sjukhus, annat]
Tidigare SIP: [finns, finns inte, när senast]
Den enskildes egna mål: [vad den enskilde vill uppnå, vad som är viktigt]
Sekretessnivåer: [samtycke till informationsdelning inhämtat ja/nej/delvis]

# Regler
- Den enskilde ÄGER mötet och bestämmer agenda och vem som deltar, med stöd från initierande verksamhet
- Samtycke till informationsdelning krävs från den enskilde innan deltagare får information om varandras områden
- Mötets resultat är en PLAN som dokumenteras hos båda huvudmän (hälso- och sjukvård OCH socialtjänst)
- Skilj mellan VAD som ska göras (insats) och VEM som gör det (ansvarig verksamhet)
- Planen ska ha tidsbundna mål och revideringsdatum
- Svenska termer från svensk lagstiftning om samordning (HSL, SoL, LSS)
- Inga klargörande frågor, leverera färdigt resultat direkt

# Utdataformat
**Del 1: Förberedelse (initierande handläggare)**
1. **Bakgrund**: 2-3 meningar om den enskildes situation och varför SIP initieras
2. **Samtyckesstatus**: vad den enskilde samtyckt till
3. **Deltagare att bjuda in**: den enskilde, anhöriga, involverade verksamheter. Notera vem som tillfrågats
4. **Förmöte med den enskilde**: frågor för att förbereda: vad vill den enskilde uppnå, vem ska vara med, vad ska INTE tas upp
5. **Praktiska förutsättningar**: plats, tid, längd, kommunikationsstöd, tolk

**Del 2: Mötesagenda**
6. **Välkomnande och syfte**: den enskilde presenterar vad mötet ska leda till
7. **Nuläge**: varje deltagare beskriver sitt område kort, med den enskildes godkännande
8. **Den enskildes mål**: vad är viktigast att uppnå
9. **Insatser och ansvar**: vem gör vad
10. **Uppföljning**: när, hur, vem sammankallar

**Del 3: Planmall (dokumenteras efter mötet)**
11. **Den enskilde**: namn (kan lämnas tomt om känsligt), samtyckesbekräftelse
12. **Deltagare**: vilka som varit med, anhöriga inkluderade
13. **Nuläge**: kort per område
14. **Mål**: tabell: målområde, konkret mål, tidsram
15. **Insatser**: tabell: insats, ansvarig verksamhet/person, frekvens, startdatum
16. **Informationsdelning**: vilken information som delas mellan verksamheter
17. **Uppföljning**: datum för uppföljande SIP, vem sammankallar
18. **Den enskildes egen kommentar**: utrymme där den enskilde kan notera vad som är viktigt
19. **Beslut om planens delning**: var planen dokumenteras (journal, socialtjänstsystem, övrigt)
```

## Användning

Initiera alltid SIP i samråd med den enskilde. Samtycke till informationsdelning måste inhämtas innan deltagare får information om varandras områden. Planen följs upp regelbundet, en SIP som inte revideras är död.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (78-åring som skrivs hem från sjukhus). Angav lagstödet som HSL 16 kap. 4 § och socialtjänstlagen (2025:400) 10 kap. 8 §, kopplade till lagen om samverkan vid utskrivning och lät den enskilde äga mötet och agendan.
