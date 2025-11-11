---
sidebar_position: 1
---

# REST
Swagger with detailed endpoints decription is running [here](https://api.orienteerfeed.com/api-docs).
## Authorization
Authorization method is used basic eventId:eventPassword encoded as Base64 string as you can see in `PUT` and `POST` request headers.

## Import data
- https://api.orienteerfeed.com/rest/v1/upload/iof
- can be called regularly (e.g. every 5 minutes) but we have to manage complete data and find new/updated records. It's not optimal. That's the same as you do with updating startlist/results from xml.

## Update data
The update is separated into two groups:
- #### 1. change status
  - simple endpoint made just for competitor's status handling
  - url: https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change

- #### 2. change competitor's details
  - update other competitor's data e.g. new card number
  - url: https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}

## Get a list of changes
You can get a list of changes for the specified `origin` (e.g. START). Authorized endpoint.
https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog
