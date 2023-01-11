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

## Estructura del Proyecto

```
One_Bike/
├── node_modules/
├── public/
│   ├── images/
│   ├── styles/
│   └── index.html
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
├── test/
│   └── controllers.test.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── .env
```

- `node_modules/`: Contiene las dependencias del proyecto instaladas por Yarn.
- `public/`: Contiene los archivos estáticos, como imágenes y hojas de estilo, que se servirán al cliente.
- `src/`: Contiene el código fuente de la aplicación.
- `src/controllers`: Contiene los controladores que manejan las peticiones del cliente y se comunican con el modelo.
- `src/models`: Contiene los modelos de Mongoose para representar los datos en la base de datos.
- `src/routes`: Contiene las rutas de la aplicación y los puntos finales que manejan las peticiones HTTP.
- ` src/utils`: Contiene funciones o librerías que son útiles para el proyecto.
- `src/index.js`: Es el punto de entrada del proyecto, donde se configura el servidor y se establecen las rutas.
- `test/`: Contiene las pruebas automatizadas del proyecto.
- `package.json`: Contiene la información del proyecto y las dependencias necesarias para ejecutarlo.
- `package-lock.json`: Contiene información detallada sobre las versiones de las dependencias del proyecto.
- `README.md`: Contiene la documentación del proyecto, como las instrucciones de uso y configuración.
- `.gitignore`: Contiene los archivos y directorios que deben ser ignorados por Git.
- `.env`: Contiene las variables de entorno necesarias para la configuración del proyecto.

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
