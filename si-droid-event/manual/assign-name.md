---
id: assign-name
title: Přiřazování jména a oddílu
sidebar_position: 3
---

Abychom měli ve výsledcích jména závodníků místo čísel čipů, musíme si nastavit, jak se jména k čipům přiřadí. Opět máme více možností a je jen na nás, kterou kombinaci si zvolíme.

### Ručně klávesnicí nebo z ORISu

Základní možnost je ručně po doběhu každého závodníka napsat na klávesnici, ale to rychle omrzí. Aplikace je napojena na databázi ORISu, takže s připojením k internetu se nemusíte o nic starat a rovnou máte jména u **registrovaných** závodníků. Zkušenost je taková, že dost lidí nemá v Orisu čipy správně. Tato možnost se skrývá pod volbou **Přiřadit údaje z internetu**.

### Z vlastního souboru

Další a dle mého nejvhodnější možností je vytvořit si vlastní textový soubor (přípona .txt), třeba v poznámkovém bloku, se seznamem závodníků a jejich čipy. Pozor! Při ukládání je třeba zvolit **kódování UTF-8**, aby byly zachovány **háčky a čárky**. Tohle dokáže i obyčejný poznámkový blok - _Uložit jako_ a přepnout kódování z **ANSI** na **UTF-8**. Pokud to neuděláš, tak to rychle poznáš po prvním vyčtení

<img src="/img/si-droid-manual/19_zavodnici_poznamkovy_blok_kodovani.png" alt="UTF-8 kódování" width="320" />

Tento soubor nahrajeme přes nastavení do aplikace a můžeme vyčítat. Po vybrání souboru vyskočí řádka s informací, kolik záznamů bylo nalezeno - dobrá kontrola správnosti souboru. Soubor musí mít pro každého závodníka **jeden** řádek, na kterém je **číslo čipu**, **jméno**, **klub**, **registračka** a **trať**. Pouze _první dvě_ hodnoty jsou _povinné_. Jako oddělovač použijte středník (nebo čárku).

Registračka není v aplikaci vidět a slouží pro lepší export výsledků pro nahrání do Orisu. V Orisu by se měly automaticky vyplnit všechny známé informace o závodníkovi. Trať specifikovaná jako poslední hodnota bude přiřazena bez ohledu na správnost ražení. Pokud trať specifikovaná v souboru ještě není vytvořena, bude v aplikaci vytvořena automaticky prázdná trať bez kontrol. Ukázkový soubor _mojizavodnici.txt_ s dvěma závodníky je na obrázku.

<img src="/img/si-droid-manual/20_priklad_soubor.png" alt="Příklad souboru" width="320" />

Velkou výhodou tohoto souboru je aktuálnost ovšem za cenu pracnějšího tvoření(ze začátku, pak stačí drobné úpravy). Chce to pár souborů vytvořit. Aplikace nepodporuje exportovatelné formáty z ORISu, proto je potřeba si s daty před nahráním pohrát.

:::tip
Šikovná věc je „magický alt“, tedy přepnutí na sloupcový místo řádkového režimu.
:::

Umí to většina textových editorů, já používám _Notepad++_. Snadno tak upravíte celý sloupec místo pracného řádek po řádku.

Pro nahrání vytvořeného souboru do zařízení používám výhradně Google Drive. Nahrávaný soubor je možné editovat přímo v zařízení – vhodné pro malé změny nebo přidání jednolivců. Osobně používám aplikace _Total Commander_, který funguje jako správce souborů a zároveň umožňuje jednoduchou editaci textových souborů.

### Údaje z čipu

Poslední možností je využít data v čipu, který má textové pole s nastavitelným jménem (nastavuje se v programu SPORTident Config+). Většina čipů má textové pole pojmenované od prodejce. Jméno musí být bez diakritiky, aby se zobrazovalo v aplikaci korektně.

<img src="/img/si-droid-manual/21_config_SI_cards.png" alt="Nastavení SI čipu" width="420" />

### Další možnosti

- Při zaškrtnutí možnosti **Použij jméno již vyčteného** se použije jméno, které jste ručně pro tento čip vyplnili při prvním vyčtení.
- Novou možností je přidávat za jméno znak **#** s pořadovým číslem při opakovaném vyčtení čipu. Při běhání okruhů je pak na první pohled jasné, v jakém pořadí daný závodník okruhy absolvoval, což může být zajímavá informace pro výsledky.
