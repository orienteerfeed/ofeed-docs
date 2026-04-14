---
sidebar_position: 5
---

# Připojení do SI-Droid Connectoru

Connector získává IOF XML z endpointu `/reports/ResultsIof30Xml` a nahrává je na `OFeed` v nastavených intervalech.

Aplikace přidává ke každému závodníkovi unikátní id (složenina příjmení+jména+čísla čipu) pro jednoznačnou identifikaci záznamu - kombinace se **nesmí** opakovat **vícekrát**. Je možné vypnout v nastavení.

Vyčtení bez vyplněného jména se **ignoruje** a dojde k nahrání až po vyplnění.

Je také možné nahrát xml uložené na zařízení přes položku v menu `Nahrát soubor`.

## Instalace aplikace

Apliakc ještě není oficiálně publikovaná na Google Play a je možné ji stahnout [👉](https://stigning.se/download/connector.apk).

## Jak propojit

1. Zapni výsledkovou službu v `SI-Droid` - můžeš nechat výchozí nastavení čísla portu **8080**

<img src="/img/tutorials/connector/si_droid_results_service.jpg" alt="Result service select" width="200" />
<img src="/img/tutorials/connector/si_droid_results_service_startup.jpg" alt="Result service start" width="200" />

2. Zapni SI-Droid Connector - potvrď právo na zobrazení notifikací

<img src="/img/tutorials/connector/android_permissions.jpg" alt="Permissions info" width="200" />
<img src="/img/tutorials/connector/android_permissions_confirm.jpg" alt="Permissions confirm" width="200" />

3. Nastav přihlašovací údaje a číslo portu v několika variacích:
   - skenováním QR kódu
   - **1.** Sdílením přes chatovací aplikaci (Signal, WhatsApp, ..)
   - **2.** naskenováním vytištěného QR kódu
   - **3.** Vložením zkopírovaného odkazu
   - **4.** Přímým otevřením apliakce s nastavením údajů

Číslo portu musí souhlasit s nastavením v `SI-Droidu`.

<img src="/img/tutorials/connector/screen_init.jpg" alt="Upload settings not configured" width="200" />
<img src="/img/tutorials/connector/scan_qr_code.jpg" alt="Scan QR" width="200" />
<img src="/img/tutorials/connector/settings_configured.jpg" alt="Upload settings configured" width="200" />

4. Spusť nahrávání dat kliknutím na `spustit nahrávání`

<img src="/img/tutorials/connector/screen_configured.jpg" alt="Upload configured" width="200" />
<img src="/img/tutorials/connector/screen_upload_ok.jpg" alt="Upload OK" width="200" />
<img src="/img/tutorials/connector/screen_upload_countdown.jpg" alt="Upload countdown" width="200" />

## Řešení problémů

- **Smazání nahraných závodníků** - V případě duplicit či jiných problémů se zobrazením lze využít fci `Promazat OFeed`, která smaže všechny nahrané závodníky. Po opakovaném spuštění (nahrávání se po smazání zastaví) nahrávání závodníky zase doplní.

<img src="/img/tutorials/connector/clear_ofeed_confirm.jpg" alt="OFeed clear confirm" width="200" />
<img src="/img/tutorials/connector/clear_ofeed_cleared.jpg" alt="OFeed cleared" width="200" />
<img src="/img/tutorials/connector/clear_ofeed_start_upload.jpg" alt="Restart after clear" width="200" />

- **Nedostupná služba** - zkontroluj nastavení baterky u `SI-Droidu` aplikace, které může omezovat fungování výsledkové služby.

<img src="/img/tutorials/connector/screen_service_not_available.jpg" alt="Result service not available" width="200" />
<img src="/img/tutorials/connector/si_droid_battery.jpg" alt="Battery restrictions" width="200" />
