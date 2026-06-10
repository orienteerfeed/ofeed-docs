---
sidebar_position: 2
---

# Visualize Data

`OFeed` offers two ways to visualize the uploaded data:

- `Basic view` - designed more for mobile devices and personal use
- `OFB` - a results presentation system suitable for displaying start lists and results on screens in the event center

## 1. Basic Tool

You can check the data in the `event` details. Both simple results and split times can be analyzed.
![Basic tool](/img/tutorials/client/visualize-data-ofeed.png)

:::tip
The view supports automatic `speaker` (speaker icon), which announces when a new winner is read out.
:::

:::tip
Czech ranking points are calculated on the fly.
:::

## 2. OFB

An application proven in many races called `OFeed Board` (OFB) displays the start list and results in a single interface. The class headers are color-coded:

- <span class="ofb-blue">Men</span> (class name starts with **D** or **W**)
- <span class="ofb-pink">Women</span> (class name starts with **H** or **M**)
- <span class="ofb-grey">Other</span> (e.g., `T`, `Open`)

:::info
The header color can be manually adjusted if needed.
:::

If you enable emoji display in the table (default option), you will see:

- 🙈 - disqualified
- 🏃 - running
- 🚷 - did not start
- 🏴 - disqualified by the organiser
- 🦄 - not competing
- 🛏️ - not started yet
- 🥇🥈🥉 - top three positions

![Visualize Data](/img/tutorials/ofb/visualize-data-ofb.png)

### How It Works

Once you upload data to the platform, everything is automatically prepared for you. Simply visit https://board.orienteerfeed.com and select your listed event.

Launch `OFB` in the morning and start regular uploading of the start lists and results. The start lists are seamlessly transformed into results as the event progresses. No additional settings are needed.

The recommended browsers are Google Chrome and Firefox. Other browsers may encounter issues, for example, with displaying the emojis.

### Setup

Click the `Settings` button in the upper right corner to access advanced options. You can adjust which classes are displayed, the number of columns used (based on your screen size and orientation), the order of the classes, scrolling style, and table content.

![OFB setup 1](/img/tutorials/ofb/ofb_setup_01.png)
![OFB setup 2](/img/tutorials/ofb/ofb_setup_02.png)

You can use _drag-and-drop_ or _arrow buttons_ to reorder the classes. You can also adjust the number of _pinned leaders_ — a useful option for following the top of the field

#### Offline Mode

`OFeed` can run locally in Docker, but this setup is only suitable for `OFB`. `O Checklist` cannot be connected, as it requires an internet connection.

### Supported event types

The app supports:

- **Individual race** - both individual and mass start
- **Relays** - both sprint relay (4 legs) and classic relay (3 legs)
  ![Visualize data sprint relay](/img/tutorials/ofb/visualize-data-ofb-sprint-relay.png)

### Showcase

- TV screens

![Showcase CHC](/img/tutorials/ofb/ofb_showcase_chc.jpeg)
![Showcase KAM](/img/tutorials/ofb/ofb_showcase_kam.jpg)

- PC monitors in portrait orientation

![Showcase SHK women](/img/tutorials/ofb/ofb_showcase_shk_women.jpg)
![Showcase SHK men](/img/tutorials/ofb/ofb_showcase_shk_men.jpg)

### Liveresultat orienteering

It can also be used for races that use the online results platform [liveresultat.se](https://liveresultat.orientering.se/).

![Liveresultat](/img/tutorials/ofb/ofb_liveresultat.png)
