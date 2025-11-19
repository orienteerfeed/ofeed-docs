---
id: intro
sidebar_position: 1
title: "Introduction"
slug: /
---

# OFeed

## About

Modern iof xml oriented platform for managing all orienteering event data in one place. Developed as open-source project and hosted on domain [orienteerfeed.com](https://orienteerfeed.com).

Store all event data:

- Startlists
- Results
- Changes from the start captured by [OChecklist](https://stigning.se/checklist/help_en.html) mobile app
- New entries

The platform has specialized app [MRB](/tutorials/visualize-data#2-mrb) for the modern and interactive results visualization as well. For more information, click on the link.

## Workflow

```mermaid
flowchart TD
    A["Organising Software<br/>(QuickEvent, MeOS, Oribos, ...)"]
    B["OFeed <br/> running at https://orienteerfeed.com"]
    C[OChecklist]

    A -- "Upload<br/>data" --> B
    B -- "Get<br/>changes" --> A

    B -- "Classes/<br/>participants" --> C
    B -- "On-the-day<br/>entries" --> C
    C -- "Changed<br/>status" --> B
    C -- "Changed<br/>card<br/>number" --> B
    C -- "Changed<br/>note" --> B
    C -- "New<br/>entries" --> B
```

### Main use cases

- **real-time** data at the start in OChecklist app so that even late entries and card changes are handled before the competitor enters the first corridor
- changed cards numbers at the start can be processed in a minute and radiocontrols are working for all competitors. No more unkown card numbers
- competitors that didn't start can be processed in short period of time. When late start appears the `DNS` status is changed back to `Active`.

### Limitations

Real-time data synchronization requires mobile network availability for both the event center and the start.

## Community

We have launched a Discord server ([invite](https://discord.gg/QMvnurgKzU)) that is open to anyone who wants to share their experiences or is looking for support in solving problems with using the OFeed platform. Join us and help us make OFeed one of the best tools for working with orienteering data during the event.

## Integration

Data from the platform can be simply integrated into your app via dedicated API endpoints in both directions.

### OChecklist

OFeed is fully integrated into OChecklist mobile app and can be used as a [data source](/tutorials/ochecklist). Data is loaded at the beginning and updated regularly as you update it in your organising software. The start crew has access to up-to-date information throughout the event. Changes from the start are transferred to the OFeed platform and are available for further processing.

### SI-Droid Event

Mobile app called `SI-Droid OFeed Connector` that is published as open-source [project](https://github.com/orienteerfeed/ofeed-sidroid-connector) and handles xml upload to the OFeed platform using `Results Service` running in `SI-Droid Event`. So the readout proccess of your event can be managed on your mobile device without difficulty.

### APIs

Service provides both [RESTful](https://api.orienteerfeed.com/api-docs/) and [GraphQL](https://api.orienteerfeed.com/graphql) APIs which are more responsible than standard iof xml with many different implementations. Made for the simple implementation of OFeed platform into your app.

## Progresive web application (PWA)

OFeed supports PWA and the site can be installed via pop up window. The installed app offers a more pleasant browsing experience that can be launched directly from your home screen.

![Pop up install](/img/ofeed_pwa_install.jpg)
![Pop up install confirm](/img/ofeed_pwa_install_confirm.jpg)
