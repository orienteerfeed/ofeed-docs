---
id: intro
sidebar_position: 1
title: "Introduction"
---
# OFeed
## About
Modern iof xml oriented platform for managing all orienteering event data in one place. Developed as open-source project and hosted on domain [orienteerfeed.com](https://orienteerfeed.com).

Store all event data:
- Startlists
- Results
- Changes from from the start captured by [O-Checklist](https://stigning.se/checklist/help_en.html) mobile app
- New entries

The OFeed platform has specialized app [MRB](/docs/tutorials/visualize-data.md#2-mrb) for the modern and interactive results visualization as well. For more information, click on the link.

## Integration
Data from the platform can be simply integrated into your app via dedicated API endpoints in both directions.

### O-Checklist app
Already OFeed ready mobile app. OFeed can be used as [data source](/docs/tutorials/ochecklist.md). Data are fetched in the beginning and updated regulary as you update them in the organising software. The start crew is up-to-date during the whole event. Changes from the start are transfered to the OFeed platform and available for additional processing.

### APIs
Service provides both [RESTful](https://api.orienteerfeed.com/api-docs/) and [GraphQL](https://api.orienteerfeed.com/graphql) APIs which are more responsible than standard iof xml with many different implementations. Made for the simple implementation of OFeed platform into your app.