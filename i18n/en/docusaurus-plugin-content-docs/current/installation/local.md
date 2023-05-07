---
title: Installing WebUi on your PC
description: Installing and configuring WebUi on your pc.
hide_table_of_contents: false
sidebar_position: 2
---
Using Stable Diffusion on your hardware can be more convenient than colab.
Here is what you need to know before you install the SD on your computer:
1. SD is very demanding on video memory. Ideally 8gb+, the more the better. Technically, everything will work with 6gb, and 4gb, but generating with so little amount of VRAM will be followed by a lot of anal pain, so I don't recommend it. If you don't even have 4gb, forget about it, and go use colab.
2. Models can weigh quite a bit. Usually somewhere between 1gb and 8gb, and since you probably won't stop at one model, I suggest you prepare some disk space.
3. Everything will work fine only on Nvidia GPU, AMD GPU can also run SD, but it will work extremely shitty and I'll not explain how to do it (because I don't have an AMD GPU to show it).

## Installing the required programs {#start}

We only need to install two programs - Python and Git

Let's start with python. Go [here](https://www.python.org/downloads/release/python-3109/), scroll to `Files` and download the installer. You don't need to touch anything during the installation, the only thing you need to do is check the checkbox for ` Add Python xx.xx to PATH`.

![image](/img/installation/local/YWkGXhn.png)

The git is easy, too. Go [here](https://git-scm.com/downloads) and download the installer. Don't change anything during the installation, just agree with everything and click `next`.

:::note

It's recommended to restart your PC after installation.

:::


## WebUi installation {#install-webui}

Determine where we will store the SD folder and open a command line there. 
You can do this simply by typing `cmd` in the address bar.

![gif](/img/installation/local/se6U2uL.gif)

Run this command:
`git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git`

![gif](/img/installation/local/hmECibL.gif)

Since WebUi won't run without a model, download one and put it in the `stable-diffusion-webui\models\Stable-diffusion` folder.

![gif](/img/installation/local/Wvj5Kj3.gif)

Now, run `webui-user.bat` in the `stable-diffusion-webui` folder, and wait for everything to download (this can take quite a while, since some components weigh several gigabytes)

![gif](/img/installation/local/jhBcPzH.gif)

After installation the local address appears in the console.
To start webui next time, you will still need to run `webui-user.bat`

![gif](/img/installation/local/UgS5j2q.gif)

## Command-line arguments {#commandline_args}
Arguments that are used when starting WebUi and change some settings/functions.
There are two ways to use an argument:
1. Insert them after `COMMANDLINE_ARGS` in `webui-user.bat`

    ![image](/img/installation/local/owe9g2S.png) 

2. Open a command line in `stable-diffusion-webui` and type in `webui.bat {arguments}`

    ![image](/img/installation/local/B0yY31S.png)

### Recommended arguments {#recomended_args}
The arguments I use. You don't have to use them, but they're definitely not superfluous.

* `--xformers` - speeds up generation
* `--listen` - allows you to open WebUi from any other device in the same local network.

    <details>
    <summary>More about this</summary>
    <div>
    I used it this way: run webui on a PC, and use it on a laptop from another room.
    You can also use it on your phone, or any other device on the same local network as the machine that's running webui.

    In order to open webui on another device, you need to open a link like `http://{local ip of the server device}:{port}/` also, instead of the ip address you can use the computer name.
    You can find out your local ip by typing `ipconfig` at the command line.
    
    ![image](/img/installation/local/ZYt0H4l.png)

    In this example, the webui address would be `http://192.168.1.101:{port}/`.

    ![image](/img/installation/local/En2JWv5.jpeg)
            
    </div>
    </details>
    
* `--medvram` - useful if you don't have a lot of video memory. Slows down generation a bit, but uses less VRAM.


### Other useful arguments {#other_args}

* `--no-half-vae` - fixes black squares instead of pictures when you`re using NovelAi, Anything etc. VAE.
* `--share` - Creates a public link to WebUi which can be opened from anywhere in the world. Usually, this link is valid for 72 hours.
* `--port` - allows you to change the port. To set ports less than 1024 you need to run WebUi as an administrator.
* `--lowvram` - enhanced version of `--medvram`. Slows down generation much more, but consumes much less VRAM.
* `--gradio-auth Login:Password` - sets login and password for webui, handy if you use `--share`.
