---
title: txt2img
description: Generating pictures from text description
hide_table_of_contents: false
sidebar_position: 2
---
This is the main function that we use. So, let's take a quick run through the interface of this tab:

![image](/img/usage/txt2img/UzLRybm.png)

## Prompts {#prompts}
Prompts for most anime models usually consist of tags from [danbooru](https://danbooru.donmai.us), so you should watch the tags here when writing prompts.

### Parentheses

>It's a way of telling the AI what you want to put emphasis on. Generally what comes first in the prompt is treated as more important but if you want more control you can use this syntax. For example if you want your image slightly influenced by Alphonse Mucha's art you can add: (by Alphonse Mucha:0.8) and if you want it more you can do (by Alphonse Mucha:1.5). Not using a number is the same as 1.21 more or less. Same applies to negatives

*Stolen from [@Antlers Anon's guide](https://antlers-anon.fanbox.cc/posts/5250143)*

![gif](/img/usage/txt2img/rkBTn3u.gif)

### Negative prompt {#negative_prompt}

A very important stuff, without which you will get a lot of artifacts, etc. Essentially a list of what you do NOT want to see in a image.

Usually, I just take this negative as a basis and, if needed, add to it what I do not like in the generation.

```
lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , broken fingers
```

Many people also like to use a very long "universal" negative prompt, but I don't recommend using it

## Generation settings {#main_settings}
The basic settings of `txt2img`. Located just under the Prompts.

### Sampling method
The method of processing the input noise on which depends the minimum number of iterations after which, the following steps don't make a visible improvement of the picture.

This is a very subjective thing, use the sampler you like more, but remember that some of them need more iterations to get a good result than others.

I usually use `DDIM` or `DPM++ SDE Karras`.

:::note

Visually, there may not be a noticeable difference between some of the samplers. In this case, the difference is in the number of steps needed.  The fewer steps are needed, the faster the generation is.

:::

<details>
<summary>Examples of each of the samplers</summary>
    <div>

![image](/img/usage/txt2img/dM98n2Z.jpeg)
![image](/img/usage/txt2img/L6ZVq3l.jpeg)

<details>
<summary>Information about generating examples</summary>
    
Prompt:

```
best quality, 1girl, small breasts, japanese armor, red hair, long hair, 
red eyes, fox ears, animal_ear_fluff, holding weapon, bow \(weapon\),holding bow \(weapon\),
```
Negative prompt: 

```
 lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, bad feet, futa, futanari, yaoi,huge_breasts, large_breasts , (demon horns:1.1), blood, ribs, rebs, realistic face, broken fingers, earrings, hair ornament, loli, bad hands, bad fingers, thick thighs, pubic hair
```
Settings:

```text
Steps: 70, CFG scale: 11, Size: 512x920, Model hash: 0873291ac5
Model: AbyssOrangeMix2_nsfw, Clip skip: 2, ENSD: 31337,
```

</details>

</div>
</details>

### Sampling steps

The number of steps/iterations during SD will process the picture. This can affect the detail, and directly affects the speed. Some samplers may need more iterations, but usually (at least for the two I mentioned earlier) the number of steps is kept around `20-30`.

![image](/img/usage/txt2img/ITpi1fJ.jpeg)

### Width/Heigh

Accordingly, the width and height of the generated image.
I don't recommend generating in higher resolutions, because it will break the composition and you will end up with a mess of broken limbs, etc.

![image](/img/usage/txt2img/u4UCAjv.jpeg)

### Batch count/Batch size

It's simple:
* `Batch size` - number of images generated ** at one time**.
* `Batch count` - number of pictures/batches generated **in turn**. So, after pressing the button, the generation process will be repeated a specified number of times.

### CFG Scale

Classifier Free Guidance Scale - how strongly the image should conform to prompt - lower values produce more creative results

Usually values in the range `7-15` are used.

Too high values only ruin the picture, I don't recommend using it.

![image](/img/usage/txt2img/IAtLwsl.jpeg)

### Seed

Have you ever played in Minecraft? Well, here the seed works exactly the same way as in Minecraft. Generation key using which you can get the same or similar picture. The only thing - the settings must also be identical.

### Restore faces

Useless when generating anime pictures. Helps to fix faces while generating in realistic styles.

### Tiling

Generates pictures that can be repeated infinitely, for example using them as textures. (thanks to [@Antlers_Anon](https://antlers-anon.fanbox.cc/posts/5250143) for the picture)

![gif](/img/usage/txt2img/ezxgarP.gif)

### Hires. fix

Very important for generating in good resolution without distorting the composition. 
Essentially upscales the picture using one of the methods presented, and then does img2img.
Let's run through the basic settings:

#### Upscaler {#hiresfix-upscaler}

The upscaler you will use to increase the resolution of the image before img2img. It is not crucial, but you can play around and choose the one that will give you the best results.

#### Upscale by/Resize width/height to {#hiresfix-upscalebywh}

There are two ways to specify the final resolution. Using `Upscale by` you just specify **how many times** to increase the picture, the default is `2`.
Using `Resize width to` and `Resize height to` you can specify the height and width you want the output to be, the default is off.

#### Hires steps {#hiresfix-steps}

The amount of steps when img2img in hires fix, when it is `0` it equals to the amount of steps in txt2img.

#### Denoising strength {#hiresfix-denoising}

Determines how little respect the algorithm should have for image's content. At `0`, nothing will change, and at `1` you'll get an unrelated image. With values below `1.0`, processing will take less steps than the Sampling Steps slider specifies.

I would recommend using a denoise between `0.5 and 0.6`.



