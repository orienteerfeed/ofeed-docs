---
sidebar_position: 6
title: "OFeed API"
---

`OFeed` offers two types of APIs—**REST** and **GraphQL**—that enable customized integration. You can find inspiration in the [examples](#examples).

## REST API

The Swagger documentation with detailed endpoints is available [👉](https://api.orienteerfeed.com/reference).

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

### Example Requests

#### Data Upload

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/upload/iof' \
--header 'Authorization: ••••••' \
--form 'eventId="cmg4t3f0i0007my3m5hh50wl2"' \
--form 'file=@"/D:/ofeed/data/results-iof30.xml"'
```

#### Competitor Management

##### List of Competitors

```sh
curl --location 'http://localhost:3001/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors'
```

##### Add a New Competitor

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

##### Competitor Detail

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/4100'
```

##### Competitor Detail by External ID

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/31/external-id'
```

##### Update Competitor Data

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

##### Update Competitor Data by External ID

Usually the internal identifier of the organizing software.

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

##### Delete a Competitor

```sh
curl --location --request DELETE 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/28' \
--header 'Authorization: ••••••'
```

##### Delete a Competitor by External ID

```sh
curl --location --request DELETE 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/16/external-id' \
--header 'Authorization: ••••••'
```

##### Bulk Delete All Competitors

```sh
curl --location --request DELETE 'http://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors' \
--header 'Authorization: ••••••'
```

##### Change Status

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/competitors/1/status-change' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "origin": "START",
    "status": "Active"
}'
```

#### Get Changes

```sh
curl --location --globoff 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2/changelog?group=true&classId={{classId}}}&origin=START' \
--header 'Authorization: ••••••'
```

#### Events

##### Event Detail

```sh
curl --location 'https://api.orienteerfeed.com/rest/v1/events/cmg4t3f0i0007my3m5hh50wl2'
```

## GraphQL

The same operations available in REST are also available in GraphQL. The advantage is that you can specify exactly which data you need in the response, reducing the size of the data transferred.

Url: [GraphQL](https://api.orienteerfeed.com/graphql)

## Examples

- `QuickEvent` (C++) - [service](https://github.com/Quick-Box/quickevent/tree/main/quickevent/app/quickevent/plugins/Event/src/services/ofeed)

- `SI-Droid Connector` (Java) - [upload](https://github.com/orienteerfeed/ofeed-sidroid-connector/blob/6ff60f61ab93904d4ece60e112e9948be2f33170/app/src/main/java/com/orienteerfeed/ofeed_sidroid_connector/ResultsService.java#L361)

- `Radio-O-Manager` (Kotlin) - [worker](https://github.com/kolskypavel/Radio-O-Manager/blob/main/app/src/main/java/kolskypavel/ardfmanager/backend/network/workers/OFeedWorker.kt)
