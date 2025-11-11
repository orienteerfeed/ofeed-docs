---
sidebar_position: 3
---

# nahrání dat
Je možné nahrát jak manuálně výběrem souboru tak automaticky přes API. Ruční způsob je vhodný pro prvotní nahrání a automatický způsob pak v průběhu závodu.

## Manuální
V `nastavení` závodu (musíš být přihlášený) můžeš přetažením nebo výběrem nahrát xml se startovkou nebo výsledky.
![Drag and drop](/img/tutorials/upload-data-manual-d&d.png)

## Služba v QuickEventu
### Upload setup
QuickEvent ve verzi 3 má přímo službu, která se o veškeré nahrávání postará. Stačí nastavit a spustit.

![QE service](/img/tutorials/upload-data-qe-service.png)

Fill in the fields:
- **Url** - `https://api.orinteerfeed.com`
- **Id akce** - napsané v `Nastavení` závodu, hodnota ala `cmanygkd60001qq3e5y5hqndm` 
- **Heslo** - napsané v  `Nastavení` závodu, je potřeba vygenerovat po vytvoření nového závodu

### Zpracování změn
Změny ze startu jsou pravidelně kontrolovány a zpracovávány přímo do databáze. Veškeré provedené operace se v databázi ukládají ještě do samostatné tabulky jako záloha.

### Příznaky závodníků
Používej sloupec `Příznaky závodníka` pro nastavení `DNS` místo zaškrtávátka `Startuje`, které závodníka úplně odstraní ze závodu/etapy a následného xml exportu.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

## Volání API
Odesláním HTTP POST požadavku na endpoint `/rest/v1/upload/iof`. Pro více detailů je k dispozici [swagger](https://api.orienteerfeed.com/api-docs/#/default/post_rest_v1_upload_iof).