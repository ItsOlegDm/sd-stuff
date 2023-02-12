---
title: img2img
description: Generating pictures based on other pictures
hide_table_of_contents: false
sidebar_position: 3
---
Allows you to use the image as an example for generation, regenerate an already generated image completely / in parts.

The interface is similar to txt2img, so I will only explain what is different.

![image](https://i.imgur.com/3kAm18L.png)

## img2img settings {#img2img-settings}

### Resize mode

A way to change the size/ratio of the picture if it doesn't match the settings.

### Denoising strength

Determines how little respect the algorithm should have for image's content. At `0`, nothing will change, and at `1` you'll get an unrelated image. With values below `1.0`, processing will take less steps than the Sampling Steps slider specifies.


It's simple:
1. Write Prompts.
2. Load a picture
3. Adapt the generation sizes to the original image
4. Adjust the denoising strength
5. Generate

## Inpaint 

Very important and useful tab. Allows you to regenerate only part of the image. 
So you can fix problems like broken arms or add missing details.

![gif](https://i.imgur.com/QhwAXWx.gif)

Again, I'll only describe what is different.

## Inpaint settings {#inpaint-settings}

There are not too many differences from img2img.

### Mask blur

How much the edges of the mask we're going to draw will be blurred. I usually use `7`, so you can't see the edges of the inpainted area.

### Mask mode

Toggles what you want to inpaint: what is masked or what is **not** masked.

### Masked content

What the SD will see on the masked area.= I suggest you look at the official example:

![image](https://i.imgur.com/M7cz0kc.png)

### Inpaint area

When generating, it uses only the masked area and specified in `Only masked padding, pixels` amount of pixels around it.
* speeds up generation
* doesn't change the original size of the picture even if other sizes are specified in the settings

:::caution

If you use `Inpaint area: Only masked`, not the whole picture is used, but only part of it, so you may have trouble writing a prompt.

:::