# YuGi-BOT-MD

Este repositorio contiene el código fuente del YuGi-BOT para WhatsApp. Sigue las instrucciones a continuación para instalar y configurar el bot.

## Requisitos previos

- Termux instalado en tu dispositivo Android.
- Conexión a Internet estable.

## Comandos de instalación

1. Configura el almacenamiento en Termux:
    ```sh
    termux-setup-storage
    ```

2. Actualiza e instala los paquetes necesarios:
    ```sh apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
    ```

3. Clona el repositorio de YuGi-BOT:
    ```sh
    git clone https://github.com/Eliasar54/YuGi-BOT-1.2.git && cd YuGi-BOT-MD && yarn && npm install
    ```
```sh
cd YuGi-BOT-1.2
```
```sh
unzip '*.zip
```
4. opcional:
    ```sh
    rm *.zip
    ```
    descarga los módulos:
    ```sh
    npm install
    ```
       inicia el bot:
    ```sh
    npm start
    ```
## Activar en caso de detenerse en Termux

Si después de instalar el bot y Termux se detiene (pantalla en blanco, pérdida de conexión a Internet, reinicio del dispositivo), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```sh
    cd YuGi-BOT-1.2
    ```

2. Inicia el bot nuevamente:
    ```sh
    npm start
    ```

## Obtener otro código QR en Termux

Para obtener un nuevo código QR, sigue estos pasos:

1. Detén el bot presionando `CTRL` + `Z` en tu teclado y luego presiona `Enter`.
2. Navega al directorio del bot y elimina la sesión anterior:
    ```sh
    cd
    cd YuGi-BOT-1.2
    rm -rf sessions
    ```

3. Inicia el bot nuevamente:
    ```sh
    npm start
    ```


