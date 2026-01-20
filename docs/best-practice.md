---
id: best-practice
sidebar_position: 4
title: "Best Practice Configuration"
---

# Best Practice Configuration

Recommended setup scenarios for the related apps.

## OFeed

<!-- ![OFeed](/img/svg/2025-04-11_orienteerfeed_192x192px_dark.svg) -->

Detailed description of each section in the event Settings.

### Event Information

- `Relay` - check if your event is team based (2 and more legs)
- `Hundredth precision`
- `Ranking` - calculates Czech ranking points in real time
- `Published` - visible/invisible in the list of events on the homepage

### Event Password

- `Generate password` - if you plan to connect other app with OFeed, you need to generate a password that will be used. Shows QR code for OChecklist connection
- `Regenerate password` - use in case of password leak
- `Revoke`
- `Password expiration` - generated password is valid for 7 days

### O Checklist connection

Shows QR code that can be used for simple OChecklist connection. Scan the the code and confirm opening provided link.

### Visibility

You can keep your event invisible in both the [OFeed](https://orienteerfeed.com/) and [MRB](https://api.orienteerfeed.com/mrb/) event lists. Optimal choice for **testing** purposes or **private** events. Everything is working **normally** even though the event is not visible in the lists.

### Event Link

Can be used for event promotion, e.g. on the website. `Share` button enables sharing QR code e.g. via chat apps.

### Danger Zone

- `Delete competitors` - deletes all competitors, classes remain
- `Delete all event data` - deletes competitors, classes, relays, password
- `Delete event` - completly removes whole event

## MRB

Based on the number of screens and their size adjust number of columns and scroll speed. We like `Continues scroll` the most.

If you want to save space, use `Compact mode`. Some browsers are not able to display Emojis so uncheck `Show Emoji in table` option.

For a clearer view of the results after the first competitors have finished, you can use uncheck `Show unfinished` option.

## O Checklist

### App Settings

Recommended `Settings` setup:

- `Time adjustment`
  - Individual start (e.g. –3 min prestart)
- `Start window`
  - 1 min
  - Automatic DNS
- `SPORTident` - turn the sound on
  - Automatic tick off OK
  - Failed to automaticaůůy tick off
- `Server connection`
  - Use OFeed

### Other

:::tip
Turn `Competition mode` on.
:::

## QuickEvent

### Setup steps

- Display Services
- Open Service - `settings` icon
- Fill in the credentials
- Turn on changes processing when using OChecklist
- Start the service - `play` icon, the <span class="red-qe-service-dot">red</span> dot goes <span class="green-qe-service-dot">green</span>

### Advanced options

- Disable IOF XML validation - in case of troubles with upload
- Manual startlist/results upload

### How does the service works

- Uploads starlist on startup
- Every `xx` sec uploads results
- Reacts on db events
  - competitor edited
  - competitor added
  - competitor deleted
  - competitor read-out

### Known limitations

- Direct table edits in the `Runs` are NOT handled at this moment.
- Relay xml can not pass iof xml validation -> use checkbox `Run IOF XML validation`
  Screenshot(s)

## SI-Droid Connector

### Setup steps

- Start SI-Droid result service
- Open `Settings` and:
  - fill in port number
  - for `OFeed` scan qr code with credentials or manually enter the credentials
  - for `OResults` enter `api key`

### Handle ducplcities

- Use `Clear OFeed` menu option

### Battery usage

The `Unrestricted battery` setting may resolve some issues that occur while running the app.
