---
sidebar_position: 5
---

# Připojení do OChecklistu
OChecklist oficiálně podporuje OFeed od zveřejnění verze 5.

## Jak propojit
1. Vytvoř si účet na https://orienteerfeed.com/signup

2. Založ nový závod a vygeneruj heslo

3. Nahraj data (manuálně nahraj iof xml nebo využij integrující službu v závislosti na používaném pořádacím programu)

4. Připoj zařízení s OChecklistem k internetu

5. Načti QR kód v `Nastavení` foťákem nebo přímo v aplikaci, obojí funguje
   - Kliknutím na tlačítko `Sdílet` můžeš snadno odeslat QR kód například startérům pomocí oblíbené komunikační aplikace (Messenger, WhatsApp, ..)

![Scan QR code](/img/tutorials/ochecklist/ochecklist_03_scan_qr_code_50proc.jpg)

   - Připojení je možné nastavit v aplikaci i ručně v `Nastavení` v sekci `Připojení k serveru` kliknutím na ikonu OFeedu

![Settings](/img/tutorials/ochecklist/ochecklist_01_settings_upd_50proc.jpg)

a vyplněním potřebných údajů. Nebo kliknutím na `Skenovat` a naskenováním QR kódu.

![OFeed settings](/img/tutorials/ochecklist/ochecklist_02_ofeed_settings_upd_50proc.jpg)

Na úvodní obrazovce aplikace (pokud máš smazaná všechna data) je možné rovnou spustit skenování QR kódu

![Home screen](/img/tutorials/ochecklist/ochecklist_04_init_screen_upd_50proc.jpg)

6. Načtené kategorie - ověř správný název závodu, datum a organizátora

![All categrie available](/img/tutorials/ochecklist/ochecklist_05_categories_available_50proc.jpg)

7. Vyber kategorie co chceš načíst - výběr je možný i pro celou skupinu kategorií pro konkrétní start, např. `Start 1`

![Selected categories](/img/tutorials/ochecklist/ochecklist_06_categories_selected_upd_50proc.jpg)

8. Výběr potvrď kliknutím na `Download`. Ikona fajfky ukazuje jestli byla data kategorie úspěšně načtena. Potvrď kliknutím na `Import`

![Data imported](/img/tutorials/ochecklist/ochecklist_07_data_imported_upd_50proc.jpg)

Zobrazí se počet závodníků, kteří byli načteni

![Import confirmation](/img/tutorials/ochecklist/ochecklist_08_import_confirmation_50proc.jpg)

9. Upravuj data závodníků (status, čip, poznámka) pomocí připojené SPORTident krabičky či manuálně

## Synchronizace změn
- Změny provedené na startu jsou automaticky nahrávány na server `OFeedu` v pravidelných intervalech (lze nastavit).
- Změny provedené na prezentaci, online apod jsou automaticky detekovány a staženy do OChecklistu

V případě připojení na `OFeed` máš k dispozici vždy všechna aktuální data.


:::info
Pokud dojde k chybě při nahrávání, tak se `OFeed` ikona zbarví červeně
:::

![Error status](/img/tutorials/ochecklist/ochecklist_09_ofeed_error_status_50proc.jpg)

Při správním fungování je ikona zelená

![OK status](/img/tutorials/ochecklist/ochecklist_10_ofeed_ok_status_50proc.jpg)

Můžeš si zobrazit log z nahrávání kliknutím na `OFeed` ikonu v pravém horním rohu

![OFeed log](/img/tutorials/ochecklist/ochecklist_12_ofeed_upload_log_50proc.jpg)

# Vizualizace změn
`OFeed` nabízí detailní report v administraci závodu (musíš být přihlášený), ve kterém je možné snadno filtrovat změny co tě zajímají.