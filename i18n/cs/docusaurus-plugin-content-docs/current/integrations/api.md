---
sidebar_position: 5
title: "OFeed API"
---

`OFeed` nabízí dva typy API - **REST** a **GraphQL**, které umožňují vlastní integraci. Koukni na existující [příklady](#příklady) pro inspiraci.

## REST API

Swagger s detailnějším popisem je dostupný [👉](https://api.orienteerfeed.com/reference).

## Autorizace

Využivá se Basic eventId:eventPassword enkódované jako Base64 řetězec, jak je vidět u `PUT` a `POST` dotazu v authorization hlavičce.

### Nahrání dat

- Endpoint: `https://api.orienteerfeed.com/rest/v1/upload/iof`
- je možné volat pravidelně (například po 5ti minutách) a zpracovává se celé xml, což může něco málo trvat a není to optimální.

### Aktualizace dat

Aktualizace dat je rozdělěná na dvě skupiny:

- #### 1. změna statusu
  - jednoduchý endpoint pouze pro změnu statusu (Běží/Neběží)
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change`

- #### 2. změna údajů závodníka
  - upravuje ostatní údaje o závodníkovi jako např. číslo čipu
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}`

### Získání přehledu změn

Snadno lze získat přehled všech změn, které v průběhu závodu nastaly. Ideální je využít `origin` parametr (např. START) o omezit jen na konkrétní místo původu. Jde o autorizovaný endpoint ačkoliv je to GET požadavek.
URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog?origin=START`

### Příklady volání

#### Nahrání dat

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/upload/iof' \
--header 'Authorization: ••••••' \
--form 'eventId="cmg4t3f0i0007my3m5hh50wl2"' \
--form 'file=@"/D:/ofeed/data/results-iof30.xml"'
```

#### Úprava závodníka

##### Přidání nového závodníka

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
  "classId": 2345,
  "origin": "START",
  "firstname": "Martin",
  "lastname": "Křivda",
  "card": 887640,
  "registration":"CHC9403",
  "organisation": "KOB Choceň",
  "note":"OFeed CEO"
}'
```

##### Detail závodníka

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/4100'
```

##### Detail závodníka pomocí externího id

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/31/external-id'
```

##### Aktualizace dat závodníka

```sh
curl --location --request PUT 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/4071' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "origin":"START",
    "card": 8086810,
    "note": "Another card, again!"
}'
```

##### Aktualizace dat závodníka pomocí externího id

Většinou interní identifikátor pořádacího programu.

```sh
curl --location --request PUT 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/RCZ1051/external-id' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "useExternalId": true,
    "origin": "START",
    "note": "New note",
    "card":887640
}'
```

##### Smazání závodníka

```sh
curl --location --request DELETE 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/28' \
--header 'Authorization: ••••••'
```

##### Smazání závodníka pomocí externího id

```sh
curl --location --request DELETE 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/16/external-id' \
--header 'Authorization: ••••••'
```

##### Smazat hromadně všechny závodníky

##### Změna statusu

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/1/status-change' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "origin": "START",
    "status": "Active"
}'
```

#### Získání změn

```sh
curl --location --globoff 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/changelog?group=true&classId={{classId}}}&origin=START' \
--header 'Authorization: ••••••'
```

#### Akce

##### Detail akce

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2'
```

##### Získat seznam akcí

##### Smazat všechna data závodu (závodníci, kategorie, štafety, mezičasy, ...)

##### Nahrání loga/obrázku

##### Získání loga/obrázku

#### Autorizace

##### Získat JWT pro uživatele

##### Generovat OAuth token

#### Heslo

##### Generovat heslo

##### Získat heslo

##### Zrušit heslo

## GraphQL

Jsou dostupné totožné oprace jako pro REST. Výhodou je možnost specifikovat požadovaná data v odpovědi, což snižuje množství přenesených dat.

Url: [GraphQL](https://api.orienteerfeed.com/graphql)

## Příklady

- `QuickEvent` (C++) - [service](https://github.com/Quick-Box/quickevent/tree/main/quickevent/app/quickevent/plugins/Event/src/services/ofeed)

- `SI-Droid Connector` (Java) - [upload](https://github.com/orienteerfeed/ofeed-sidroid-connector/blob/6ff60f61ab93904d4ece60e112e9948be2f33170/app/src/main/java/com/orienteerfeed/ofeed_sidroid_connector/ResultsService.java#L361)

- `Radio-O-Manager` (Kotlin) - [worker](https://github.com/kolskypavel/Radio-O-Manager/blob/main/app/src/main/java/kolskypavel/ardfmanager/backend/network/workers/OFeedWorker.kt)
