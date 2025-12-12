# JSON Server - Inkrostico IBK

Backend simple basado en `json-server` para almacenar los compromisos y registros del juego de Acróstico Interbank.

## Estructura de Datos

El servidor expone el endpoint `/registros` con la siguiente estructura:

- **id**: Identificador único.
- **representante**: Nombre del usuario.
- **equipo**: Nombre del equipo.
- **vp**: Vicepresidencia seleccionada.
- **fecha_ingreso**: Timestamp de creación.
- **compromisos**: Objeto JSON con las letras (I, N1, T...) y sus frases.

## Instalación Local

1. Clona este repositorio o descarga los archivos.
2. Abre la terminal en la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install