---
sidebar_position: 1
---

# REST

The Swagger documentation with detailed endpoints is available [here](https://api.orienteerfeed.com/api-docs).

## Authorization

The authorization method uses a basic `eventId:eventPassword` encoded as a Base64 string, as shown in the `PUT` and `POST` request headers.

## Import Data

- Endpoint: `https://api.orienteerfeed.com/rest/v1/upload/iof`
- This can be called regularly (e.g., every 5 minutes), but the complete data must be managed and new or updated records identified. This approach is not optimal—it works the same way as updating start lists or results from XML.

## Update Data

The update is separated into two groups:

- #### 1. Change Status
  - A simple endpoint designed specifically for handling a competitor's status
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}/status-change`

- #### 2. Change Competitor's Details
  - Updates other competitor data, e.g., a new card number
  - URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/competitors/{competitorId}`

## Get a List of Changes

You can retrieve a list of changes for a specified `origin` (e.g., START). This is an authorized endpoint.
URL: `https://api.orienteerfeed.com/rest/v1/events/{eventId}/changelog`
