---
title: Running Colab
description: Using WebUi on Google Colab servers for free.
hide_table_of_contents: false
sidebar_position: 1
---
> Google Colaboratory is Google's free interactive cloud-based code environment. You need the service to write code in a jupyter notebook. It functions on the principle of the cloud, which allows a whole team to work on one project 

In our case, its a free GPU server to run WebUi, and generate images.

## Import models {#import_models}
To generate pictures, you need at least one model. You can find it yourself (.ckpt or .safetensors), and upload it to your Gdrive. Or, you can create a shortcut to my folder and get several models at once without wasting disk space. If you`re not going to use my folder, skip to the next step.

Open [this link](https://drive.google.com/drive/folders/1FC8ZM9_wQMjw-Stb14EPoeshuH7DwxrL?usp=share_link) and create a shortcut to this folder on your google drive.

![image](https://i.imgur.com/8I7DxH7.png)

## Launching the colab {#run_colab}

Go to the [colab page](https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb) and start the first cell

![image](https://i.imgur.com/XaZRc2P.png)

Accept the fact that google doesn't know this notebook, and mount your google drive.

![image](https://i.imgur.com/7y6slFu.png)

Start both of the following cells. The first of these will install WebUi, and the second will install everything that is required for it to work.

![image](https://i.imgur.com/layd8Nv.png)

Now we need to show WebUi where the models are located. In the panel on the right side is a folder icon, click on it, go to `gdrive > MyDrive` and copy the path to the previously made shortcut / folder where you duploaded the model(s)

![image](https://i.imgur.com/cm00Osa.png)

Insert this path in the `Path_to_MODEL` field of the `Model Download/Load` cell, then run it

![image](https://i.imgur.com/gxe8Kb3.png)

Start the last cell and wait for the link to your WebUi

![image](https://i.imgur.com/BJBTBYe.png)

