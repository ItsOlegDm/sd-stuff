---
title: Hypernetworks
description: Гипернетворки 
hide_table_of_contents: false
sidebar_position: 2
---
>Гипернетворк - это просто маленькая сеть, которая генерирует веса гораздо большей сети, например, веса глубокой сети ResNet, эффективно параметризуя веса каждого слоя сети ResNet.

Выражаясь простым языком это под-нейросеть которая тоже помогает генерировать то, чего основная модель не умеет. Обычно используется для обучения стилей и персонажей, работает немного лучше чем эмбеддинги.

Для использования эмбеддинга нужно поместить его по пути `stable-diffusion-webui\models\hypernetworks`

![gif](/img/additional/hypernetworks/YjrFLMo.gif)

:::note

Если вы используете колаб, путь будет выглядеть так: `ваш гугл диск\sd\stable-diffusion-webui\models\hypernetworks`

:::


Потом подключить его в настройках по пути `Extra Networks > Add hypernetwork to prompt`

![gif](/img/additional/hypernetworks/6P2eC0U.png)

:::tip

Можно добавить в быстрые настройки дописав в них `sd_hypernetwork`

:::

Теперь при генерации картинки к ней будет применен гипернетворк.

![gif](/img/additional/hypernetworks/bp4TALK.gif)
