---
sidebar_position: 5
title: "OFeed API"
---

`OFeed` offers two types of APIs—**REST** and **GraphQL**—that enable customized integration. You can find inspiration in the [examples](#examples).

## REST API

The Swagger documentation with detailed endpoints is available [👉](https://api.orienteerfeed.com/api-docs).

### Authorization

The authorization method uses a basic `eventId:eventPassword` encoded as a Base64 string, as shown in the `PUT` and `POST` request headers.

### Import Data

- Endpoint: `https://api.orienteerfeed.com/rest/v1/upload/iof`
- This can be called regularly (e.g., every 5 minutes), but the complete data must be managed and new or updated records identified. This approach is not optimal—it works the same way as updating start lists or results from XML.

### Update Data

The update is separated into two groups:

- #### 1. Change Status
  - A simple endpoint designed specifically for handling a competitor's status
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change`

- #### 2. Change Competitor's Details
  - Updates other competitor data, e.g., a new card number
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}`

### Get a List of Changes

You can retrieve a list of changes for a specified `origin` (e.g., START). This is an authorized endpoint.
URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog`

## GraphQL

The same operations available in REST are also available in GraphQL. The advantage is that you can specify exactly which data you need in the response, reducing the size of the data transferred.

Url: [GraphQL](https://api.orienteerfeed.com/graphql)

## Examples

- `QuickEvent` (C++) - [service](https://github.com/Quick-Box/quickevent/tree/main/quickevent/app/quickevent/plugins/Event/src/services/ofeed)

- `SI-Droid Connector` (Java) - [upload](https://github.com/orienteerfeed/ofeed-sidroid-connector/blob/6ff60f61ab93904d4ece60e112e9948be2f33170/app/src/main/java/com/orienteerfeed/ofeed_sidroid_connector/ResultsService.java#L361)

- `Radio-O-Manager` (Kotlin) - [worker](https://github.com/kolskypavel/Radio-O-Manager/blob/main/app/src/main/java/kolskypavel/ardfmanager/backend/network/workers/OFeedWorker.kt)
