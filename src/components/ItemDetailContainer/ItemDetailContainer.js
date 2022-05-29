import ItemCard from "../ItemCard/ItemCard";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";

const ItemListContainer = () => {
    const [product, setProducts] = useState([])

    useEffect(() => {
        getProductsById('1').then(response => {
            setProducts(response)
        })
    }, [])
    return (
        <section className="sectionProducts">
            <ItemCard menuName={props.menuName}/>
        </section>
    )
}

export default ItemListContainer