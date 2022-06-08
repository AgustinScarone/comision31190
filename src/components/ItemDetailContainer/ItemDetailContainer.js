import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";
import { useParams } from 'react-router-dom';

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])
    
    return (
        <section className="itemDetailContainer">
            <ItemDetail {...product}/>
        </section>
    )
}

export default ItemDetailContainer