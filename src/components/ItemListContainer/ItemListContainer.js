import ItemList from "../ItemList/ItemList";
import Loading from "../Assets/Loading";
import NotA404 from "../Assets/NotA404"

import { useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'menu'), where('category', '==', categoryId)) 
            : collection(db, 'menu')

        getDocs(collectionRef).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return <Loading />
    } 

    return (
        <section className="itemListContainer">
            <div className="linkCategorias">
                <NavLink to='/menu/' className={({isActive}) => isActive ? "activeLinks" : "links"}>VER TODO</NavLink>
                <NavLink to='/menu/hamburguesas' className={({isActive}) => isActive ? "activeLinks" : "links"}>HAMBURGUESAS</NavLink>
                <NavLink to='/menu/papas-fritas' className={({isActive}) => isActive ? "activeLinks" : "links"}>PAPAS FRITAS</NavLink>
                <NavLink to='/menu/bebidas-sin-alcohol' className={({isActive}) => isActive ? "activeLinks" : "links"}>BEBIDAS SIN ALCOHOL</NavLink>
                <NavLink to='/menu/cervezas' className={({isActive}) => isActive ? "activeLinks" : "links"}>CERVEZAS</NavLink>
            </div>
            {
                products.length > 0
                ? <ItemList products={products} />
                : <NotA404 />
            }
        </section>
    )
}

export default ItemListContainer