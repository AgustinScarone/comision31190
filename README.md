# MOMO Burger

Este proyecto es un sitio web ecommerce para un restaurante donde se pueden ver/ acceder a las diferentes categorías y sus correspondientes productos con sus detalles

## Instalación Git Clone

Para realizar la clonacion del proyecto, ejecutar en la consola:

  git clone https://github.com/AgustinScarone/comision31190.git

Y ejecutar :
  npm install
  npm start


## Desarrollado con
- HTML5
- CSS
- JavaScript
- React

## Demostracion del sitio

![Alt Text](./public/img/Agustin-Scarone.gif)

## Dependencias NPM

    "@hookform/error-message": "^2.0.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.2.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.8.4",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-hook-form": "^7.32.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.1",
    "sass": "^1.51.0",
    "sweetalert": "^2.1.2",
    "swiper": "^8.2.4",
    "web-vitals": "^2.1.4"

#### Colección menu:

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

#### Colección banners:

Documento: id con números (1, 2, 3)

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| button | string | texto para botón |
| img | string | nombre imagen del producto con su extensión |
| link | string | url o ruta link |
| title | string | texto informativo |

#### Colección businessInfo:

Documento: id generado automático

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| address | string | dirección. calle y numeración |
| city | string | ciudad |
| label | string | nombre imagen del producto con su extensión |
| map phone
|    label1 | string | número teléfono formateado lindo |
|    phone1 | string | número de teléfono con característica |
| map shift
|    label1 | string | días de apertura |
|    shift1 | string | horariosde apertura. agregar < br/> para saltos de línea.

tanto para phone como para shift, en caso de haber más opciones, incrementar número (ej: label2, label3, etc.) |

#### Colección categories:

Documento: id con nombre de la categoría con - (guión medio) en vez de espacios

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| label | string | etiqueta para mostrar de la categoría |

#### Colección contact:

Colección creada automáticamente desde formulario en contacto

#### Colección mail:

Colección creada automáticamente desde app

#### Colección orders:

Colección creada automáticamente desde app

#### Colección social:

id con nombre de la red social identificatorio

| CAMPO | TIPO   | VALOR  |
|-------|--------|--------|
| img | string | etiqueta svg code |
| link | string | url a red social |

## Análisis de los Componentes

El componente NavBar contiene:
    - Componente Logo alojado en carpeta Assets. Redirecciona a la home de la app '/'
    
    - Botonera a "MENÚ", "LOCALES", "CONTACTO", "LLAMAR".
        MENÚ -> componente ItemListContainer -> muestra listado de productos.
        LOCALES -> componente Locations -> muestra la business info.
        CONTACTO -> componente Contact -> formulario simple de contacto
        LLAMAR -> link a llamado

        Los links del NavBar se encuentran en componente Variables dentro de Assets
    
    - componente CartWidget muestra carrito de compras

- ItemListContainer: Componente donde se muestran todos los productos y filtramos por categoria. Categoría sin productos redirecciona al menú.

- ItemList: Componente que nos permite traer todos los datos desde el componente Item a traves de un map.

- Item: Componente que se visualiza en cada card de producto donde aparecen los datos de cada producto. Ademas del Link para ir al detalle del mismo.

La ruta '/detalle/:productId' nos permite ir al detalle del producto seleccionado en ItemListContainer. Donde podemos encontrar el nombre, precio, imagen, descripcion y la opcion para agregarlo al carrito.

Una vez hecha compra cambia botón por "FINALIZAR COMPRA" y "SEGUIR COMPRANDO". FINALIZAR lleva a carrito. SEGUIR vuelve al menú.

En caso de no haber stock, se cambia botón de compra por "PRODUCTO SIN STOCK".

- ItemDetailContainer: Nos permite visualizar el componente ItemDetail luego de seleccionarlo en la pagina inicial. Ademas contiene un "loading" que muestra cuando la pagina esta cargando. 

- ItemDetail: Componente encargado de mostrar los detalles del producto en pantalla, tiene incorporado el componente de ItemCount y una notificacion al agregar nuevo producto al carrito.

- ItemCount: Componente que contiene las funciones de ambos botones sumar o restar producto. Ademas del boton de agregar al carrito dicha suma.

- La carpeta Mail contiene los templates de mails para envío de info de nuevos contactos, nuevas ventas y comunicar al cliente que su compra fue realizada con éxito compartiendo nro de orden y detalle compra. 
Los envíos se realizan mediante la extensión de firebase "Trigger Email".

Dentro de la carpeta context encontramos un archivo llamado CartContext el cual tiene la logica de varias funciones que se utilizan en diversos componentes.

Dentro de la carpeta hooks encontramos el archivo useFirestore el cual contiene lógica de estados y efectos (useState - useEffect)

Dentro de la carpeta services/firebase encontramos el archivo firebase que contiene las funciones para la comunicación con la base de datos.

(https://github.com/AgustinScarone)
comision 31190