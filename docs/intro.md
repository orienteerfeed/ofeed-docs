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

## Progresive web application (PWA)
OFeed supports PWA and the site can be installed via pop up window. The installed app offers a more pleasant browsing experience that can be launched directly from you home screen.

![Pop up install](/img/ofeed_pwa_install_50proc.jpg)
![Pop up install](/img/ofeed_pwa_install_confirm_50proc.jpg)

## Community
We have launched a Discord server ([invite](https://discord.gg/QMvnurgKzU)) that is open to anyone who wants to share their experiences or is looking for support in solving problems with using the OFeed platform. Join us and help us make OFeed one of the best tools for working with orienteering data during the event.

## Integration
Data from the platform can be simply integrated into your app via dedicated API endpoints in both directions.

### OChecklist
OFeed is fully integrated into OChecklist mobile app and can be used as a [data source](/docs/tutorials/ochecklist.md). Data is loaded at the beginning and updated regularly as you update it in your organising software. The start crew has access to up-to-date information throughout the event. Changes from the start are transferred to the OFeed platform and are available for further processing.

### SI-Droid Event
Mobile app called `SI-Droid OFeed Connector` that is published as open-source [project](https://github.com/orienteerfeed/ofeed-sidroid-connector) and handles xml upload to the OFeed platform using `Results Service` running in `SI-Droid Event`. So the readout proccess of your event can be managed on your mobile device without difficulty.

### APIs
Service provides both [RESTful](https://api.orienteerfeed.com/api-docs/) and [GraphQL](https://api.orienteerfeed.com/graphql) APIs which are more responsible than standard iof xml with many different implementations. Made for the simple implementation of OFeed platform into your app.