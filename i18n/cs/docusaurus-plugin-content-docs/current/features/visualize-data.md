---
sidebar_position: 2
---

# Vizualizace dat

K dispozici jsou dva způsoby jak prohlížet nahraná data:

- `Základní pohled` - pro jednotlivce na mobilních zařízeních
- `OFB` - prezentační systém, který v průběhu závodu přechází ze startovky na výsledky. Určený k zobrazení na monitorech/televizích v centru závodu.

## 1. Základní pohled

Data můžeš prohlížet v detailu `závodu`. K dispozici jsou na jednotlivých záložkách výsledky i mezičasy.
![Basic tool](/img/tutorials/client/visualize-data-ofeed.png)

:::tip
Základní pohled nabízí automatického `spíkra` (ikona reproduktoru), který komentuje, pokud si vyčte nově vedoucí závodník či závodnice.
:::

:::tip
Počet získaných bodů do rankingu se počítá průběžně.
:::

## 2. OFB

Mnoha závody ověřená webová aplikace `OFeed Board` (OFB) určená k zobrazování startovek a výsledků v jednom nastavení. Hlavičky názvů kategorií jsou obarveny:

- <span class="ofb-blue">Muži</span>
- <span class="ofb-pink">Ženy</span>
- <span class="ofb-grey">Ostatní</span> (např. `T`, `Z2`)

Pokud zapneš zobrazení Emoji v tabulce (výchozí nastavení), tak se může ukazovat:

- 🙈 - diskvalifikován
- 🏃 - běží
- 🚷 - nevystartoval
- 🏴 - diskvalifikace pořadatelem
- 🦄 - běží mimo soutěž
- 🛏️ - ještě nevystartoval
- 🥇🥈🥉 - medaile pro první tři místa

![Visualize Data](/img/tutorials/ofb/visualize-data-ofb.png)

### Jak funguje

Jakmile nahraješ startovku nebo výsledky, tak se automaticky založí i závod v `OFB`. Stačí jít na adresu https://board.orienteerfeed.com a vybrat tvůj závod.

`OFB` stačí spustit ráno a zapnout pravidelné nahrávání startovek a výsledků. Startovky se v průběhu závodu změní ve výsledky. Není potřeba nastavovat nic dalšího.

Doporučenými prohlížeči pro správné zobrazení jsou Google Chrome a Firefox. U ostatních může být problém, například se zobrazením Emoji (jde v nastavení vypnout).

### Nastavení

Pomocí tlačítka `Settings` v pravém horním rohu jde otevřít okno s detailním nastavením zobrazení. Lze vybrat jaké kategorie se mají ukazovat, v kolika sloupcích mají být (záleží na využitém hardwaru), pořadí kategorií, způsob posouvání či zobrazovaný obsah. Nejlepší vše vyzkoušet a vybrat vyhovující nastavení.
![OFB setup](/img/tutorials/ofb/visualize-data-ofb-settings.png)

#### Offline režim

`OFeed` je možné spustit i lokálně, což umožní využívat pouze `OFB`. `O Checklist` nepůjde na lokální instanci napojit pokud nebude dostupná v internetu.

### Podporované typy závodu

Aplikace podporuje:

- **individuální závody** - intervalový i hromadný start
- **štafety** - sprintové (4 úseky) i klasické (3 úseky)
  ![Visualize data sprint relay](/img/tutorials/ofb/visualize-data-ofb-sprint-relay.png)

### Ukázky

- Televizní obrazovky

![Showcase CHC](/img/tutorials/ofb/ofb_showcase_chc.jpeg)
![Showcase KAM](/img/tutorials/ofb/ofb_showcase_kam.jpg)

- Počítačové monitory ve svislé orientaci

![Showcase SHK women](/img/tutorials/ofb/ofb_showcase_shk_women.jpg)
![Showcase SHK men](/img/tutorials/ofb/ofb_showcase_shk_men.jpg)

### Liveresultat orienteering

Lze využít i pro závody co využívají pro online výsledky platformu [liveresultat.se](https://liveresultat.orientering.se/).

![Liveresultat](/img/tutorials/ofb/ofb_liveresultat.png)
