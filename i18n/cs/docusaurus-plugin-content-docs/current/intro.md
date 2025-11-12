---
id: intro
sidebar_position: 1
title: "Představení"
---
# OFeed
## O nás
Moderní platforma podporující IOF XML pro správu všech dat o závodě na jednom místě. Vyvíjena jako open-source a hostována na adrese [orienteerfeed.com](https://orienteerfeed.com).

Data, se kterými platforma pracuje:
- Startovky
- Výsledky
- Změny ze startu zaznamenané v mobilní aplikaci [O-Checklist](https://stigning.se/checklist/help_en.html)
- Dohlášky

Součástí platformy je i vizualizační aplikace [MRB](/docs/tutorials/visualize-data.md#2-mrb) pro snadnou a moderní vizualizaci startovek/výsledků. Víc informací po kliknutí na odkaz.

### Hlavní využití
- aktuální data v aplikaci OChecklist, takže i změny čipů před závodema dohlášky jsou na startu dřív než samotný závodník vstoupí do prvního koridoru
- změny čísel čipů se ze satrtu snadno dostanou zpět do pořádacího sw a tak se nenastane, že by byl na trati závodník s neznámým čipem, o kterém bychom nevěděli z radiokontrol
- závodníky do nedorazí na start je možné okamžitě označit za DNS. Případný pozdní start změnu zruší.

### Omezení
Synchronizace dat v reálném čase vyžaduje dostupné mobilní připojení k internetu jak v cetru závodu tak na startu.

## Komunita
Spustili jsme vlastní Discord server ([pozvánka](https://discord.gg/QMvnurgKzU)), který usnadňuje propojení lidí okolo platformy a dostupnější podporu v případě potřeby. Připoj se k nám a pomož nám udělat z OFeedu oblíbenou platformu co usnadní práci při pořádání.

## Integrace
Nahraná data jsou snadno přístupná dalším aplikacím pomocí připraveného aplikačního rozhraní (API).

### OChecklist
OFeed je v aplikaci plně podporovaný a je možné ho využít jako [zdroj dat](/docs/tutorials/ochecklist.md). Stačí načíst data na začátku a vzniklé změny na prezentaci jsou autoamticky načteny a zobrazeny. A zároveň změny ze startu jsou v reálném čase nahrávány na OFeed, kde jsou okamžitě dostupné k dalšímu zpracování.

### SI-Droid Event
Mobilní appka `SI-Droid OFeed Connector` zveřejněná jako open-source [projekt](https://github.com/orienteerfeed/ofeed-sidroid-connector) pomůže nahrát data i z mobilního telefonu využitím `Výsledkové služby` v `SI-Droid Event`. Usnadní tak zpracování dat kompletně na mobilním zařízení.

### API
K dispozici je [RESTful](https://api.orienteerfeed.com/api-docs/) and [GraphQL](https://api.orienteerfeed.com/graphql) API, které je jednodušeji uchopitelné v porovnání s IOF XML s mnoha rozdílnými implementacemi. Slouží k znadné integraci OFeedu a dalších aplikací.

## Progresive web application (PWA)
Slouží pro rychlejší přístup a příjemnější prohlížení dat. První návštěva webu sama vyvolá nabídku k instalaci aplikace, která následně umožní přímé spuštění z domovské obrazovky vašeho zařízení.

![Pop up install](/img/ofeed_pwa_install.jpg)
![Pop up install](/img/ofeed_pwa_install_confirm.jpg)