---
id: navigation
title: Orientace v aplikaci
sidebar_position: 2
---

Prostředí aplikace je rozděleno do tří základních oken:

- TRATĚ
- VYČÍTÁNÍ
- VÝSLEDKY

Každé okno má svoje nastavení, kterými jde provést hromada šikovných věcí. Pokusím se jednotilivá okna postupně rozebrat a fungování přiblížit. Mezi okny je možné přepínat buď kliknutím na název okna nebo posunem prstu vlevo/vpravo.

<img src="/img/si-droid-manual/04_zakladni_okna.png" alt="Základní okna" width="300" />

## Okno TRATĚ

Nyní je možné kromě tratě s pevným pořadím kontrol uspořádat i závod s volným pořadím. Scorelauf je v aplikaci rozdělen na bodový a časový limit, speciálním případem bodového je freeorder.

Novou trať přidáte kliknutím na plusko. Vyplníte kódy kontrol, které oddělíte **mezerou**. Poté doplníte dle potřeby další parametry nové trati, hlavně název a délku. Políčko **Specifický čas startu trati** slouží k hromadnému startu celé trati. Nová trať jde vytvořit také importem tratí z **Ocadu** nebo **PurplePenu** případně použitím záznamů ve [vyčteném čipu](/si-droid-event/manual/practical-tips#vytvo%C5%99en%C3%AD-trati-z-vy%C4%8Dten%C3%A9ho-%C4%8Dipu).

<img src="/img/si-droid-manual/05_pridat_novou_trat.png" alt="Přidat trať" width="300" />

### Pevné pořadí kontrol

Klasický typ závod s pevně daným pořadím kontrol, který je součástí aplikace od začátku.

<img src="/img/si-droid-manual/06_pevne_poradi_kontrol.png" alt="Pevné pořadí" width="260" />

### Scorelauf (bodový limit)

Cílem závodníka je sesbírat předem stanovený minimální počet bodů. Pokud bodový limit nastavíme na maximální možný počet bodů, jde o **freeorder** - volné pořadí. Kódy se zapisují oddělené mezerou a za _dvojtečku_ nebo _pomlčku_ kódu kontroly se napíše **bodová hodnota**. Pokud za kód kontroly bodovou hodnotu nenapíšeme, je _automaticky_ za _1_ bod.

**Speciální funkci** má bodová hodnota **0**. Jde o povinnou kontrolu a v případě více takových kontrol za sebou o povinné postupy. Povinné postupy **musí** závodník absolvovat v zapsaném pořádí. Není tedy možné proběhnout postup obousměrně. Povinná kontrola i postup rozdělí kontroly jakoby na více skupin kontrol. Tyto skupiny musí závodník postupně proběhnout.

Po oražení kontroly s nulovou bodovou hodnotou už není možné sbírat kontroly z předchozí skupiny kontrol.

### Scorelauf (časový limit)

Funguje podobně jako bodový limit, ovšem závodníkům stanovíme časový limit (v minutách), který mají na sesbírání co největšího počtu kontrol. Políčko **Penalizace** určuje bodovou ztrátu za každou započatou minutu po uplynutí stanoveného limitu. Výpočet penalizace je **lineární** a jiná nastavení zatím neumožňuje.

<img src="/img/si-droid-manual/07_scorelauf_body.png" alt="Scorelauf body" width="260" />
<img src="/img/si-droid-manual/08_ukazka_freeorder_trat.png" alt="Freeorder trať" width="260" />
<img src="/img/si-droid-manual/09_ukazka_freeorder_popisky.png" alt="Freeorder popisy" width="260" />
<img src="/img/si-droid-manual/10_casovy_scorelauf.png" alt="Scorelauf čas" width="260" />

Nově je možné definovat **vlastní trať**, která se bude přiřazovat závodníkům, u kterých nebyla nalezena pasující trať a normálně by byly zařazeni do **Bez trati**.

## Okno VYČÍTÁNÍ

V tomto okně se zobrazují **všechny vyčtené čipy**. Nově vyčtený je oranžově zvýrazněn a objeví se vždy na prvním řádku. Vyčtenému závodníkovi můžeme po rozkliknutí přes tlačítko tužky v horním menu změnit jednotlivé atributy včetně ražení!!! Pro změnu ražení je potřeba kliknout na malou nenápadnou šipku a tím se ukáží všechna ražení závodníka. Pluskem jdou přidávat a košem mazat. Při editaci časů je nutné vyplnit všechna políčka - hodiny, minuty i vteřiny a to i v případě, že chceme celou hodinu. Nuly se automaticky nedoplní.

<img src="/img/si-droid-manual/11_uravit_zavodnika_tuzka.png" alt="Úprava závodníka" width="200" />
<img src="/img/si-droid-manual/12_upravit_zavodnika_menu.png" alt="Úprava závodníka menu" width="200" />
<img src="/img/si-droid-manual/13_upravit_zavodnika_razeni.png" alt="Úprava závodníka ražení" width="200" />

To se hodí třeba v případě, že si svěřenec při tréninku nevšiml krabičky na kontrole (krabičky nejsou na všech kontrolách). Celá situace jde samozřejmě vyřešit i změnou pole **Status** z _Chybné_ ražení na _OK_. Osobně mi přijde přidání kontroly a odhadnutí času oražení lepší.

Ikona plus zde slouží k přidání závodníka **bez čipu**. Stačí vyplnit jméno, doplnit čas startu, čas cíle a potvrdit. Poté závodníka rozkliknout, změnit mu trať a status ručně na OK. Jednoduché a praktické.

<img src="/img/si-droid-manual/14_rucni_pridani_ikona.png" alt="Rucní přidání ikona" width="200" />
<img src="/img/si-droid-manual/15_rucni_pridani_okno.png" alt="Ruční přidání" width="200" />

Trať se přiřadí automaticky podle nejlépe pasující. Po rozkliknutí závodníka je možné trať ručně změnit nebo zvolit nejlépe pasující trať. Šikovná možnost je **Provést pro všechny závodníky příslušné trati**. Jde tak hromadně změnit trať všem závodníkům v případě úpravy trati v záložce [TRATĚ](/si-droid-event/manual/navigation#okno-tratě).

<img src="/img/si-droid-manual/16_zmenit_trat_ikona.png" alt="Změna trati" width="200" />
<img src="/img/si-droid-manual/17_zmenit_trat_ikona_rozkliknuti.png" alt="Změna trati detail" width="200" />
<img src="/img/si-droid-manual/18_zmenit_trat_vybrat_trat.png" alt="Změna trati výběr" width="200" />

Nově je v horní části okna přidané vyhledávací okno, které umožňuje filtrovat seznam vyčtených závodníků pouze podle jména závodníka nebo čísla čipu. Stačí kliknout na ikonu lupy a objeví se vyhledávací okno. Číslo X v závorce – VYČÍTÁNÍ (X) – zobrazuje počet výsledků odpovídajících filtru.
<img src="/img/si-droid-manual/36_vyhledavani_ikona.png" alt="Vyhledávání ikona" width="200" />
<img src="/img/si-droid-manual/37_vyhledavani_jmeno.png" alt="Vyhledávání jméno" width="200" />
<img src="/img/si-droid-manual/38_vyhledavani_cislo_cipu.png" alt="Vyhledávání číslo čipu" width="200" />

## Okno VÝSLEDKY

Zde se zobrazují výsledky rozdělené do jednotlivých tratí. Kliknutím na oranžovou hlavičku trati se seznam závodníků příslušné trati sbalí/rozbalí.

Konečné výsledky je možné uložit jak v klasických formátech – jednoduché a s mezičasy, tak ve speciálních formátech. Tady doporučuju vyzkoušet. Zajímavou možností jsou **kombinované výsledky**, které jsou šikovné při sčítání časů na více tratích. Napadá mě použití při běhání okruhů a my chceme vědět, kdo měl v součtu nejlepší čas nebo udělat orientačně pořadí za celé soustředění.

Nově přibyla možnost **vytisknout celkové výsledky** na bluetooth tiskárně, která se musí nejdříve v nastatení spárovat, aby se ikona tisku (účtenky) zobrazila. Aktuálně je možné vytisknout pouze výsledky všech tratí. Občas je to **hooodně dlouhý** papírek, tak pozor.

{/_ TODO: Přidat foto _/}
