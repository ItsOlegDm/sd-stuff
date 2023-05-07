---
title: Running Paperspace
description: Using WebUi Paperspace servers for free.
hide_table_of_contents: false
sidebar_position: 1
---
:::note

First you need an account on the [paperspace.com](https://console.paperspace.com/signup)!

:::

## Project {#start}
On [paperspace.com](https://console.paperspace.com/) press `CREATE A PROJECT` button.

![img](/img/installation/paperspace/Rr35GZb0NR.png)

If you want, change the name of the project and click `CREATE`.

![img](/img/installation/paperspace/ffpWKZwVyq.png)

On the project page, click `CREATE` again.

In `Select a runtime` select `Sart from Scratch`

![img](/img/installation/paperspace/89GQ0kfQwH.png)

Select Free-GPU

![img](/img/installation/paperspace/7LS8iax5Yx.png)

:::note

Free machines may run out, in which case you can't use the paperspace for free until they are available.

![img](/img/installation/paperspace/PZBsMTQm3D.png)

:::

Set the maximum running time after which the machine will turn off.

![img](/img/installation/paperspace/xkXXxxNbgK.png)

## Uploading and starting notebook {#load_notebook}

Download the notebook file using this link: [github.com/TheLastBen/PPS/blob/main/PPS-A1111.ipynb](https://github.com/TheLastBen/PPS/blob/main/PPS-A1111.ipynb)

![img](/img/installation/paperspace/xGOqJdnGZ5.png)

Upload this file to paperspace

![img](/img/installation/paperspace/skfYkfcI8G.gif)

### Settings {#settings}

#### Model Download/Load
* `Path_to_MODEL` - If you uploaded the model(s) to paperspace, paste a local link to it here (right click on folder > Copy path)
* `MODEL_LINK` - A direct link to the model file (for example, you can copy it from huggingface) or a link to the file on Google disk. For example, you can take one of the models [from here](https://drive.google.com/drive/folders/1FC8ZM9_wQMjw-Stb14EPoeshuH7DwxrL?usp=share_link).
* `safetensors` - If the model you want to download is in `.safetensors` format and not `.ckpt` - change the value from `False` to `True`..

#### ControlNet
Here you can select models for ControlNet (if you are going to use it, otherwise just leave this cell alone).

The model options are described in the cell itself, underneath the variables.

![img](/img/installation/paperspace/ayG2RJESjM.png)

#### Start Stable-Diffusion

* `User`, `Password` -  Login and password to login to webui, optional.
* `Ngrok_token` - The ngrok token, improves connection stability. You can find it [here](https://dashboard.ngrok.com/get-started/your-authtoken).

**Start all cells one by one (if you don't use ControlNet, you don't have to start its cell), and wait for the webui link to appear.**