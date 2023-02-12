---
title: Hypernetworks
description: Гипернетворки 
hide_table_of_contents: false
sidebar_position: 2
---
>Гипернетворк - это просто маленькая сеть, которая генерирует веса гораздо большей сети, например, веса глубокой сети ResNet, эффективно параметризуя веса каждого слоя сети ResNet.

Выражаясь простым языком это под-нейросеть которая тоже помогает генерировать то, чего основная модель не умеет. Обычно используется для обучения стилей и персонажей, работает немного лучше чем эмбеддинги.

Для использования эмбеддинга нужно поместить его по пути `stable-diffusion-webui\models\hypernetworks`

![gif](https://i.imgur.com/YjrFLMo.gif)

:::note

Если вы используете колаб, путь будет выглядеть так: `ваш гугл диск\sd\stable-diffusion-webui\models\hypernetworks`

:::


Потом подключить его в настройках по пути `Extra Networks > Add hypernetwork to prompt`

![gif](https://i.imgur.com/6P2eC0U.png)

:::tip

Можно добавить в быстрые настройки дописав в них `sd_hypernetwork`

:::

Теперь при генерации картинки к ней будет применен гипернетворк.

![gif](https://i.imgur.com/bp4TALK.gif)
