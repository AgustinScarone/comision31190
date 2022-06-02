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







