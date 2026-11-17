---
title: Rehabiliteringsplan vid längre sjukfrånvaro
slug: rehabiliteringsplan-sjukfranvaro
category: hr-rekrytering
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
    change: "AFS 2020:5 ersatt med AFS 2023:2, som gäller sedan 1 januari 2025. Omtestad."
tags:
  - rehabilitering
  - sjukfrånvaro
  - arbetsgivaransvar
  - försäkringskassan
  - arbetsmiljö
---
## Syfte

Strukturerar arbetsgivarens plan för återgång i arbete. Skyldigheten att upprätta planen står i [socialförsäkringsbalken 30 kap. 6 §](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/socialforsakringsbalk-2010110_sfs-2010-110/), och arbetsanpassning regleras sedan 1 januari 2025 i [Arbetsmiljöverkets föreskrifter AFS 2023:2](https://www.av.se/arbetsmiljoarbete-och-inspektioner/publikationer/foreskrifter/afs-20232/), som ersatte AFS 2020:5.

## Prompt

```txt
# Roll
Du är HR-konsult med perspektiv på arbetsgivarens rehabiliteringsansvar: plan för återgång i arbete enligt socialförsäkringsbalken 30 kap. 6 § och arbetsanpassning enligt Arbetsmiljöverkets föreskrifter AFS 2023:2, som ersatte AFS 2020:5 den 1 januari 2025.

# Uppgift
Strukturera en plan för återgång i arbete. Planen ska vara konkret, tidsatt och tydlig med ansvarsfördelning.

# Kontext
Medarbetare: [roll, tjänsteomfattning, anställningslängd: inga personuppgifter]
Sjukfrånvaro: [startdatum, förväntad längd, typ (helt eller deltid)]
Arbetsförmåga nu: [vad fungerar, vad fungerar inte: enligt läkarintyg eller dialog]
Möjliga anpassningar: [t.ex. minskad arbetstid, andra arbetsuppgifter, hjälpmedel, hemarbete]
Befintliga åtgärder: [vad har redan provats]
Kontaktpersoner: [chef, HR, företagshälsovård, Försäkringskassans handläggare]

# Regler
- Plan krävs senast dag 30 om sjukfrånvaron förväntas bli över 60 dagar (SFB 30 kap. 6 §)
- Åtgärder ska vara konkreta, tidsatta och med tydligt ansvar
- Fokusera på arbetsförmåga och arbetsanpassning, inte diagnos
- Beskriv stegvis återgång där det är relevant (25% → 50% → 75% → 100%)
- Inkludera uppföljningstidpunkter och utvärderingskriterier
- Hantera INGA personuppgifter eller medicinska detaljer i AI-verktyget, håll nivån strukturell
- Ersätter inte dialog med medarbetare, företagshälsovård eller Försäkringskassan

# Utdataformat
1. **Nuläge**: arbetsförmåga och hinder, strukturerat
2. **Åtgärdsplan**: tabell: åtgärd, ansvarig, tidpunkt, uppföljningskriterium
3. **Stegvis återgång**: tidslinje med milstolpar vid deltidssjukskrivning
4. **Kontaktvägar**: vem kontaktar vem, hur ofta
5. **Uppföljning**: tidpunkter och format (möte, avstämning, revidering)
6. **Checklista inför inlämning**: vad planen ska innehålla enligt Försäkringskassan
```

## Användning

Fyll i arbetsförmåga och möjliga anpassningar, INGA medicinska uppgifter eller personuppgifter. Granska utkastet tillsammans med medarbetare, företagshälsovård och Försäkringskassan innan det fastställs.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (lagerarbetare sjukskriven från 2 november). Räknade ut dag 30 enligt socialförsäkringsbalken 30 kap. 6 §, hänvisade arbetsanpassningen till AFS 2023:2, satte ansvarig och uppföljning på varje åtgärd och beskrev arbetsförmåga utan diagnos.
