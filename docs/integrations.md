---
id: integrations
sidebar_position: 5
title: "Integrations"
---

# Integrations

A list of apps integrated with `OFeed`.
| Supported | App | Version |
|--|--|--|
| ✅ | OChecklist | >= 5.0 |
| ✅ | QuickEvent | >= 3.0 |
| ✅ | SI-Droid Event | all |
| ✅ | O-Pal | all |
| ❌ | MeOS | -- |

## OChecklist

OFeed is fully integrated into the OChecklist mobile app and can be used as a [data source](/tutorials/ochecklist). Data is loaded at the start and updated regularly as you make changes in your organizing software. The start crew has access to up-to-date information throughout the event, and any changes at the start are transferred back to the OFeed platform for further processing.

## QuickEvent

Dedicated `Service` that handles all the communication. For more details check [service description](/tutorials/upload-data#quickevent-service).

## MeOS

Support of MOP (MeOS Online Protocol) is in progress, more details are in the [issue](https://github.com/orienteerfeed/ofeed/issues/97).

## SI-Droid Event / O-Pal

`Results service` in both mobile apps can be used via our mobile app `SI-Droid OFeed Connector`. Check this [guide](/tutorials/upload-data#si-droid-event--o-pal) how to make it.

## Custom

Can you simply create your own connection. `OFeed` provides both [RESTful](https://api.orienteerfeed.com/api-docs/) and [GraphQL](https://api.orienteerfeed.com/graphql) APIs, which are more reliable than standard IOF XML with its many different implementations. More details are [here](/category/api).
