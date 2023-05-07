---
title: Hypernetworks
hide_table_of_contents: false
sidebar_position: 2
---
>A hypernetwork is simply a small network that generates the weights of a much larger network, such as the weights of a deep ResNet, effectively parameterizing the weights of each layer of the ResNet network.

Simply, it's a sub-neural network that also helps generate things the main model can't. Usually used for learning styles and characters, it works a little better than Embedding.

To use embedding, you must put it in the `stable-diffusion-webui\models\hypernetworks`

![gif](/img/additional/hypernetworks/YjrFLMo.gif)

:::note

If you are using colab, the path will look like this: `your google drive\sd\stable-diffusion-webui\models\hypernetworks`

:::


Then select it in the settings `Extra Networks > Add hypernetwork to prompt`

![gif](/img/additional/hypernetworks/6P2eC0U.png)

:::tip

You can add hypernetworks in the quick settings by adding `sd_hypernetwork`

:::

Now the hypernetwork will be applied to the image.

![gif](/img/additional/hypernetworks/bp4TALK.gif)
