---
sidebar_position: 4
---

# MeOS

<img src="/img/logos/meos.png" alt="MeOS logo" width="150" />

You can upload start lists and results using `MeOS Online Protocol XML 2.0 (MOP)`. Simply configure:

1. Generate a password in the `Event Password` card
2. In the `Configuration of apps` card, go to the `MeOS` tab and click the `Generate Binding` button
   ![Generate binding](/img/tutorials/meos/meos_client_generate_binding.png)
   ![Generated binding](/img/tutorials/meos/meos_client_generated_binding.png)

3. In **MeOS**, go to the `Services` tab and select `Results Online`
   ![Services](/img/tutorials/meos/meos_services.png)

4. Configure according to the screenshot (values from the `MeOS` section in the `Configuration of apps` card)
   ![Service setup](/img/tutorials/meos/meos_service_setup.png)

   :::tip
   Do not forget to tick the `Send all punches after card readout` checkbox, which enables split times visualization and analysis in `OFeed`.
   :::

5. Save the settings and start the service
   ![Service running](/img/tutorials/meos/meos_service_running.png)

   :::tip
   If you use MeOS Online Protocol and you have a stable internet connection, you can try to set the export interval to 0 (leave blank). MeOS will then update the competition as soon as a data change is detected.
   :::
