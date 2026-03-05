---
sidebar_position: 2
---

# Vizualizace dat

K dispozici jsou dva způsoby jak prohlížet nahraná data:

- `Základní pohled` - pro jednotlivce na mobilních zařízeních
- `MRB` - prezentační systém, který v průběhu závodu přechází ze startovky na výsledky. Určený k zobrazení na monitorech/televizích v centru závodu.

## 1. Základní pohled

Data můžeš prohlížet v detailu `závodu`. K dispozici jsou na jednotlivých záložkách výsledky i mezičasy.
![Basic tool](/img/tutorials/client/visualize-data-ofeed.png)

:::tip
Základní pohled nabízí automatického `spíkra` (ikona reproduktoru), který komentuje, pokud si vyčte nově vedoucí závodník či závodnice.
:::

:::tip
Počet získaných bodů do rankingu se počítá průběžně.
:::

## 2. MRB

Mnoh závody ověřená webová aplikace `MyResultBoard` (MRB) určená k zobrazování startovek a výsledků v jednom nastavení. Hlavičky názvů kategorií jsou obarveny:

- <span class="mrb-blue">Muži</span>
- <span class="mrb-pink">Ženy</span>
- <span class="mrb-grey">Ostatní</span> (např. `T`, `Z2`)

Pokud zapneš zobrazení Emoji v tabulce (výchozí nastavení), tak se může ukazovat:

- 🙈 - diskvalifikován
- 🏃 - běží
- 🥺 - nevystartoval
- 🏴 - diskvalifikace pořadatelem
- 🦄 - běží mimo soutěž
- 🛏️ - ještě nevystartoval
- 🥇🥈🥉 - medaile pro první tři místa

![Visualize Data](/img/tutorials/mrb/visualize-data-mrb.png)

### Jak funguje

Jakmile nahraješ startovku nebo výsledky, tak se automaticky založí i závod v MRB. Stačí jít na adresu https://api.orienteerfeed.com/mrb/ a vybrat tvůj závod.

MRB stačí spustit ráno a zapnout pravidelné nahrávání startovek a výsledků. Startovky se v průběhu závodu změní ve výsledky. Není potřeba nastavovat nic dalšího.

Doporučenými prohlížeči pro správné zobrazení jsou Google Chrome a Firefox. U ostatních může být problém, například se zobrazením Emoji (jde v nastavení vypnout).

### Nastavení

Pomocí tlačítka `Settings` v pravém horním rohu jde otevřít okno s detailním nastavením zobrazení. Lze vybrat jaké kategorie se mají ukazovat, v kolika sloupcích mají být (záleží na využitém hardwaru), pořadí kategorií, způsob posouvání či zobrazovaný obsah. Nejlepší vše vyzkoušet a vybrat vyhovující nastavení.
![MRB setup](/img/tutorials/mrb/visualize-data-mrb-settings.png)

#### Offline režim

`OFeed` je možné spustit i lokálně, což umožní využívat pouze `MRB`. `O Checklist` nepůjde na lokální instanci napojit pokud nebude dostupná v internetu.

### Podporované typy závodu

Aplikace podporuje:

- **individuální závody** - intervalový i hromadný start
- **štafety** - sprintové (4 úseky) i klasické (3 úseky)
  ![Visualize data sprint relay](/img/tutorials/mrb/visualize-data-mrb-sprint-relay.png)

### Ukázky

- Televizní obrazovky

![Showcase CHC](/img/tutorials/mrb/mrb_showcase_chc.jpeg)
![Showcase KAM](/img/tutorials/mrb/mrb_showcase_kam.jpg)

- Počítačové monitory ve svislé orientaci

![Showcase SHK women](/img/tutorials/mrb/mrb_showcase_shk_women.jpg)
![Showcase SHK men](/img/tutorials/mrb/mrb_showcase_shk_men.jpg)

### Známé problémy

- Problém s načtením dat kategorie [issue](https://github.com/orienteerfeed/ofeed/issues/67)
  - chybějící registtračka nebo číslo čipu - vyplň nějaké hodnoty, např. 1 pro čísla čipů a unikátní honotu pro registračku
  - prýzdné kategorie (bez běžců) - v nastavení odškrtni kategorie pro zobrazování
  - poslední možností je v [Nebezpečné zóně](/tutorials/create-a-new-event#nebezpečná-zóna) smazat závodníky a znovu je nahrát
