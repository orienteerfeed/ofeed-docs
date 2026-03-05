---
id: practical-tips
title: Vychytávky
sidebar_position: 6
---

Zde přidávám pár praktických rad, které se mi při pořádání osvědčily. Usnadňují práci a posouvají jednoduše závod o úroveň výš. No nezkuste to.

## Import tratí z Ocadu nebo PurplePenu

Kromě ručního zadání kódů kontrol můžete tratě nahrát z xml souboru, který vyexportujete z Ocadu nebo PurplePenu a následně otevřete v aplikaci. V [záložce TRATĚ](/si-droid-event/manual/navigation#okno-tratě) kliknete do pravého horního rohu na tři tečky a vyberete _Import tratí_. Pozor na názvy tratí s diakritikou, ta se zatím neimportuje správně a je nutné název ručně opravit.

<img src="/img/si-droid-manual/22_ocad_export_xml.png" alt="OCAD export" width="220" />
<img src="/img/si-droid-manual/22_purple_pen_export_xml.png" alt="Purple Pen export" width="220" />

## Vytvoření trati z vyčteného čipu

Další možností vytvoření nové tratě je použití vyčteného čipu. To se provede v [záložce VYČÍTÁNÍ](/si-droid-event/manual/navigation#okno-vy%C4%8D%C3%ADt%C3%A1n%C3%AD), kde si vybereme vyčtený čip, ze kterého chceme udělat novou trať, a v pravém horním rohu opět přes tři tečky vybereme možnost **Vytvořit trať z vyčteného čipu**. Trať můžeme před uložením ještě upravit – nejčastěji jméno (vytvoří se dle čísla čipu) a délka.

<img src="/img/si-droid-manual/23_vytvorit_trat_z_SI_menu.png" alt="Vytvořit trať menu" width="200" />
<img src="/img/si-droid-manual/24_vytvorit_trat_z_SI_vyber.png" alt="Vytvořit trať výběr" width="200" />
<img src="/img/si-droid-manual/25_vytvorit_trat_z_SI_editace.png" alt="Vytvořit trať editace" width="200" />

## Zobrazení online výsledků

Skvělou novinkou je možnost vysílat live výsledky přes vytvořený hotspot. Není potřeba internet, stačí zařízení, které umí vytvořit hotspot.

<img src="/img/si-droid-manual/26_hotspot.png" alt="Hotspot" width="220" />
<img src="/img/si-droid-manual/27_hotspot_detaily.png" alt="Detaily hotspotu" width="220" />

Poté můžete připojení nabídnout závodníkům, kteří můžou sledovat výsledky u sebe na telefonu. Praktické je výsledky zobrazovat třeba na **monitoru** noťasu či externím monitoru.

Zapnutí se provede v nastavení pod možností **Výsledková služba**, port výsledkové služby není obzvlášť důležitý. Adresa výsledků se zobrazí po vyskočení o úroveň výš v nastavení - např. http://192.168.0.183:9000/reports nebo http://100.95.11.78:8000/reports.

Po připojení k vytvořené síti zapnete internetový prohlížeč a zadáte adresu výsledků. Z menu si stačí vybrat jaké výsledky chcete zobrazovat (nejčastěji SimpleResults - obyčejné bez mezičasů). Když v adresovém řádku přidáme **?refresh=10** na konec url adresy, budou se výsledky **samy** každých 10 sekund obnovovat (hodnotu si můžeš libovolně upravit). Kompletní adresa pro zobrazení jako na obrázku je: http://100.95.11.78:8000/reports/SimpleResultsHtml?refresh=10.
<img src="/img/si-droid-manual/28_vysledkova_sluzba_off.png" alt="Služba vypnuta" width="220" />
<img src="/img/si-droid-manual/29_vysledkova_sluzba_on.png" alt="Služba zapnuta" width="220" />
<img src="/img/si-droid-manual/30_vysledky_menu.png" alt="Výsledky menu" width="220" />
<img src="/img/si-droid-manual/31_vysledky_jednoduche.png" alt="Výsledky v prohlížeči" width="220" />

## Změna vlastností trati v průběhu tréninku

Může se stát, že se během tréninku změní vlastnosti trati – kódy kontrol, bodové hodnocení a my máme už vyčtené nějaké závodníky. Pro tyto případy je tu checkbox **Provést pro všechny závodníky příslušné trati**, který je v dolní části okna _Vyber trať_. Nejčastěji jsem ho využil u skorelaufu. Umožňuje hromadnou změnu u všech závodníků na jedné trati.

Rozklikneme závodníka (dostaneme se do podrobností o závodníkovi) z kategorie, kde došlo ke změně. Přes tři tečky v pravém horním rohu vybereme **Změnit závodníkovi trať**. Následně vybereme trať, do které má patřit (může být již označená pokud je stejná) a zaškrtneme políčko. Po potvrzení se provede změna/přepočítání pro všechny závodníky dané trati.

<img src="/img/si-droid-manual/39_zmena_vlastnosti.png" alt="Hromadná změna tratě" width="220" />

## Sloupce kategorie a registračka v textovém souboru

Úplně nová funkcionalita, která opět zlepšuje práci se jmény závodníků. Podrobnější popis jsem doplnil do [kapitoly](/si-droid-event/manual/assign-name#z-vlastn%C3%ADho-souboru) včetně ukázky souboru. V souboru můžete rovnou specifikovat jakou trať závodník poběží, což je třeba u zimních lig skvělé pro oddělení mužů a žen na jedné trati. Nebo u zařazení závodníků do příslušných tratí u tréninku jen se startovací a cílovou krabičkou.

Registračka slouží pro lepší napojení vyexportovaných výsledků s Orisem. Mělo by tak dojít k automatickému vyplnění klubu, licence atd. V aplikaci se nezobrazuje.

## Automatické generování vlastního souboru

Naprostá novinka a skvělá věc pro usnadnění přípravých prací. Doteď bylo možné si automaticky vygenerovat textový soubor pouze pro závod ve švédském Eventoru. To jsem se rozhodl změnit. Postup je jednoduchý a zabere jen pár vteřin:

### 1. ID závodu

Stačí si v ORISU zjistit ID závodu (čtyřciferné číslo). Číslo je na hlavní stránce závodu v části Informace hned na prvním řádku - **ORIS ID**.

<img src="/img/si-droid-manual/40_oris_id.png" alt="ORIS ID" width="320" />

### 2. Otevření adresy v prohlížeči

V libovolném webovém prohlížeči zkopírujeme adresu, do které doplníme zjištěné id závodu z ORISU – za posledním lomítkem nahradíme **ORIS ID** čtyřciferným číslem závodu. Adresa je: http://www.joja.se/sidroid/cardsFile/cz/ORIS_ID

<img src="/img/si-droid-manual/41_generovani_adresa.png" alt="Generování URL" width="260" />

Po stisknutí entru dojde k automatickému spuštění stahování textového suboru, který byl vygenerovaný. Soubor se pojmenuje **CardFileCZ\_**&lt;ORIS ID>**.csv** – ke jménu je připojeno id závodu pro přehlednost. Poté stačí stažený soubor přenést do paměti zařízení a v nastavení aplikace soubor přiřadit.

Kompletně odpadá ruční příprava souboru a o to šlo. Stažení můžete udělat rovnou v pořádacím zařízení a odpadá tak i přenos souboru z PC.

Vygenerovaný soubor obsahuje všechny podporované sloupce (číslo čipu, jméno, klub, registračka a kategorie). Generování souboru doporučuji udělat až v poslední fázi těsně před pořádáním. Veškeré změny přihlášek - hlavně číslo čipu proto dělejte přímo v ORISU.

:::danger Pozor
Záznamy bez vyplněného čísla čipu v ORISU v textovém souboru sice budou, ale bez ručního doplnění čísla čipu se správně **nenačtou**.
:::

#### ORIS registrace

Případně jde na adrese https://oris.ceskyorientak.cz/Exporty najít export (po přihlášení) pro všechny registrované dle sekce [OB](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=1&regonly=true), [LOB](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=2&regonly=true), [MTBO](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=3) případně včetně neregistrovaných [OB](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=1), [LOB](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=2), [MTBO](https://oris.ceskyorientak.cz/Exporty?agenda=RegistraceSIDroid&sport=3).

:::tip
Automatickým generováním odpadá kontrola **správného kódování UTF–8** pro korektní zobrazení **českých znaků**. Kódování je nastaveno automaticky.
:::

## Online výsledky

Pomocí mobilní aplikace [OFeed SI-Droid Connector](https://github.com/orienteerfeed/ofeed-sidroid-connector) je možné výsledky v průběhu akce nahrávat na [OFeed](https://orienteerfeed.com/) či [OResults](https://oresults.eu/). Návod jak na to je [zde](https://docs.orienteerfeed.com/cs/tutorials/connect-si-droid-connector/).

### Startovní čas při startu na krabičku

Při nahrávání na [OResults](https://oresults.eu/) jde udělat radiokontrolu na startu s využitím [Bluebox Mobile](https://docs.oresults.eu/cs/byo/bluebox-mobile), což umožní na akci s volným startem (zimní liga, trénink) odeslat informaci s časem startu závodníka. Startovací krabička musí mít kód **29**, více info [zde](https://docs.oresults.eu/cs/tutorials/setup#runners--courses). Na webu je pak vidět, v kolik závodník odstartoval a jak dlouho je již na trati, což je šikovné.
