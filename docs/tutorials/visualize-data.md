---
sidebar_position: 4
---

# Visualize data
OFeed offers two ways of visualizing the uploaded data:
- `Basic view` - more for mobile devices and personal usage
- `MRB` - result presentation system suitable for presenting the startlists/results in the event center on the screens

## 1. Basic tool
You can check the data in the `event` details. You can analyze both simple results and splits times as well.
![Basic tool](/img/tutorials/visualize-data-ofeed.png)

:::tip
The view supports automatic `speaker` (speaker icon) that comments when a new winner reads out.
:::

:::tip
Czech ranking points are calculated on the fly.
:::

## 2. MRB
Dedicated web app called `MyResultBoard` (MRB) that shows startlist and results in one setup. The headers of the classes are colored:
- <span class="mrb-blue">Men</span>
- <span class="mrb-pink">Women</span>
- <span class="mrb-grey">Other</span> (e.g. `T`, `Open`)

If you turn on showing the Emoji in the table (default option), you can see:
- 🙈 - disqualified
- 🏃 - running
- 🥺 - did not start
- 🏴 - disqualified by the organiser
- 🦄 - not competing
- 🛏️ - not started yet
- 🥇🥈🥉 - for top three positions

![Visualize Data](/img/tutorials/visualize-data-mrb.png)

### How it works
Once you upload data to the platform everything is automatically prepared for you. Just visit https://api.orienteerfeed.com/mrb/ and select your event that is listed.

Launch `MRB` in the morning, start regular uploading of the startlists and the results. The startlists are transformed to the results smoothly as the event goes on. No additional settings is needed.

The recommanded browsers are Google Chrome and Firefox. Other can face an issue with e.g. displaying the Emoji.

### Setup
Using `Settings` button in the upper right corner gives you advanced options. You can adjust classes that are visualized, number of columns used (based on your screen size and orientation), order of the classes, scrolling style, table content.
![MRB setup](/img/tutorials/visualize-data-mrb-settings.png)

#### Offline mode
`OFeed` can run locally in docker but that is suitable just for `MRB` and `OChecklist` can't be connected as it's not available on the internet.

### Supported event types
The app supports:
- invidivual race (both individual and mass start)
- relays - both sprint relay (4 legs) and classic relay (3 legs)
![Visualize data sprint relay](/img/tutorials/visualize-data-mrb-sprint-relay.png)

### Showcase
- TV screens

![Showcase CHC](/img/tutorials/mrb/mrb_showcase_chc.jpeg)
![Showcase KAM](/img/tutorials/mrb/mrb_showcase_kam.jpg)

- PC monitors in portrait orientation

![Showcase SHK women](/img/tutorials/mrb/mrb_showcase_shk_women.jpg)
![Showcase SHK men](/img/tutorials/mrb/mrb_showcase_shk_men.jpg)