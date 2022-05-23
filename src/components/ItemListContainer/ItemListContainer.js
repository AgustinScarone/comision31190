import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])
    return (
        <section className="sectionProducts">
            { products.map(product => <ItemCard key={product.id} {...product}/>)}
        </section>
    )
}

export default ItemListContainer