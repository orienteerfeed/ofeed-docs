---
id: best-practice
sidebar_position: 3
title: "Best Practice Configuration"
---

# Best Practice Configuration

Recommended setup scenarios for the related apps.

## OFeed

<img src="/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png" alt="OFeed logo" width="150" />

The most important **Settings** by sections:

- `Event Information`:
  - [x] Relay - if you organize non-individual Event check this option
  - [x] Published - makes the Event public, will be visible in the list of events
- `Event Password`
  - Click `Generate Password` and copy&paste it according to used [integration](/category/integrations)
  - Expires after **7 days**
- `Integrations`
  - Setup the connection with the app you use
  - For `O Checklist` or `SI Droid Conenctor` share the QR code or click the button with the app icon to easily setup the connection on actual device
- `Event link`
  - Share the Event link with the audience
  - Print and place a QR code in the center of the event for easy access
- `Danger Zone`
  - Use in case you need to reupload data or fix unexpected state (liek duplicities etc.)
- `Need Help of Have Questions?`
  - Check [Support page](/support)

### Documentation

For more details click [👉](/features/general-description)

## MyResultBoard (MRB)

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/mrb.png" alt="MRB logo" width="300" />

Based on the number of screens and their size adjust number of columns and scroll speed. We like `Continues scroll` the most.

If you want to save space, use `Compact mode`. Some browsers are not able to display Emojis so uncheck `Show Emoji in table` option.

For a clearer view of the results after the first competitors have finished, you can use uncheck `Show unfinished` option.

### Documentation

For more details click [👉](/features/visualize-data#2-mrb)

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

For more details click [👉](/integrations/ochecklist)

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

For more details click [👉](/integrations/quickevent)

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

For more details click [👉](/integrations/joja)

</td>
<td>

![Connector Settings](/img/tutorials/client/best_practice_connector.png)

</td>
</tr>
</table>
