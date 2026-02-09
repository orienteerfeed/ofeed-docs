---
sidebar_position: 5
---

# Connect to SI-Droid Connector

The Connector retrieves IOF XML from the `/reports/ResultsIof30Xml` endpoint and uploads it to `OFeed` at configured intervals.

The application adds a unique ID to each competitor (combination of last name+first name+SI card number) for unambiguous record identification - this combination **must not repeat**. It can be disabled in settings.

Punch readouts without a completed name are **ignored** and will only be uploaded once the name is filled in.

It is also possible to upload an XML file stored on the device via the `Upload file` menu item.

## Application Installation

The application is not yet officially published on Google Play and can be downloaded [👉](https://stigning.se/download/connector.apk).

## How to Connect

1. Enable the results service in SI-Droid - you can keep the default port number 8080

<img src="/img/tutorials/connector/si_droid_results_service.jpg" alt="Result service select" width="200" />
<img src="/img/tutorials/connector/si_droid_results_service_startup.jpg" alt="Result service start" width="200" />

2. Start SI-Droid Connector - confirm permission to display notifications

<img src="/img/tutorials/connector/android_permissions.jpg" alt="Permissions info" width="200" />
<img src="/img/tutorials/connector/android_permissions_confirm.jpg" alt="Permissions confirm" width="200" />

3. Set login credentials and port number - by scanning the QR code or inserting the copied link. The port number must match the settings in `SI-Droid`.

<img src="/img/tutorials/connector/screen_init.jpg" alt="Upload settings not configured" width="200" />
<img src="/img/tutorials/connector/scan_qr_code.jpg" alt="Scan QR" width="200" />
<img src="/img/tutorials/connector/settings_configured.jpg" alt="Upload settings configured" width="200" />

4. Start data upload by clicking `Start uploading`

<img src="/img/tutorials/connector/screen_configured.jpg" alt="Upload configured" width="200" />
<img src="/img/tutorials/connector/screen_upload_ok.jpg" alt="Upload OK" width="200" />
<img src="/img/tutorials/connector/screen_upload_countdown.jpg" alt="Upload countdown" width="200" />

## Troubleshooting

- **Deleting uploaded competitors** - In case of duplicates or other display issues, you can use the `Clear OFeed` function, which deletes all uploaded competitors. After restarting (upload stops after clearing), the upload will repopulate the competitors.

<img src="/img/tutorials/connector/clear_ofeed_confirm.jpg" alt="OFeed clear confirm" width="200" />
<img src="/img/tutorials/connector/clear_ofeed_cleared.jpg" alt="OFeed cleared" width="200" />
<img src="/img/tutorials/connector/clear_ofeed_start_upload.jpg" alt="Restart after clear" width="200" />

- **Service unavailable** - check the battery settings for the SI-Droid application, which may restrict the results service functionality.

<img src="/img/tutorials/connector/screen_service_not_available.jpg" alt="Result service not available" width="200" />
<img src="/img/tutorials/connector/si_droid_battery.jpg" alt="Battery restrictions" width="200" />
