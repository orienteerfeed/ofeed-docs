---
sidebar_position: 4
---

# MeOS

<img src="/img/logos/meos.png" alt="MeOS logo" width="150" />

Je možné nahrávat startovky a výsledky pomocí `MeOS Online Protocolu XML 2.0 (MOP)`. Stačí jednoduše nastavit:

1. Vygeneruj heslo v kartě `Heslo akce`
2. V kartě `Nastavení aplikací` jdi do záložky `MeOS` a klikni na tlačítko `Generovat vazbu`
   ![Generate binding](/img/tutorials/meos/meos_client_generate_binding.png)
   ![Generated binding](/img/tutorials/meos/meos_client_generated_binding.png)

3. V **MeOSu** přejdi do záložky `Services` a vyber `Results Online`
   ![Services](/img/tutorials/meos/meos_services.png)

4. Nastav dle screenshotu (hodnoty ze záložky `MeOS` v kartě `Nastavení aplikací`)
   ![Service setup](/img/tutorials/meos/meos_service_setup.png)

   :::tip
   Nezapomeň zaškrtnout checkbox `Send all punches after card readout`, který pošle do `OFeedu` mezičasy a umožní jejich analýzu.
   :::

5. Ulož nastavení a službu spusť
   ![Service running](/img/tutorials/meos/meos_service_running.png)

:::tip
Pokud používáš MeOS Online Protocol a máš stabilní připojení k internetu, můžeš zkusit nastavit interval exportu na 0 (nechat prázdné). MeOS pak bude závod aktualizovat okamžitě, jakmile detekuje změnu dat.
:::
