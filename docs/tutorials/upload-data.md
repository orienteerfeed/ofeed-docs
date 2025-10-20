---
sidebar_position: 3
---

# Upload data
You can use both manual and api for upload. Manual is more suitable for initial upload and api can automatically handle uploading during the event.

## Manual
In the event `Settings` (you have to be logged in) you can drag&drop xml with startlist or results.
![Drag and drop](/img/tutorials/upload-data-manual-d&d.png)

## QE service
Quickevent 3 has dedicated service that handles regular upload to the platform. The service is still in progress but can handle regular upload of the startlist and results.
![QE service](/img/tutorials/upload-data-qe-service.png)
Changes back to Quickevent are not processed at this moment.

### Run flags
Use `Run flags` for `DNS` instead of off-race checkbox that removes the competitor from the xml export.
![QE run flags](/img/tutorials/quickevent/qe_runs_run_flags.png)

### Known issues
Db events for create and edit are not working as expected and you have to press `Export start list` when the entries change. 

## API call
Use HTTP POST reuest to the  endpoint `/rest/v1/upload/iof`. More details can be found [here](https://api.orienteerfeed.com/api-docs/#/default/post_rest_v1_upload_iof).