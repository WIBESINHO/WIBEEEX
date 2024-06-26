# YuGi-BOT-MD

Este repositorio contiene el código fuente del YuGi-BOT para WhatsApp. Sigue las instrucciones a continuación para instalar y configurar el bot.

<h1 align="center">
  <a href="https://https://github.com/Eliasar54/YuGi-BOT-1.2.git">
    <img src="https://raw.githubusercontent.com/eliasar 54/https://github.com/Eliasar54/YuGi-BOT-1.2.git/main/assets/logo.png" alt="YuGi-BOT" width="200">
  </a>
</h1>

<h1 align="center">
  <span style="color:#ff0000;animation:pulse 2s infinite">YuGi-BOT mejorado</span>
  <span style="color:#7b1fa2;animation:pulse 2s infinite">animación</span>
</h1>

<h2 align="center">YuGi-BOT el mejor bot</h2>

<style>
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

## Requisitos previos

- Termux instalado en tu dispositivo Android.
- Conexión a Internet estable.

## Comandos de instalación

1. Configura el almacenamiento en Termux:
    ```bash
    termux-setup-storage
    ```

2. Actualiza e instala los paquetes necesarios:
    ```bash
    apt update && apt upgrade && pkg update && pkg upgrade && pkg install bash && pkg install libwebp && pkg install git -y && pkg install nodejs -y && pkg install ffmpeg -y && pkg install wget && pkg install imagemagick -y && pkg install yarn
    ```

3. Clona el repositorio de YuGi-BOT:
    ```bash
    git clone https://github.com/Eliasar54/YuGi-BOT-1.2.git && cd YuGi-BOT-1.2 && yarn && npm install
   ```
4. desconprime los archivos
    ```bash
    unzip YuGi-BOT 1.3.zip
       ```
5. opcional pero recomendable:
    ```bash
    rm YuGi-BOT 1.3.zip
    ```
6. inicia el bot:
    ```bash
    npm start
    ```
## Activar en caso de detenerse en Termux

Si después de instalar el bot y Termux se detiene (pantalla en blanco, pérdida de conexión a Internet, reinicio del dispositivo), sigue estos pasos:

1. Abre Termux y navega al directorio del bot:
    ```bash
    cd YuGi-BOT-1.2
    ```

2. Inicia el bot nuevamente:
    ```bash
    npm start
    ```

## Obtener otro código QR en Termux

Para obtener un nuevo código QR, sigue estos pasos:

1. Detén el bot presionando `CTRL` + `Z` en tu teclado y luego presiona `Enter`.
2. Navega al directorio del bot y elimina la sesión anterior:
    ```bash
    cd ~
    cd YuGi-BOT-1.2
    rm -rf sessions
    ```

3. Inicia el bot nuevamente:
    ```sh
    npm start
    ```
