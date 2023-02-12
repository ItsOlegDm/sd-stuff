---
title: Good to know before starting.
description: Some recommended settings, etc.
hide_table_of_contents: false
sidebar_position: 1
---
Before you start generating, it would be good to know the following things:

## Models

Models, aka checkpoints. The file with the "memory" SD, depending on which completely changes the quality and appearance of the generation. 
Can have two extensions:
* `.ckpt` - hypothetically it is possible to put a virus in it, but so far no one has done this. You can download it, but it is better not to do it from questionable sites.
* `.safetensors` - loads faster, and even in theory you cant put a virus into it. You can use them without worry.

### Where to find Models

* [huggingface.co](https://huggingface.co/models)
* [civitai.com](https://civitai.com/)

## VAE

`Variation autoencoders`, or in plain language things that can fix some problems with your generation. For example, dull and unsightly colors. Stored in .pt files, they are located in the same folder as the models. For automatic loading vae with models, it must be named `{model file name}.vae.pt`. 

You can select VAE manually in the settings, `Stable Diffusion` tab ("SD VAE" item)

![image](https://i.imgur.com/caziQpD.png)

:::note

Not all models need VAE, some have it "baked" in. Also, some VAEs may not fit specific models and you'll get oversaturated colors, so I suggest adding VAEs to the quick settings (at the top, next to the model change), that way it's just more convenient to choose the right VAE.

<details>
<summary>How to add VAE to quick settings</summary>
<div>

Go to `Settings > User Interface > Quicksettings list`

Add `sd_vae` after the comma from `sd_model_checkpoint`, then press `Apply settings` and `Reload UI`

![image](https://i.imgur.com/Qv3ITJX.png)

Done.

![image](https://i.imgur.com/1NfTtqB.png)

</div>
</details>

:::

## CLIP Skip
A slider in the settings that controls how early the CLIP should stop processing the request.

**SHORTLY**.

All we need here is the fact that when using models like NovelAi, Anything, etc., it should be at `2` for best results. For other models, this setting is usually not important, so you can just set it to `2` and leave it alone.

Go to 

`Settings > Stable Diffusion`

Find `Clip skip` set it to 2, then press `Apply settings`.

![image](https://i.imgur.com/wZj8zXj.png)


***

:::danger

Don't kill me if I'm wrong about something in this guide. Please.

Just tell me about it...

:::