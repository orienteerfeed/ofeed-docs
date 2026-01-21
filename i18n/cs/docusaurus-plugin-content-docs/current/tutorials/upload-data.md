---
sidebar_position: 3
---

# Nahrání dat

Je možné nahrát jak manuálně výběrem souboru, tak automaticky přes API. Ruční způsob je vhodný pro prvotní nahrání a automatický způsob pak v průběhu závodu.

## Manuální

V `Nastavení` závodu (musíš být přihlášený) můžeš přetažením nebo výběrem nahrát xml se startovkou či výsledky.
![Drag and drop](/img/tutorials/client/upload-data-manual-dd.png)

## Služba v QuickEventu

### Nastavení služby

`QuickEvent` od verze 3 má přímo službu, která se o veškeré nahrávání postará. Stačí nastavit a spustit. Po spuštění se nahraje statovka a v nastavených intervalech se posílají celé výsledky. Dále se zpracovávájí změny při editaci závodníka a po vyčtení (je odchycena změna v databázi a vyvolána odpovídající akce).

![QE service](/img/tutorials/quickevent/upload-data-qe-service.png)

Je potřeba vyplnit:

- **Url** - `https://api.orinteerfeed.com`
- **Id akce** - napsané v `Nastavení` závodu, hodnota ala `cmanygkd60001qq3e5y5hqndm`
- **Heslo** - napsané v `Nastavení` závodu, je potřeba vygenerovat po vytvoření nového závodu

### Zpracování změn

Změny ze startu jsou pravidelně kontrolovány a zpracovávány přímo do databáze. Veškeré provedené operace se v databázi ukládají ještě do samostatné tabulky jako záloha.

### Příznaky závodníků

Používej sloupec `Příznaky závodníka` pro nastavení `DNS` místo zaškrtávátka `Startuje`, které závodníka úplně odstraní ze závodu/etapy a následného xml exportu.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

### Návod na QuickEvent

Jak základně používat QuickEvent je ukázáno ve videích [zde](https://www.youtube.com/playlist?list=PLVgDCJ29lrhDWTnzczCUOCi16sydyuD9C).

## SI-Droid Event / O-Pal

Mobilní appka `SI-Droid OFeed Connector` zveřejněná jako open-source [projekt](https://github.com/orienteerfeed/ofeed-sidroid-connector) pomůže nahrát data i z mobilního telefonu využitím `Výsledkové služby` v [SI-Droid Event](https://play.google.com/store/apps/details?id=se.joja.sidroid.event.full&hl=cs&pli=1) nebo [O-Pal](https://play.google.com/store/apps/details?id=se.joja.opal.event&hl=cs). Usnadní tak zpracování dat kompletně na mobilním zařízení.

## Volání API

Odesláním HTTP POST požadavku na endpoint `/rest/v1/upload/iof`. Pro více detailů je k dispozici [swagger](https://api.orienteerfeed.com/api-docs/#/default/post_rest_v1_upload_iof).
