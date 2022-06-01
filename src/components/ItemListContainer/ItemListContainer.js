import ItemList from "../ItemList/ItemList";

import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    useEffect(() => {
        if(!categoryId){
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading){
        return <h2>loading...</h2>
    } 

    return (
        <section className="itemListContainer">
            <ItemList products={products} />
        </section>
    )
}

export default ItemListContainer