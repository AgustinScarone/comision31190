<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# MOMO Burger

Este proyecto es un sitio web ecommerce para un restaurante donde se pueden ver/ acceder a las diferentes categorías y sus correspondientes productos con sus detalles
. 
## Instalación Git Clone

Para realizar la clonacion del proyecto, ejecutar en la consola:

```bash
  git clone https://github.com/AgustinScarone/comision31190.git
```

Y ejecutar :

```bash
npm install
npm start
```


## Desarrollado con
- HTML5
- CSS
- JavaScript
- React

## Demostracion del sitio

![Alt Text](./public/img/Agustin-Scarone.gif)

## Dependencias NPM

    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1",
    "sass": "^1.51.0",
    "web-vitals": "^2.1.4"

#### Colección products:

Documento: id generado automático

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| id | string | id del producto |
| category | string | categoría a la que pertenece |
| menuName | string | nombre del producto |
| menuImg | string | nombre imagen del producto con su extensión |
| menuInfo | string | texto informativo del producto |
| menuPrice | number | precio del producto |
| menuStock | number | cantidad en stock |


## Análisis de los Componentes

La ruta inicial es '/' donde podemos encontrar la lista de todos los productos del sitio web. Cada producto tiene su imagen, precio y nombre.
 
- ItemListContainer: Componente donde se muestran todos los productos y filtramos por categoria.

- ItemList: Componente que nos permite traer todos los datos desde el componente Item a traves de un map.

- Item: Componente que se visualiza en cada card de producto donde aparecen los datos de cada producto. Ademas del Link para ir al detalle del mismo.


La ruta '/item/:productId' nos permite ir al detalle del producto seleccionado en ItemListContainer. Donde podemos encontrar el nombre, precio, imagen, descripcion y la opcion para agregarlo al carrito.

- ItemDetailContainer: Nos permite visualizar el componente ItemDetail luego de seleccionarlo en la pagina inicial. Ademas contiene un "loading" que muestra cuando la pagina esta cargando. 

- ItemDetail: Componente encargado de mostrar los detalles del producto en pantalla, tiene incorporado el componente de ItemCount y una notificacion al agregar nuevo producto al carrito.

- ItemCount: Componente que contiene las funciones de ambos botones sumar o restar producto. Ademas del boton de agregar al carrito dicha suma.


Dentro de la carpeta context encontramos un archivo llamado CartContext el cual tiene la logica de varias funciones que se utilizan en diversos componentes.


(https://github.com/AgustinScarone)
comision 31190







>>>>>>> firebase02
