import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncmock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProductsById('3').then(response => {
            setProduct(response)
        })
    }, [])
    return (
        <section className="sectionProducts">
            <ItemDetail menuImg={product.menuImg} menuName={product.menuName} menuPrice={product.menuPrice} menuInfo={product.menuInfo} menuStock={product.menuStock}  />
        </section>
    )
}

export default ItemDetailContainer