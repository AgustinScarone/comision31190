import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductsById('4').then(response => {
            setProduct(response)
        })
    }, [])
    return (
        <section className="itemDetailContainer">
            <ItemDetail menuImg={product.menuImg} menuName={product.menuName} menuPrice={product.menuPrice} menuInfo={product.menuInfo} menuStock={product.menuStock}  />
        </section>
    )
}

export default ItemDetailContainer