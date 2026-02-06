---
id: best-practice
sidebar_position: 3
title: "Best Practice Configuration"
---

# Best Practice Configuration

Recommended setup scenarios for the related apps.

## OFeed

<img src="/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png" alt="OFeed logo" width="150" />

Detailed description of each section in the event Settings.

### Event Information

- `Relay` - check if your event is team based (2 and more legs)
- `Hundredth precision`
- `Ranking` - calculates Czech ranking points in real time
- `Published` - visible/invisible in the list of events on the homepage

### Event Password

- `Generate password` - if you plan to connect other app with OFeed, you need to generate a password that will be used. Shows QR code for `O Checklist` connection
- `Regenerate password` - use in case of password leak
- `Revoke` - invalidates actual password
- `Password expiration` - generated password is valid for 7 days

### O Checklist connection

Shows QR code that can be used for simple `O Checklist` connection. Scan the the code and confirm opening provided link.

### Visibility

You can keep your event invisible in both the [OFeed](https://orienteerfeed.com/) and [MRB](https://api.orienteerfeed.com/mrb/) event lists. Optimal choice for **testing** purposes or **private** events. Everything is working **normally** even though the event is not visible in the lists.

### Event Link

Can be used for event promotion, e.g. on the website. `Share` button enables sharing QR code with the start crew, e.g. via chat apps. `Print` button generates document that can be printed and provided to the start crew.

### Danger Zone

- `Delete competitors` - deletes all competitors - is useful in case of duplicities appear, classes remain
- `Delete all event data` - deletes competitors, classes, relays, password
- `Delete event` - completely deletes the entire event

## MyResultBoard (MRB)

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/mrb.png" alt="MRB logo" width="300" />

Based on the number of screens and their size adjust number of columns and scroll speed. We like `Continues scroll` the most.

If you want to save space, use `Compact mode`. Some browsers are not able to display Emojis so uncheck `Show Emoji in table` option.

For a clearer view of the results after the first competitors have finished, you can use uncheck `Show unfinished` option.

### Documentation

For more details click [here](/tutorials/visualize-data#2-mrb)

</td>
<td>

![MRB Settings](/img/tutorials/client/best_practice_mrb.png)

</td>
</tr>
</table>

## O Checklist

### App Settings

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/o_checklist.png" alt="O Checklist logo" width="150" />

Recommended `Settings` setup:

- `Time adjustment`
  - Individual start (e.g. +3 min prestart)
- `Start window`
  - 1 min
  - Automatic DNS
- `SPORTident` - turn the sound on
  - Automatic tick off OK
  - Failed to automatically tick off
- `Server connection`
  - Use **OFeed**

### Documentation

For more details click [here](/integrations/ochecklist)

</td>
<td>

![O Checklist Settings](/img/tutorials/client/best_practice_ochecklist.png)

</td>
</tr>
</table>

:::tip
Turn `Competition mode` on, it deactivates all menu items.
:::

## QuickEvent

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/quickevent.png" alt="QuickEvent logo" width="150" />

### Recommended settings

- `Export interval` usually **60 seconds** is fine
- Click <span class="red-qe-service-dot">OFF</span> to enable processing of changes from `O Checklist`, if you use it -> it will change to <span class="green-qe-service-dot">ON</span>
- Disable IOF XML validation - in case of troubles with upload, it may help

### Documentation

For more details click [here](/integrations/quickevent)

</td>
<td>

![QE Settings](/img/tutorials/client/best_practice_qe_on.png)

</td>
</tr>
</table>

## SI-Droid Connector

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/connector.png" alt="Connector logo" width="150" />

### Setup steps

- Start **Result service** in the mobile app `SI-Droid Event`
- Open `Settings` and:
  - fill in **port** number of the result service
  - for `OFeed` scan QR code with credentials or manually enter the credentials
  - for `OResults` enter `api key`

### Handle ducplcities

- Use `Clear OFeed` menu option

### Battery usage

The `Unrestricted battery` setting may resolve some issues that occur while running the app.

### Documentation

For more details click [here](/integrations/joja)

</td>
<td>

![Connector Settings](/img/tutorials/client/best_practice_connector.png)

</td>
</tr>
</table>
