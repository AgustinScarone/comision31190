const products = [
    {
        id: "1",
        category: "Hamburguesas",
        img: "burga01.jpg",
        name: "HAMBURGUESA CLÁSICA",
        info: "Fantástica hamburguesa con un medallón de carne 100% vacuna de 210g, queso cheddar, tomate, cebolla caramelizada con techo de crocante y fresca lechuga entre panes de la casa.",
        price: 799,
        stock: 5
    },
    {
        id: "2",
        category: "Hamburguesas",
        img: "burga02.jpg",
        name: "HAMBURGUESA CON HUEVO",
        info: "Hamburguesa con un medallón de carne 100% vacuna de 180g, tomate, lechuga, salsa especial, coronado con un regio huevo frito entre panes de la casa.",
        price: 799,
        stock: 8
    },
    {
        id: "3",
        category: "Hamburguesas",
        img: "burga03.jpg",
        name: "CORONABURGER",
        info: "360g de carne en dos medallones de carne 100% vacuna bañados en tormenta de queso emmental entre panes de la casa. Se recomienda realizar ejercicios de cardio una vez consumida para evitar problemas coronarios.",
        price: 1150,
        stock: 15
    },
    {
        id: "4",
        category: "Hamburguesas",
        img: "burga04.jpg",
        name: "JIMMY KOMBO",
        info: "Hamburguesa clásica acompañada de crocantes papas fritas rústicas.",
        price: 899,
        stock: 7
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}