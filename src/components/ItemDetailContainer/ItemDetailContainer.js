import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Assets/Loading";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'menu', productId)).then(response => {
            const product = { id: response.id, ...response.data()}
            setProduct(product)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if(loading) {
        return <Loading />
    }
    
    return (
        <section className="itemDetailContainer">
            <ItemDetail {...product}/>
        </section>
    )
}

export default ItemDetailContainer