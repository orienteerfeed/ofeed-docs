---
sidebar_position: 1
---

# REST
Swagger s detailním popisem je k dispozici [dze](https://api.orienteerfeed.com/api-docs).

## Autorizace
K autorizaci se využívá formát eventId:eventPassword zakódovaný ve formátu Base64 jak je vidět v hlavičce u `PUT` a `POST` dotazů.

## nNhrání dat
- https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors
- can be called regularly (e.g. every 5 minutes) but you have to manage complete data and find new/updated records that's the same as you going to do with updating startlist from xml I guess

## Aktualizace data
Aktualizace dat je rozdělená an dvě části:
- #### 1. změna statusu
  - endpoint pouze pro ejdnoduchou změnu statusu, slouží hlavně pro OChecklist.
  - url: https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change

- #### 2. změna detailů závodníka
  - aktualizování zbylých dat závodníka - např. nový čip
  - url: https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}

## Získání přehledu změn
Změny je možné získat dle místa původu dat, tzv. `origin` (např. START). Jde o autorizovaný endpoint
https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog
