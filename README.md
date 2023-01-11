# One_Bike

## Descripción

Este proyecto es una aplicación CRUD (crear, leer, actualizar y eliminar) para almacenar datos de bicicletas en una base de datos MongoDB utilizando Express como framework de servidor.

## Instalación

Para instalar las dependencias del proyecto, ejecute el siguiente comando en la raíz del proyecto:

```bash
yarn install
```

## Configuración

Para configurar el proyecto, debe crear un archivo .env en la raíz del proyecto y configurar las variables de entorno necesarias para conectarse a su base de datos MongoDB.

## Ejecución

Para ejecutar el proyecto en modo desarrollo, ejecute el siguiente comando:

```bash
yarn dev
```

Para ejecutar el proyecto en modo producción, ejecute el siguiente comando:

```bash
yarn start
```

Para ejecutar las pruebas automatizadas, ejecute el siguiente comando:

```bash
yarn test
```

## Contribuciones

Para contribuir a este proyecto, por favor envíe un pull request en el repositorio de GitHub: https://github.com/ErikPC/One_Bike

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulte el archivo LICENSE para obtener más información.

## Autor

Este proyecto es desarrollado por [ErikPC](https://github.com/ErikPC)

## Requisitos

Para ejecutar este proyecto, es necesario tener instalado:

- NodeJS
- MongoDB

## Características

- CRUD para bicicletas
- Conexión a base de datos MongoDB
- Utiliza el framework Express para el servidor
- Sistema de pruebas automatizadas con Jest
- Utiliza la librería mongoose para interactuar con la base de datos

## Uso

Una vez iniciado el servidor con el comando indicado anteriormente, se podrá interactuar con la aplicación utilizando peticiones HTTP a través de las rutas especificadas en el código del proyecto.

## Advertencia

Recuerde configurar la conexión a su base de datos y que esta se encuentre en ejecución antes de intentar correr el proyecto.

### Nota

Para poder realizar todas las operaciones CRUD, es recomendable realizarlo mediante alguna herramienta o utilidad como Postman.
