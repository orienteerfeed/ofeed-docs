---
sidebar_position: 2
---

# QuickEvent

<img src="/img/logos/quickevent.png" alt="QuickEvent logo" width="150" />

`QuickEvent` 3 has a dedicated `Service` that handles all the communication to the platform. The service manages initial upload of the start list after startup and regular uploads of the results and changes made while editing and read-out (database events are invoked and processed).

## Service Setup

![QE service](/img/tutorials/quickevent/upload-data-qe-service.png)

- Display `Services`
- Open Service - `settings` icon
- Fill in the credentials by pasting copied link, click `Paste setup link`
  1. Copy in `OFeed`

  ![Copy Credentials](/img/tutorials/quickevent/ofeed_qe_credentials.png)
  2. Paste in `QuickEvent`

  ![Paste Credentials](/img/tutorials/quickevent/service_paste_setup_link.png)

- Test connection by clicking `Test connection` button - name of the event is displayed if everything is ok
- Click <span class="red-qe-service-dot">OFF</span> to enable processing of changes from `O Checklist`, if you use it -> it will change to <span class="green-qe-service-dot">ON</span>
- Start the service - `play` icon, the <span class="red-qe-service-dot">red</span> dot goes <span class="green-qe-service-dot">green</span>

![QE Service Off](/img/tutorials/client/qe_ofeed_service_off.png)
![QE Service On](/img/tutorials/client/qe_ofeed_service_on.png)

- Manual startlist/results upload via buttons `Export startlist`/`Export results`

## Processing Changes

Changes sent back to QuickEvent are processed completely automatically. The service regularly checks for available updates and applies them to the database. There is also a backup table that stores all processed changes.

## Setup Receipt

You can configure:

- **Event logo** at the top (height can be adjusted)
  - image is loaded from `OFeed` if uploaded, you have to click `Refresh event image cache`
- **QR code** with link to the event results and custom caption at the bottom
  - competitor's class is used and url param `class` is appended so the QR code opens the correct category

![Setup Receipt](/img/tutorials/quickevent/service_additional_settings_merged.png)

## Run flags

Use `Run flags` for `DNS` instead of the off-race checkbox, which removes the competitor from the XML export.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

## How does the service work

- Uploads starlist on startup
- Every `xx` sec uploads results
- Reacts on database events
  - competitor edited
  - competitor added
  - competitor deleted
  - competitor read-out

## Known limitations

- Direct table edits in the `Runs` are **not** handled at this moment.
- Relay xml can not pass iof xml validation -> uncheck checkbox `Run IOF XML validation`

## QuickEvent Tutorial

How to use QuickEvent in general is described in video [👉](https://www.youtube.com/playlist?list=PLVgDCJ29lrhDWTnzczCUOCi16sydyuD9C).
