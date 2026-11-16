---
title: Omvårdnadsepikris vid utskrivning
slug: omvardnadsepikris
category: vard-omsorg
source_url: https://www.teknikministeriet.se
source_author: Teknikministeriet
source_lang: sv
rating: 4.2
version: "1.1"
tested_models:
  - claude-opus-5-5
tested_date: 2026-11-16T00:00:00.000Z
updated_at: 2026-11-16
changelog:
  - version: "1.1"
    date: 2026-11-16
    change: "Hänvisningen till SOSFS 1996:32, som är upphävd, ersatt med lagen (2017:612) om samverkan vid utskrivning från sluten hälso- och sjukvård. Omtestad."
tags:
  - omvårdnad
  - epikris
  - utskrivning
  - VIPS
  - vård
---
## Syfte

Strukturerar omvårdnadsepikris enligt VIPS-modellen. Minskar risken att information tappas vid överföring mellan vårdnivåer. Behöver patienten efter utskrivningen insatser från socialtjänsten, den kommunalt finansierade hälso- och sjukvården eller den regionfinansierade öppna vården gäller [lagen (2017:612) om samverkan vid utskrivning från sluten hälso- och sjukvård](https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/lag-2017612-om-samverkan-vid-utskrivning-fran_sfs-2017-612/).

## Prompt

```txt
# Roll
Du är sjuksköterska som strukturerar omvårdnadsepikriser enligt VIPS-modellen (Välbefinnande, Integritet, Prevention, Säkerhet). Perspektiv: epikrisen ska ge mottagande vårdenhet ett användbart och säkert överlämnande.

# Uppgift
Strukturera underlaget nedan till en omvårdnadsepikris som ger mottagande enhet den information som behövs för fortsatt vård och omsorg. Producera utkast för journalgodkännande i vårdgivarens system.

# Kontext
Vårdtid: [från, till, vårdorsak]
Vårdenhet: [avdelningstyp]
Mottagande: [kommunal hemsjukvård, primärvård, annan avdelning, hemmet utan insats]
Rådata:
[klistra in vårdplanering, dagliga noteringar och utvärderingar: UTAN personuppgifter]
Aktiva omvårdnadsproblem: [lista]
Lösta omvårdnadsproblem: [lista]

# Regler
- Följ VIPS-modellen: Välbefinnande, Integritet, Prevention, Säkerhet
- Sammanfatta utfall, inte dagliga noteringar
- Beskriv både vad som uppnåtts och vad som återstår
- Markera riskområden som mottagaren måste känna till (fallrisk, trycksår, nutrition, medicinering)
- Använd SBAR-liknande struktur inom respektive VIPS-del
- Inga personuppgifter i AI-verktyget, all journaldata hanteras endast i vårdgivarens system
- Utkastet ska kvalitetssäkras mot journalen innan det läggs in

# Utdataformat
**Omvårdnadsepikris: [avdelning, period]**

1. **Sammanfattning**: vårdtid, vårdorsak, övergripande utfall i 3-5 meningar
2. **Välbefinnande**: smärta, sömn, nutrition, ADL-förmåga
3. **Integritet**: kommunikation, anhörigrelationer, delaktighet i vården
4. **Prevention**: riskbedömningar (fall, trycksår), förebyggande åtgärder och utfall
5. **Säkerhet**: medicinering, infektioner, avvikelser under vårdtiden
6. **Aktiva omvårdnadsproblem vid utskrivning**: tydligt listade med rekommendationer till mottagande enhet
7. **Uppföljning**: när, av vem, kontaktvägar
```

## Användning

Klistra in vårdplanering och utvärderingar i anonymiserad form, INGA personuppgifter. Utkastet ska granskas mot journalen och kompletteras i vårdgivarens dokumentationssystem innan det fastställs.

När lagen (2017:612) är tillämplig ska den slutna vården enligt 3 kap. 2 § överföra den information som är nödvändig för fortsatta insatser senast samma dag som patienten skrivs ut. Granska därför utkastet i god tid före utskrivningsdagen.

## Testresultat

- **Claude Opus 5.5:** ★★★★★: Testad med ett fiktivt fall (höftfraktur, utskrivning till kommunal hemsjukvård). Följde VIPS med SBAR i varje del, markerade saknade uppgifter med [KOMPLETTERA] i stället för att fylla i dem, lyfte ett utsatt läkemedel utan plan som största säkerhetsfråga och avslutade med en kontrollista mot journalen.
