---
title: Запуск Colab [Устарело]
description: Бесплатный запуск webui на серверах Google Colab.
hide_table_of_contents: false
sidebar_position: 3
---

:::warning

**Колаб начал отключать процессы с WebUi, а в некоторых случаях и вовсе блокировать пользователям доступ к платформе.**

:::

---

> Google Colaboratory — это бесплатная интерактивная облачная среда для работы с кодом от Google. Сервис нужен, чтобы писать код в jupyter notebook. Он функционирует по принципу облака, что позволяет работать над одним проектом целой командой

В нашем же случае, это бесплатный GPU сервер для запуска WebUi, и соответственно генерации артов.

## Импорт папки с моделями {#import_models}
Для того, чтоб что-то генерировать, вам понадобится хотя-бы одна модель. Вы можете сами скачать файл с ней (.ckpt или .safetensors), и загрузить его на свой диск. Или же, можете создать у себя ярлык на мою папку, тем самым получив сразу несколько моделей без постери места на диске. Если вы не собираетесь использовать загруженные мной модели, переходите к следующему шагу. 

Переходим по  [этой ссылке](https://drive.google.com/drive/folders/1FC8ZM9_wQMjw-Stb14EPoeshuH7DwxrL?usp=share_link). 
Жмем на название папки, и добавляем ее ярлык на свой гугл диск.

![image](/img/installation/colab/YKQCnfR.png)

## Запуск Сolab`a {#run_colab}
Переходим на [страницу colab`a](https://colab.research.google.com/github/TheLastBen/fast-stable-diffusion/blob/main/fast_stable_diffusion_AUTOMATIC1111.ipynb)
Запускаем первую ячейку

![image](/img/installation/colab/XaZRc2P.png)

Cоглашаемся с тем что гугл не знает этот колаб, и подключаем свой гугл диск.

![image](/img/installation/colab/7y6slFu.png)

Запускаем обе следующие ячейки. Одна из них установит WebUi, а вторая - все, что нужно для его работы.

![image](/img/installation/colab/layd8Nv.png)

Теперь нам нужно показать колабу где лежат модели. Справа есть иконка папки, нажимаем на нее, идем по пути `gdrive > MyDrive` и копируем ссылку на ранее сделанный ярлык / папку куда вы загружали модель(и) 

![image](/img/installation/colab/cm00Osa.png)

Вставляем этот путь в поле `Path_to_MODEL` ячейки `Model Download/Load`, после чего запускаем ее

![image](/img/installation/colab/gxe8Kb3.png)

Запускаем последнюю ячейку, и ждем появления ссылки - перейдя по ней, вы откроите WebUi

![image](/img/installation/colab/BJBTBYe.png)

