---
id: connections
sidebar_position: 3
title: "Propojení"
---

# Propojení

Seznam propojení s dalšími aplikacemi.

## OChecklist

OFeed je v aplikaci plně podporovaný a je možné ho využít jako [zdroj dat](/tutorials/ochecklist). Stačí načíst data na začátku a vzniklé změny na prezentaci jsou automaticky načteny a zobrazeny. A zároveň změny ze startu jsou v reálném čase nahrávány na OFeed, kde jsou okamžitě dostupné k dalšímu zpracování.

## QuickEvent

Speciální `Služba`, která se postará o veškerou potřebnou výměnu dat. Detaily najdeš v [popisu služby](/tutorials/upload-data#quickevent-service).

## MeOS

Podpora pomocí MOP (MeOS Online Protocol) je v procesu, více informací najdeš v [issue](https://github.com/orienteerfeed/ofeed/issues/97).

## SI-Droid Event / O-Pal

`Výsledková služba` v obou aplikacích lze pomocí naší mobilní aplikace `SI-Droid OFeed Connector` napojit na `OFeed`. Podívej se na [návod](/tutorials/upload-data#si-droid-event--o-pal) jak na to.

## Vlastní

Můžeš si snadno připojit vlastní aplikaci. `OFeed` má k dispozici [RESTful](https://api.orienteerfeed.com/api-docs/) a [GraphQL](https://api.orienteerfeed.com/graphql) API, které je jednodušeji uchopitelné v porovnání s IOF XML s mnoha rozdílnými implementacemi. Podrobnější informace najdeš [zde](/category/api).
