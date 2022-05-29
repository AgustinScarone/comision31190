import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    return (
        <section className="sectionProducts">
            { products.map(product => <ItemList key={product.id} {...product}/>)}
        </section>
    )
}

export default ItemListContainer