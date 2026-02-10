---
id: best-practice
sidebar_position: 3
title: "Doporučená nastavení"
---

# Doporučená nastavení

Přehled doporučených nastavení a detailní vysvětlení parametrů jednotlivých aplikací.

## OFeed

<img src="/img/ico/2025-04-11_orienteerfeed_logo_48x48px_logo_favicon.png" alt="OFeed logo" width="150" />

Nejdůležitější **nastavení** podle sekcí:

- `Parametry akce`:
  - [x] Štafety – pokud organizuješ štafety/ družstva, zaškrtni tuto možnost
  - [x] Zveřejněno – akce se stane veřejnou a viditelnou v seznamu akcí
- `Heslo akce`
  - Klikni na `Generovat heslo` a zkopíruj jej podle použité [integrace](/category/integrations).
  - Heslo platí **7 dní**
- `Integrace`
  - Nastav připojení k aplikaci, kterou používáš
  - Pro `O Checklist` nebo `SI Droid Conenctor` sdílej QR kód nebo klikni na tlačítko s ikonou aplikace, abys snadno nastavil připojení na aktuálním zařízení
- `Odkaz na akci`
  - Sdílejte odkaz na akci s účastníky a diváky
  - Vytiskni a vyvěš QR kód na viditelném místě pro snadný přístup
- `Nebezpečná zóna`
  - Použij v případě, že potřebuješ znovu nahrát data nebo opravit neočekávaný stav (např. duplicity atd.)
- `Potřebuješ pomoc nebo máš dotazy?`
  - Podívejte se na [stránku podpory](/support)

### Dokumentace

Podrobnější informace [👉](/features/general-description)

## MyResultBoard (MRB)

<table class="two-col-table">
<tr>
<td>

<img src="/img/logos/mrb.png" alt="MRB logo" width="300" />

Dle počtu a velikosti obrazovek je ideální upravit množství zobrazovaných sloupců a rychlost posouvání. Doporučujeme `Continues scroll`.

Jestli potřebuješ ušetřit místo, tak použij `Compact mode`. Některé prohlížeče maji problémy se zobrazením emotikonů, tak odklikni `Show Emoji in table` a problém se vyřeší.

Pro přehlednější zobrazení výsledků po doběhnutí prvních závodníků můžeš odkliknout `Show unfinished`.

### Dokumentace

Podrobnější informace [👉](/features/visualize-data#2-mrb)

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

Doporučené `Nastavení` pro závod:

- `Úprava času`
  - pro intervalový start nejčastěji +3 min
- `Startovní interval`
  - 1 min
  - Automatické DNS
- `SPORTident` - zapni si zvuky
  - Automaticky označen OK
  - Signalizovat chybu při automatickém označení
- `Připojení k serveru`
  - Použij samozřejmě **OFeed**

### Dokumentace

Podrobnější informace [👉](/integrations/ochecklist)

</td>
<td>

![O Checklist Settings](/img/tutorials/client/best_practice_ochecklist.png)

</td>
</tr>
</table>

:::tip
Zapni si `Soutěžní mód`, který deaktivuje nepotřebné položky v menu.
:::

## QuickEvent

<img src="/img/logos/quickevent.png" alt="QuickEvent logo" width="150" />

<table class="two-col-table">
<tr>
<td>

### Doporučené nastavení

- `Interval pro exportování` většinou stačí v klidu **60s**
- Kliknutím na <span class="red-qe-service-dot">OFF</span> zapni zpracování změn z `O Checklistu`, pokud ho používáš -> změní se na <span class="green-qe-service-dot">ON</span>
- Zruš validaci IOF XML - pokud máš problémy s nahráním dat, tak může pomoct

### Dokumentace

Podrobnější informace [👉](/integrations/quickevent)

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

### Postup nastavení

- Zapni **výsledkovou služby** v mobilní aplikaci `SI-Droid Event`
- Otevři `Nastavení` a:
  - vyplň číslo **portu** výsledkové služby
  - pro `OFeed` naskenuj QR kód s přihlašovacími údaji nebo vlož ručně
  - pro `OResults` vlož `api key`

### Odstranění duplicit

- Použij možnost `Promazat OFeed` v hlavním menu

### Využití baterie

Nastavení `Bez omezení` může vyřešit některé problémy, které se mohou objevit při běhu aplikace.

### Dokumentace

Podrobnější informace [👉](/integrations/joja)

</td>
<td>

![Connector Settings](/img/tutorials/client/best_practice_connector.png)

</td>
</tr>
</table>
