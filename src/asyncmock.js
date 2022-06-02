const menu = [
    {
        id: "1",
        category: "hamburguesas",
        menuImg: "burga01.jpg",
        menuName: "HAMBURGUESA CLÁSICA",
        menuInfo: "Fantástica hamburguesa con un medallón de carne 100% vacuna de 210g, queso cheddar, tomate, cebolla caramelizada con techo de crocante y fresca lechuga entre panes de la casa.",
        menuPrice: 799,
        menuStock: 5
    },
    {
        id: "2",
        category: "hamburguesas",
        menuImg: "burga02.jpg",
        menuName: "HAMBURGUESA CON HUEVO",
        menuInfo: "Hamburguesa con un medallón de carne 100% vacuna de 180g, tomate, lechuga, salsa especial, coronado con un regio huevo frito entre panes de la casa.",
        menuPrice: 799,
        menuStock: 8
    },
    {
        id: "3",
        category: "hamburguesas",
        menuImg: "burga03.jpg",
        menuName: "CORONABURGER",
        menuInfo: "360g de carne en dos medallones de carne 100% vacuna bañados en tormenta de queso emmental entre panes de la casa. Se recomienda realizar ejercicios de cardio una vez consumida para evitar problemas coronarios.",
        menuPrice: 1150,
        menuStock: 15
    },
    {
        id: "4",
        category: "hamburguesas",
        menuImg: "burga04.jpg",
        menuName: "JIMMY KOMBO",
        menuInfo: "Hamburguesa clásica acompañada de crocantes papas fritas rústicas.",
        menuPrice: 899,
        menuStock: 7
    },
    {
        id: "5",
        category: "papas-fritas",
        menuImg: "papabrava.jpg",
        menuName: "PAPAS BRAVAS",
        menuInfo: "Famosas papas bravas en cubos de manera rústica con fantástico picor.",
        menuPrice: 399,
        menuStock: 22
    },
    {
        id: "6",
        category: "papas-fritas",
        menuImg: "papafrita.jpg",
        menuName: "PAPAS FRITAS",
        menuInfo: "La minuta al minuto. Van con todo.",
        menuPrice: 299,
        menuStock: 13
    },
    {
        id: "7",
        category: "papas-fritas",
        menuImg: "papacono.jpg",
        menuName: "PAPITAS EN CONO",
        menuInfo: "Papas fritas en un cono transportable para disfrutar en la plaza, el auto o donde quieras.",
        menuPrice: 249,
        menuStock: 43
    },
    {
        id: "8",
        category: "bebidas-sin-alcohol",
        menuImg: "bebidalineacoca.jpg",
        menuName: "LÍNEA COCA COLA",
        menuInfo: "Coca Cola 500ml, Coca Cola Light 500ml, Sprite 500ml, Sprite Zero 500ml, Fanta 500ml, Fanta Zero 500ml, Schweppes Pomelo 500ml.",
        menuPrice: 229,
        menuStock: 33
    },
    {
        id: "9",
        category: "bebidas-sin-alcohol",
        menuImg: "bebidalineavillavicencio.jpg",
        menuName: "LÍNEA VILLAVICENCIO",
        menuInfo: "Agua mineral 500ml, Agua mineral con gas 500ml.",
        menuPrice: 199,
        menuStock: 11
    },
    {
        id: "10",
        category: "cervezas",
        menuImg: "bebidaheinekenporron.jpg",
        menuName: "PORRÓN HEINEKEN",
        menuInfo: "Porrón Heineken 330ml.",
        menuPrice: 349,
        menuStock: 78
    },
    {
        id: "11",
        category: "cervezas",
        menuImg: "bebidaimperialporron.jpg",
        menuName: "PORRÓN IMPERIAL",
        menuInfo: "Porrón Imperial 330ml.",
        menuPrice: 299,
        menuStock: 102
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menu)
        }, 50)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menu.find(prod => prod.id === id))
        }, 50)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(menu.filter(prod => prod.category === categoryId))
        }, 50)
    })
}