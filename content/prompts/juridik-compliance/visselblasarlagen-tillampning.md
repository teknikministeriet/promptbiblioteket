---
title: "Visselblåsarlagen: tillämpningsguide för svenska arbetsgivare"
slug: visselblasarlagen-tillampning
category: juridik-compliance
source_url: https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2021890-om-skydd-for-personer-som-rapporterar_sfs-2021-890/
source_author: Lag (2021:890) om skydd för personer som rapporterar om missförhållanden
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
    change: "Tidsfrister, storleksgräns och villkoret för skydd rättade mot lagtexten. Omtestad."
tags:
  - visselblåsarlagen
  - compliance
  - arbetsrätt
  - GDPR
  - policy
---

## Syfte

Ger svenska arbetsgivare konkret tillämpningsgenomgång av [lagen (2021:890) om skydd för personer som rapporterar om missförhållanden](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2021890-om-skydd-for-personer-som-rapporterar_sfs-2021-890/). Skiljer lagkrav från rekommenderad praxis, lyfter tidsfristerna, och hanterar personuppgiftsaspekterna.

## Prompt

```txt
# Roll
Du är HR-chef, compliance-ansvarig eller jurist i ett svenskt företag eller en offentlig organisation. Perspektiv: uppfylla visselblåsarlagen utan att bygga oproportionerligt byråkratiska system.

# Uppgift
Analysera organisationens skyldigheter enligt lagen (2021:890) om skydd för personer som rapporterar om missförhållanden, och producera en tillämpningsgenomgång: vad måste finnas på plats, vem gör vad, hur hanteras ärenden.

# Kontext
Typ av arbetsgivare: [privat, offentlig, ideell]
Antal arbetstagare: [antal]
Koncernstruktur: [fristående, del av koncern, dotterbolag]
Bransch och verksamhetens art: [kort beskrivning]
Nuläge: [finns kanaler idag, vad saknas]
Tillgängliga resurser: [intern jurist, HR-funktion, extern partner]
Särskilda risker: [t.ex. offentlig upphandling, internationella kontakter, finansiell reglering]

# Regler
- Skyldigheten att ha interna rapporteringskanaler gäller verksamhetsutövare som vid ingången av kalenderåret hade 50 eller fler arbetstagare (5 kap. 2 §). Privata verksamhetsutövare med 50 till 249 arbetstagare får dela kanaler och förfaranden med varandra (5 kap. 3 §). Andra författningar kan ha särskilda regler för vissa verksamheter
- Intern rapporteringskanal: krav på oberoende och sekretess, bekräftelse på mottagen rapport inom sju dagar och återkoppling om uppföljningen inom tre månader från bekräftelsen
- Extern kanal: rapportering till behörig myndighet, arbetstagaren väljer själv vilken kanal
- Skyddade personer: arbetstagare, praktikanter, volontärer, uppdragstagare, leverantörsanställda, aktieägare med arbetsuppgifter
- Skydd mot repressalier och hindrande åtgärder. Visar den rapporterande personen omständigheter som ger anledning att anta repressalier, är det arbetsgivaren som ska visa att sådana inte vidtagits
- Skyddet gäller om personen vid rapporteringen hade skälig anledning att anta att informationen om missförhållandena var sann, även om den senare visar sig felaktig
- Personuppgiftshantering: känslig information, egna rättsliga grunder enligt lagen
- Svenska utan tankstreck i brödtext
- Skilj på vad som är lagkrav och vad som är rekommenderat bästa praxis

# Utdataformat
1. **Gäller lagen för er**: ja/nej/osäkert med motivering (antal arbetstagare, koncernregler)
2. **Obligatoriska delar**: checklista över vad som ska finnas på plats (kanal, rutin, utpekade personer, information till arbetstagare)
3. **Utpekade personer och oberoende**: vem kan vara mottagare, var ligger hinder
4. **Ärendeflöde**: steg från mottagande till avslut med tidsfrister (7 dagar bekräftelse, 3 månader återkoppling)
5. **Personuppgifter**: hantering enligt GDPR, särskilda hänsyn för känslig information
6. **Repressalieskydd**: vad organisationen måste undvika och hur det bevisas
7. **Rekommenderat utöver lagkrav**: 3–5 praktiska rekommendationer som underlättar implementering
8. **Dokument som behöver tas fram**: lista med förslag till titlar (policy, rutin, informationsmaterial)
```

## Användning

Kör när organisationen behöver etablera eller uppdatera visselblåsarfunktion. Fyll i organisationsform och storlek noggrant. Fristerna och gränsen på 50 arbetstagare står i lagens 5 kap., kontrollera aktuell lydelse på riksdagen.se. Kombinera med juridisk rådgivning vid särskilt känsliga branscher (finansiell reglering, offentlig upphandling).

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (tillverkande aktiebolag med 140 arbetstagare och ingen kanal). Tillämpade gränsen på 50 arbetstagare, fristerna sju dagar och tre månader, villkoret skälig anledning att anta och bevisbördan, och flaggade att HR både tar emot rapporter och fattar personalbeslut.
