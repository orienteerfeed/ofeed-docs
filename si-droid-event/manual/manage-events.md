---
id: manage-events
title: Správa více závodů
sidebar_position: 4
---

Aplikace umožňuje práci s více závody. To znamená hlavně uložení aktuálního (jeho jméno v levém horním rohu obrazovky) a vytvoření nového. Správa závodu se provádí v libovolném okně kliknutím na tři tečky. Dále vybereme **Spravovat závod** a jsme v hlavním menu, které nás bude zajímat.

<img src="/img/si-droid-manual/32_okno_vycitani.png" alt="Vstup do správy závodu" width="200" />
<img src="/img/si-droid-manual/33_spravovat_zavod.png" alt="Spravovat závod" width="200" />
<img src="/img/si-droid-manual/34_spravovat_zavod_podrobnosti.png" alt="Detaily závodu" width="200" />

## Uložení závodu

Možností _Uložit závod_ se nám uloží aktuálně otevřený závod. Je možné opakovávaně ukládat data z jednoho závodu **bez přepisování dat**. Každý provedený záznam se ukládá včetně času uložení, je tedy jednoduše rozlišitelný od ostatních se stejným jménem závodu.

## Vytvoření nového závodu

Vytvoření nového závodu je trošku komplikovanější. Nejdříve doporučuju uložit aktuální závod. Poté musíme vybrat v menu _Spravovat závod_ možnost _Odstranit všechna data_ a potvrdit tuto volbu. Tím si vyčistíme všechny záložky, které obsahovaly data původního závodu (nemusíme se bát, protože jsme si data před smazáním uložili). Jméno původního závodu zůstane. Proto musíme do nastavení, kde **změníme název závodu**, **datum** a případně **čas 00** dle potřeby nového závodu.

## Načíst závod

Touto možností otevřeme uložený závod. Pozor při vybírání závodu pro načtení. Seznam uložených závodů může obsahovat víc záznamů k jednomu závodu. Jednotlivé záznamy mohou obsahovat rozdílné množství vyčtených závodníků.

## Úplné vymazání závodu

Pokud chceme ze seznamu uložených závodů smazal některé záznamy (typicky jsme si závod několikrát zálohovali, vše proběhlo bez problémů a my chceme smazat všechny záznamy kromě toho posledního - nejaktuálnějšího) musíme tak provést mimo prostředí aplikace. Soubory se ukládání do složky _Android/data/se.joja.sidroid.event.full/files/backup_. Pomocí správce souborů najdeme tento adresář a v něm smažeme nepotřebné záznamy. Mažte s rozmyslem, operace je nevratná. Občas je vzhledem k přístupvým právům lepší provést na počítači se zařízením připojeném po kabelu (práce jak s externím diskem).
