## API de consulta de RUCs!

<b> Api creado en NodeJs! </b>

Esta Api tiene como objetivo la de realizar consultas de rucs y ver en que estado está ese contribuyente

<!-- INFORMATION -->

## :snowflake: ‎ <samp>Informaciones!</samp>

Detalles sobre mi configuración:

- **OS:** [Docker](https://www.docker.com/)
- **BD:** [MongoDB](https://www.mongodb.com/es)
- **Terminal:** [wezterm](https://github.com/wez/wezterm)
- **Shell:** [zsh](https://www.zsh.org/)

Api Modulos:

- **[GET /api/rucs] Consultar todos los RUCs**
  - Metodo para consultar todos los RUCS.
- **[GET /api/rucs/{{ruc}}] Consultar por RUC**
  - Metodo para consultar un ruc determinado.
- **[POST /api/rucs/{{ruc}}] Agregar nuevos RUCs**
  - Metodo para insertar con una maquetación Json a la BD si hay nuevos RUCS.
- **[PUT /api/rucs/{{ruc}}] Actualizar RUC**
  - Metodo para actualizar ya sea (RUC,RAZON SOCIAL, DV, ESTADO).
- **[DELETE /api/rucs/rucs/{{ruc}}] Eliminar Rucs si se ha cargado mal**
  - Metodo para eliminar por id de la BD

Funciones principales:

- **Insertar**
- **Consultar**
- **Actualizar**
- **Eliminar**

<br>

> Este repositorio tiene una wiki. Puede consultarlo haciendo clic en [here](https://github.com/fito422480/API-RUC/wiki).

<!-- SETUP -->

## :wrench: ‎ <samp>Setup</samp>

> Esto es paso a paso cómo instalar en su sistema. Sólo [R.T.F.M](https://en.wikipedia.org/wiki/RTFM).

<details>
<summary><b>1. Instale las dependencias necesarias y active los servicios</b></summary>
<br>

:warning: ‎ **Seguir estas instrucciones de instalación**

> En primer lugar, debes instalar [nodejs](https://nodejs.org/en).

```sh
npm i
```

> Instalar necesesarias dependencias

```sh
npm i mongodb mongodb-schema moongose express dotenv
```

> Por último, ahora puedes iniciar la app

```sh
npm run start
```
