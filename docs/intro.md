---
id: intro
sidebar_position: 1
title: "About"
slug: /
---

# About

A modern IOF-XML–oriented platform for managing all orienteering event data in one place. Developed as an open-source project and hosted at [orienteerfeed.com](https://orienteerfeed.com).

The platform also has a specialized app, [MRB](/tutorials/visualize-data#2-mrb), for modern and interactive results visualization.

## Key benefits of using the platform

- `Smooth readout` - no **unknown** cards that **slow down** read-out.
- `Actual card numbers` - changed card numbers at the start can be **processed within a minute** and radio controls work for all competitors. The work involved in installing radio controls will not be **wasted**.
- `Real-time data` - [O Checklist](https://play.google.com/store/apps/details?id=se.tg3.startlist) app has up-to-date data, so that even **late entries** during the race and **other changes** are synchronized **before** the competitor enters the first corridor.
- `Instant DNS` - competitors who **didn’t start** can be processed **quickly**. If a late start occurs, the **DNS** status is changed back to **Active**. You have accurate statistics of who is still running.
- `Central Data Hub` - keep **all** your orienteering **data** in one secure place when organizing, where it's easily **accessible** to other integrated applications.

## Workflow

```mermaid
flowchart TB
    SW@{ shape: cyl, label: "Organising Software<br/>(QuickEvent, MeOS, Oribos, ...)" }
    OFeed@{ shape: cloud, label: "**OFeed**<br/>https://orienteerfeed.com" }
    OChecklist@{ shape: rounded, label: "**O Checklist**" }

    SW e1@== "Upload<br/>data" ==> OFeed
    e1@{ animation: fast }
    OFeed e2@== "Get<br/>changes" ==> SW
    e2@{ animation: fast }

    OFeed e3@-- "Classes/<br/>participants" --> OChecklist
    e3@{ animation: fast }
    OFeed e4@-- "Late<br/>entries/<br/>changes" --> OChecklist
    e4@{ animation: fast }

    OChecklist e5@-- "Changed<br/>status" --> OFeed
    e5@{ animation: fast }
    OChecklist e6@-- "Changed<br/>card<br/>number" --> OFeed
    e6@{ animation: fast }
    OChecklist e7@-- "Changed<br/>note" --> OFeed
    e7@{ animation: fast }
    OChecklist e8@-- "New<br/>entries" --> OFeed
    e8@{ animation: fast }

    click OFeed "https://orienteerfeed.com" _blank
    click OChecklist "https://stigning.se/checklist/help_en.html" _blank
```

## Data inputs

Store all event data:

- Start lists
- Results
- Changes from the start captured by the [O Checklist](https://play.google.com/store/apps/details?id=se.tg3.startlist) mobile app
- New entries

## Limitations

Real-time data synchronization requires **mobile network availability** at both the event center and the start.

## Community

Connecting the right people is essential, which is why we have launched a [Discord server](https://discord.gg/QMvnurgKzU), where you can seek advice and learn about other useful tools. Join us and help us make OFeed a popular platform that will make organizing easier not only for us, but for you as well.

## Integrations

A list of apps integrated with `OFeed`.
| Supported | App | Version | Details |
|--|--|--|--|
| ✅ | OChecklist | >= 5.0 | [link](/integrations/ochecklist) |
| ✅ | QuickEvent | >= 3.0 | [link](/integrations/quickevent) |
| ✅ | SI-Droid Event | all | [link](/integrations/joja) |
| ✅ | O-Pal | all | [link](/integrations/joja) |
| ❌ | MeOS | -- | [link](/integrations/meos) |

Data from the platform can be easily integrated into your app through dedicated API endpoints in both directions. List of already supported apps is [here](/category/integrations).

### Custom

Can you simply create your own connection. `OFeed` provides both [RESTful](/integrations/rest-api) and [GraphQL](/integrations/graphql) APIs, which are more reliable than standard IOF XML with its many different implementations.

## Public Appearances

- Methodical Seminar for Coaches and Referees [recording](https://metodika.ceskyorientak.cz/materialy/444-metodicky-seminar-rozhodcich-2025-o-checklist-po-roce)

## Progresive web application (PWA)

OFeed supports PWA, and the site can be installed via a pop-up window. The installed app provides a smoother browsing experience and can be launched directly from your home screen.

![Pop up install](/img/tutorials/pwa/ofeed_pwa_install.jpg)
![Pop up install confirm](/img/tutorials/pwa/ofeed_pwa_install_confirm.jpg)
