---
sidebar_position: 3
---

# Upload Data

You can use either the manual method or the API for uploading. The manual method is more suitable for the initial upload, while the API can automatically handle uploads during the event.

## Manual

In the event `Settings` (you need to be logged in), you can drag and drop XML files containing the start list or results.
![Drag and drop](/img/tutorials/client/upload-data-manual-dd.png)

## QuickEvent Service

### Upload Setup

QuickEvent 3 has a dedicated service that handles regular uploads to the platform. The service is still in development but can already manage regular uploads of the start list and results
![QE service](/img/tutorials/quickevent/upload-data-qe-service.png)

Fill in the fields:

- **Url** - `https://api.orinteerfeed.com`
- **Event id** - see the `Settings` section; it will look similar to `cmanygkd60001qq3e5y5hqndm`
- **Password** - see the `Settings` section; you need to generate a new one after creating the event

### Processing Changes

Changes sent back to QuickEvent are processed completely automatically. The service regularly checks for available updates and applies them to the database. There is also a backup table that stores all processed changes.

### Run flags

Use `Run flags` for `DNS` instead of the off-race checkbox, which removes the competitor from the XML export.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

### QuickEvent Tutorial

How to use QuickEvent in general is described in video [here](https://www.youtube.com/playlist?list=PLVgDCJ29lrhDWTnzczCUOCi16sydyuD9C).

## API call

Use an HTTP POST reuest to the endpoint `/rest/v1/upload/iof`. More details can be found [here](https://api.orienteerfeed.com/api-docs/#/default/post_rest_v1_upload_iof).
