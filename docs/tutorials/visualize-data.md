---
sidebar_position: 4
---

# Visualize Data

OFeed offers two ways to visualize the uploaded data:

- `Basic view` - designed more for mobile devices and personal use
- `MRB` - a results presentation system suitable for displaying start lists and results on screens in the event center

## 1. Basic Tool

You can check the data in the `event` details. Both simple results and split times can be analyzed.
![Basic tool](/img/tutorials/client/visualize-data-ofeed.png)

:::tip
The view supports automatic `speaker` (speaker icon), which announces when a new winner is read out.
:::

:::tip
Czech ranking points are calculated on the fly.
:::

## 2. MRB

A dedicated web app called `MyResultBoard` (MRB) displays the start list and results in a single interface. The class headers are color-coded:

- <span class="mrb-blue">Men</span>
- <span class="mrb-pink">Women</span>
- <span class="mrb-grey">Other</span> (e.g., `T`, `Open`)

If you enable emoji display in the table (default option), you will see:

- 🙈 - disqualified
- 🏃 - running
- 🥺 - did not start
- 🏴 - disqualified by the organiser
- 🦄 - not competing
- 🛏️ - not started yet
- 🥇🥈🥉 - top three positions

![Visualize Data](/img/tutorials/mrb/visualize-data-mrb.png)

### How It Works

Once you upload data to the platform, everything is automatically prepared for you. Simply visit https://api.orienteerfeed.com/mrb/ and select your listed event.

Launch `MRB` in the morning and start regular uploading of the start lists and results. The start lists are seamlessly transformed into results as the event progresses. No additional settings are needed.

The recommended browsers are Google Chrome and Firefox. Other browsers may encounter issues, for example, with displaying the emojis.

### Setup

Click the `Settings` button in the upper right corner to access advanced options. You can adjust which classes are displayed, the number of columns used (based on your screen size and orientation), the order of the classes, scrolling style, and table content.
![MRB setup](/img/tutorials/mrb/visualize-data-mrb-settings.png)

#### Offline Mode

`OFeed` can run locally in Docker, but this setup is only suitable for `MRB`. `OChecklist` cannot be connected, as it requires an internet connection.

### Supported event types

The app supports:

- **Individual race** - both individual and mass start
- **Relays** - both sprint relay (4 legs) and classic relay (3 legs)
  ![Visualize data sprint relay](/img/tutorials/mrb/visualize-data-mrb-sprint-relay.png)

### Showcase

- TV screens

![Showcase CHC](/img/tutorials/mrb/mrb_showcase_chc.jpeg)
![Showcase KAM](/img/tutorials/mrb/mrb_showcase_kam.jpg)

- PC monitors in portrait orientation

![Showcase SHK women](/img/tutorials/mrb/mrb_showcase_shk_women.jpg)
![Showcase SHK men](/img/tutorials/mrb/mrb_showcase_shk_men.jpg)
