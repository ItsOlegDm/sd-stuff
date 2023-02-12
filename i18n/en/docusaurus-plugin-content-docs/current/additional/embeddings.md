---
title: Embeddings
hide_table_of_contents: false
sidebar_position: 1
---
> Embedding is the use of text inversion, which is the process of creating a custom Stable Diffusion model. By providing your own images and text descriptions to them, the algorithm learns to create new images that match the text description and style of the images.

Now to be clear: Embedding is an additional mini-model (kinda) that allows the main model to generate what it doesn't know. Embeddings are usually trained on characters or styles.

To use embeddings, you must put them in the `stable-diffusion-webui\embeddings`
![gif](https://i.imgur.com/kMDTVrA.gif)

:::note

If you are using colab, the path will look like this: `your google drive\sd\stable-diffusion-webui\embeddings`

:::

After that, just mention the name of the file with the embedding in the Prompt.

![gif](https://i.imgur.com/xPMeCvn.gif)