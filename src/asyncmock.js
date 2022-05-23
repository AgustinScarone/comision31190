const menu = [
    {
        id: "1",
        menuCategory: "Hamburguesas",
        menuImg: "./img/products/burga01.jpg",
        menuName: "HAMBURGUESA CLÁSICA",
        menuInfo: "Fantástica hamburguesa con un medallón de carne 100% vacuna de 210g, queso cheddar, tomate, cebolla caramelizada con techo de crocante y fresca lechuga entre panes de la casa.",
        menuPrice: 799,
        menuStock: 5
    },
    {
        id: "2",
        menuCategory: "Hamburguesas",
        menuImg: "./img/products/burga02.jpg",
        menuName: "HAMBURGUESA CON HUEVO",
        menuInfo: "Hamburguesa con un medallón de carne 100% vacuna de 180g, tomate, lechuga, salsa especial, coronado con un regio huevo frito entre panes de la casa.",
        menuPrice: 799,
        menuStock: 8
    },
    {
        id: "3",
        menuCategory: "Hamburguesas",
        menuImg: "./img/products/burga03.jpg",
        menuName: "CORONABURGER",
        menuInfo: "360g de carne en dos medallones de carne 100% vacuna bañados en tormenta de queso emmental entre panes de la casa. Se recomienda realizar ejercicios de cardio una vez consumida para evitar problemas coronarios.",
        menuPrice: 999,
        menuStock: 15
    },
    {
        id: "4",
        menuCategory: "Hamburguesas",
        menuImg: "./img/products/burga04.jpg",
        menuName: "JIMMY KOMBO",
        menuInfo: "Hamburguesa clásica acompañada de crocantes papas fritas rústicas.",
        menuPrice: 899,
        menuStock: 7
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(menu)
        }, 2000)
    })
}