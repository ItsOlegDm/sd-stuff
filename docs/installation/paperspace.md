---
title: Запуск Paperspace
description: Бесплатный запуск webui на серверах Paperspace.
hide_table_of_contents: false
sidebar_position: 1
---
:::note

Для начала нужно зарегестрироваться на [paperspace.com](https://console.paperspace.com/signup)!

:::

## Создание проекта {#start}
На [paperspace.com](https://console.paperspace.com/) нажимаем кнопку `CREATE A PROJECT`

![img](/img/installation/paperspace/Rr35GZb0NR.png)

При желании меняем название проекта и нажимаем `CREATE`

![img](/img/installation/paperspace/ffpWKZwVyq.png)

На странице проекта снова нажимаем `CREATE`

В поле `Select a runtime` выбираем `Sart from Scratch`

![img](/img/installation/paperspace/89GQ0kfQwH.png)

Выбираем Free-GPU

![img](/img/installation/paperspace/7LS8iax5Yx.png)

:::note

Бесплатные машины могут закончится, в таком случае использовать paperspace бесплатно не получится пока они не освободятся.

![img](/img/installation/paperspace/PZBsMTQm3D.png)

:::

Ставим максимальное время работы после которого машина отключится

![img](/img/installation/paperspace/xkXXxxNbgK.png)

## Загрузка и запуск notebook {#load_notebook}

Качаем файл notebook`а по этой ссылке: [github.com/TheLastBen/PPS/blob/main/PPS-A1111.ipynb](https://github.com/TheLastBen/PPS/blob/main/PPS-A1111.ipynb)

![img](/img/installation/paperspace/xGOqJdnGZ5.png)

Загружаем этот файл на paperspace

![img](/img/installation/paperspace/skfYkfcI8G.gif)

### Настройки {#settings}

#### Model Download/Load
* `Path_to_MODEL` - Если вы загрузили модель(и) на пейперспейс, вставляйте сюда локальную ссылу на них (пкм по папке > Copy path)
* `MODEL_LINK` - Прямая ссылка на файл модели (например можно скопировать с huggingface) или ссылка на файл на Google диске. Например можно взять одну из моделей [отсюда](https://drive.google.com/drive/folders/1FC8ZM9_wQMjw-Stb14EPoeshuH7DwxrL?usp=share_link).
* `safetensors` - Если модель которую вы хотите скачать в формате `.safetensors` а не `.ckpt` - заменить значение `False` на `True`.

#### ControlNet
Тут можно выбрать модели для ControlNet (если вы будете его использовать, иначе просто не трогайте эту ячейку).

Варианты моделей описаны в самой ячейке под преременными.

![img](/img/installation/paperspace/ayG2RJESjM.png)

#### Start Stable-Diffusion

* `User`, `Password` -  Логин и пароль для входа в вебуи, опционально.
* `Ngrok_token` - Токен ngrok, улучшает стабильность подключения. Получить можно [тут](https://dashboard.ngrok.com/get-started/your-authtoken).

**Запускаем все ячейки по очереди (если не используете ControlNet, его ячейкую можно не запускать), и ждем появления ссылки на webui.**