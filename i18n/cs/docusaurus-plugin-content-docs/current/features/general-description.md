---
sidebar_position: 1
---

# Detaily o platformě

Podrobnější popis celé platformy pro jasnější pochopení v čem usnadňuje práci při pořádání a zlepšuje komfort pro účastníky.

## Datové vstupy

Přehled dat, se kterými platforma pracuje:

- Startovky
- Výsledky
- Změny ze startu zaznamenané v mobilní aplikaci [O Checklist](https://play.google.com/store/apps/details?id=se.tg3.startlist)
- Změny z prezentace (dohlášky, změny čísel čipů, kategorií, startovních časů, ...)

## Nastavení akce

Podrobný popis jednotlivých sekcí v nastavení akce.

### Parametry závodu

- `Štafety` - vyber pokud pořádáš týmový závod (2 a více úseků)
- `Setinová přesnost`
- `Ranking` - vyber pro výpočet rankinkových bodů v průběhu závodu
- `Zveřejněno` - ovlivňuje zobrazení závodu v seznamu akcí na domovské stránce

### Heslo závodu

- `Generovat heslo` - heslo je nezbytné pro napojení dalších aplikací. Po vygenerování se zobrazí QR kód pro `O Checklist` propojení
- `Přegenerovat heslo` - lze použít v případě uniknutí hesla
- `Zneplatnit` - zruší aktuální heslo
- `Expirace hesla` - vygenerované heslo je platné 7 dní

### Integrace

- `O Checklist` - zobrazený QR kód lze jednoduše využít pro napojení `O Checklistu`. Naskenuj kód a potvrď otevření načteného odkazu. Nebo můžeš odkaz přímo otevřít pomocí talčítka s ikonou aplikace.
- `QuickEvent` - přihlašovací údaje pro nastavení služby
- `SI-Droid Connector` - zobrazený QR kód lze jednoduše využít pro napojení `SI-Droid Connector`. Naskenuj kód a potvrď otevření načteného odkazu. Nebo můžeš odkaz přímo otevřít pomocí talčítka s ikonou aplikace.

### Viditelnost

Akce se nemusí zobrazovat v seznamu v [OFeed](https://orienteerfeed.com/)u ani v [MRB](https://api.orienteerfeed.com/mrb/). Ideální volba pro **testování** nebo **soukromé** akce. Je zachována **plná** funkčnost, ačkoliv akce není v seznamech vidět.

### Odkaz na akci

Lze využít pro propagaci závodu, např. na webovkách. Tlačítko `Sdílet` usnadňuje sdílení QR kódu se startéry, např. přes chatovací aplikace. Tlačítko `Tisk` generuje dokument, který lze vytisknout a předat startérům.

### Nebezpečná zóna

- `Smazat závodníky` - smaže pouze všechny závodníky - slouží pokud se objeví duplicity, kategorie zůstávají
- `Smazat všechna data závodu` - smaže závodníky, kategorie, štafety i heslo
- `Delete event` - odstraní kompletně celou akci

## Omezení využití

Synchronizace dat v reálném čase vyžaduje **dostupné mobilní připojení** k internetu jak v centru závodu, tak na startu.

## Progresive web application (PWA)

Slouží pro rychlejší přístup a příjemnější prohlížení dat. První návštěva webu sama vyvolá nabídku k instalaci aplikace, která následně umožní přímé spuštění z domovské obrazovky tvého zařízení.

![Pop up install](/img/tutorials/pwa/ofeed_pwa_install.jpg)
![Pop up install confirm](/img/tutorials/pwa/ofeed_pwa_install_confirm.jpg)

## Zmínky o platformě

Přehled zmínek o `OFeedu`:

- Metodický seminář trenérů a rozhodčích [nahrávka](https://metodika.ceskyorientak.cz/materialy/444-metodicky-seminar-rozhodcich-2025-o-checklist-po-roce)

- Workshop: Technické zajištění závodů (QuickEvent), [Oris](https://oris.ceskyorientak.cz/Zavod?id=9803), [Metodický portál](https://metodika.ceskyorientak.cz/materialy/458-technicke-zajisteni-zavodu)
