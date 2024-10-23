---
sidebar_position: 5
---

# Request RESTful API

## Authorization
Authorization method is used basic eventId:eventPassword encoded as Base64 string as you can see in PUT and POST request headers.

## Import data
- https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors
- can be called regularly (e.g. every 5 minutes) but you have to manage complete data and find new/updated records that's the same as you going to do with updating startlist from xml I guess

## Update data
- change status
  - https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change

- change competitor's details (new card)
  - https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}
