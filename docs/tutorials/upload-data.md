---
sidebar_position: 3
---

# Upload data
You can use both manual and api for upload. Manual is more suitable for initial upload and api can automatically handle uploading during the event.

## Manual
In the event `Settings` (you have to be logged in) you can drag&drop xml with startlist or results.
![Drag and drop](/img/tutorials/upload-data-manual-d&d.png)

## QE service
### Upload setup
QuickEvent 3 has dedicated service that handles regular upload to the platform. The service is still in progress but can handle regular upload of the startlist and results.
![QE service](/img/tutorials/upload-data-qe-service.png)

Fill in the fields:
- **Url** - `https://api.orinteerfeed.com`
- **Event id** - see `Settings` section, something similar to `cmanygkd60001qq3e5y5hqndm` 
- **Password** - see `Settings` section, you have to generate a new one after event creation 

### Processing changes
Changes back to QuickEvent are completely automatically processed. The service regularly checks for available changes and processes them into the database. There is backup table that stores all changes processed.

### Run flags
Use `Run flags` for `DNS` instead of off-race checkbox that removes the competitor from the xml export.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

## API call
Use HTTP POST reuest to the  endpoint `/rest/v1/upload/iof`. More details can be found [here](https://api.orienteerfeed.com/api-docs/#/default/post_rest_v1_upload_iof).