---
sidebar_position: 5
---

# REST API

Swagger s detailnějším popisem je dostupný [👉](https://api.orienteerfeed.com/api-docs).

## Autorizace

Využivá se Basic eventId:eventPassword enkódované jako Base64 řetězec, jak je vidět u `PUT` a `POST` dotazu v authorization hlavičce.

## Nahrání dat

- Endpoint: `https://api.orienteerfeed.com/rest/v1/upload/iof`
- je možné volat pravidelně (například po 5ti minutách) a zpracovává se celé xml, což může něco málo trvat a není to optimální.

## Aktualizace dat

Aktualizace dat je rozdělěná na dvě skupiny:

- #### 1. změna statusu
  - jednoduchý endpoint pouze pro změnu statusu (Běží/Neběží)
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change`

- #### 2. změna údajů závodníka
  - upravuje ostatní údaje o závodníkovi jako např. číslo čipu
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}`

## Získání přehledu změn

Snadno lze získat přehled všech změn, které v průběhu závodu nastaly. Ideální je využít `origin` parametr (např. START) o omezit jen na konkrétní místo původu. Jde o autorizovaný endpoint ačkoliv je to GET požadavek.
URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog?origin=START`
