---
sidebar_position: 2
---

# QuickEvent

<img src="/img/logos/quickevent.png" alt="QuickEvent logo" width="150" />

`QuickEvent` od verze 3 má přímo službu, která se o veškeré nahrávání postará. Stačí nastavit a spustit. Po spuštění se nahraje statovka a v nastavených intervalech se odesílají kompletní výsledky. Dále se automaticky zpracovávájí změny při editaci závodníka a po vyčtení (je odchycena změna v databázi a vyvolána odpovídající akce).

## Nastavení služby

![QE service](/img/tutorials/quickevent/upload-data-qe-service.png)

- Zobraz si `Služby`
- Otevři nastavení služby přes ikonu ozubeného kolečka
- Vyplň přihlašovací údaje:
  - **Url** - `https://api.orinteerfeed.com`
  - **Id akce** - napsané v `Nastavení` závodu, hodnota ala `cmanygkd60001qq3e5y5hqndm`
  - **Heslo** - napsané v `Nastavení` závodu, je potřeba vygenerovat po vytvoření nového závodu
- Kliknutím na <span class="red-qe-service-dot">OFF</span> zapni zpracování změn z `O Checklistu`, pokud ho používáš -> změní se na <span class="green-qe-service-dot">ON</span>
- Zapni službu - ikonou `spustit`, <span class="red-qe-service-dot">červená</span> tečka se následně změní na <span class="green-qe-service-dot">zelenou</span>

![QE Service Off](/img/tutorials/client/qe_ofeed_service_off.png)
![QE Service On](/img/tutorials/client/qe_ofeed_service_on.png)

- Manuální nahrání startovky a výsledků jde tlačítky `Exportovat startovku`/`Exportovat výsledky`

## Zpracování změn

Změny ze startu jsou pravidelně kontrolovány a zpracovávány přímo do databáze. Veškeré provedené operace se v databázi ukládají ještě do samostatné tabulky jako záloha.

## Příznaky závodníků

Používej sloupec `Příznaky závodníka` pro nastavení `DNS` místo zaškrtávátka `Startuje`, které závodníka úplně odstraní ze závodu/etapy a následného xml exportu.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

## Jak služba funguje

- Po spuštění nahraje startovku
- Každé `xx` vteřiny nahraje výsledky
- Pracuje se změnami v databázi
  - editace závodnika
  - přidání závodníka
  - smazání závodníka
  - vyčtení závodníka

## Známá omezení

- Přímé změny v tabulce `Úseky/Etapy` **nejsou** aktuálně zpracovány
- Pokud xml export štafet naprochází validací -> odklikni checkbox `Provést IOF XML validaci`

## Návod na QuickEvent

Jak základně používat QuickEvent je ukázáno ve videích [👉](https://www.youtube.com/playlist?list=PLVgDCJ29lrhDWTnzczCUOCi16sydyuD9C).
