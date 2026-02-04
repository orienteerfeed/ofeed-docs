---
sidebar_position: 6
---

# Vizualizace změn

Reportovací tabulka s filty umožňuje prohlížení a sledování změn v realném čase. Jde využít jako zdroj pro ruční zapracování změn do pořádacího software.

Klikni na tlačítko `Report` pro zobrazení tabulky se změnami.
![Report open](/img/tutorials/client/report_open.png)

:::info Omezený přístup
Report se změnami je dostupný pouze přihlášenému uživateli, který je autorem akce.
:::

## Filtrování

Filtrovat data můžeš dle potřeby. Sloupec `Origin` popisuje místo původu dat. Můžeš taky využít **předdefinované** filtry, které je možné kombinovat:

- `Změny čipů`
- `Změny poznámek`
- `Opožděné starty`
- `Nestartující`

nebo jen prostě vepiš nebo vyber hledanou hodnotu v hlavičce sloupce. Data jsou **automaticky** obnovována každých **30s**.
![Report changes](/img/tutorials/client/report_changes.png)

## Změny u vybraného závodníka

Kliknutím na řádek v tabulce si můžeš zobrazit tabulku se všemi změnami u daného závodníka.
![Selected competitor changes](/img/tutorials/client/report_changes_single_competitor.png)

## Zpracované změny

Dále může využít **checkbox** v prvním sloupci pro označení již **zpracovaných** změn (v případě, že zpracováváš manuálně), které jsou následně <span class="green-qe-service-dot">zeleně</span> podbarvené. V případě potřeby lze i exportovat `CSV` nebo `PDF` s vyfiltrovanými změnami.
![Report processed changes](/img/tutorials/client/report_processed.png)
