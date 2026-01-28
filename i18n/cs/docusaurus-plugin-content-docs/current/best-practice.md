---
id: best-practice
sidebar_position: 4
title: "Doporučená nastavení"
---

# Doporučená nastavení

Přehled doporučených nastavení a detailní vysvětlení parametrů jednotlivých aplikací.

## OFeed

<!-- ![OFeed](/img/svg/2025-04-11_orienteerfeed_192x192px_dark.svg) -->

Podrobný popis jednotlivých sekcí v nastavení závodu.

### Parametry závodu

- `Štafety` - vyber pokud pořádáš týmový závod (2 a více úseků)
- `Setinová přesnost`
- `Ranking` - vyber pro výpočet rankinkových bodů v průběhu závodu
- `Zveřejněno` - ovlivňuje zobrazení závodu v seznamu událostí na domovské stránce

### Heslo závodu

- `Generovat heslo` - heslo je nezbytné pro napojení dalších aplikací. Po vygenerování se zobrazí QR kód pro `O Checklist` propojení
- `Přegenerovat heslo` - lze použít v případě uniknutí hesla
- `Zneplatnit` - zruší aktuální heslo
- `Expirace hesla` - vygenerované heslo je platné 7 dní

### O Checklist propojení

Zobrazený QR kód lze jednoduše využít pro napojení `O Checklistu`. Naskenuj kód a potvrď otevření načteného odkazu.

### Viditelnost

Událost se nemusí zobrazovat v seznamu v [OFeed](https://orienteerfeed.com/)u ani v [MRB](https://api.orienteerfeed.com/mrb/). Ideální volba pro **testování** nebo **soukromé** akce. Je zachována **plná** funkčnost, ačkoliv událost není v seznamech vidět.

### Odkaz na událost

Lze využít pro propagaci závodu, např. na webovkách. Tlačítko `Sdílet` usnadňuje sdílení QR kódu se startéry, např. přes chatovací aplikace. Tlačítko `Tisk` generuje dokument, který lze vytisknout a předat startérům.

### Nebezpečná zóna

- `Smazat závodníky` - smaže pouze všechny závodníky - slouží pokud se objeví duplicity, kategorie zůstávají
- `Smazat všechna data závodu` - smaže závodníky, kategorie, štafety i heslo
- `Delete event` - odstraní kompletně celou událost

## MRB

Dle počtu a velikosti obrazovek je ideální upravit množství zobrazovaných sloupců a rychlost posouvání. Doporučujeme `Continues scroll`.

Jestli potřebuješ ušetřit místo, tak použij `Compact mode`. Některé prohlížeče maji problémy se zobrazením emotikonů, tak odklikni `Show Emoji in table` a problém se vyřeší.

Pro přehlednější zobrazení výsledků po doběhnutí prvních závodníků můžeš odkliknout `Show unfinished`.

## O Checklist

### App Settings

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

### Ostatní

:::tip
Zapni si `Soutěžní mód`, který deaktivuje nepotřebné položky v menu.
:::

## QuickEvent

### Postup nastavení

- ZObraz si Služby
- Otavři nastavení služby přes ikonu ozubeného kolečka
- Vyplň přihlašovací údaje
- Zapni zpracování změn jestli používáš O Checklist
- Zapni službu - ikonou `spustit`, <span class="red-qe-service-dot">červená</span> tečka se následně změní na <span class="green-qe-service-dot">zelenou</span>

### Rozšířené nastavení

- Zruš validaci IOF XML - pokud máš problémy s nahráním dat
- Manuální nahrání startovky výsledků tlačítky `Exportovat startovku`/`Exportovat výsledky`

### Jak služba funguje

- Po spuštění nahraje startovku
- Každé `xx` vteřiny nahraje výsledky
- Pracuje se změnami v databázi
  - editace závodnika
  - přidání závodníka
  - smazání závodníka
  - vyčtení závodníka

### Známá omezení

- Přímé změny v tabulce `Úseky/Etapy` **nejsou** aktuálně zpracovány
- Pokud xml export štafet naprochází validací -> odklikni checkbox `Provést IOF XML validaci`

## SI-Droid Connector

### Postup nastavení

- Zapni výsledkovou služby v SI-Droid Event
- Otevři `Nastavení` a:
  - vyplň číslo portu výsledkové služby
  - pro `OFeed` naskenuj QR kód s přihlašovacími údaji nebo vlož ručně
  - pro `OResults` vlož `api key`

### Odstranění duplicit

- Použij možnost `Promazat OFeed` v hlavním menu

### Využití baterie

Nastavení `Bez omezení` může vyřešit některé problémy, které se mohou objevit při běhu aplikace.
