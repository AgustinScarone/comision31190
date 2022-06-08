import ItemList from "../ItemList/ItemList";

import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { NavLink, useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() => {

        setLoading(true)

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
            <div className="linkCategorias">
                <NavLink to='/' className={({isActive}) => isActive ? "activeLinks" : "links"}>VER TODO</NavLink>
                <NavLink to='/categoria/hamburguesas' className={({isActive}) => isActive ? "activeLinks" : "links"}>HAMBURGUESAS</NavLink>
                <NavLink to='/categoria/papas-fritas' className={({isActive}) => isActive ? "activeLinks" : "links"}>PAPAS FRITAS</NavLink>
                <NavLink to='/categoria/bebidas-sin-alcohol' className={({isActive}) => isActive ? "activeLinks" : "links"}>BEBIDAS SIN ALCOHOL</NavLink>
                <NavLink to='/categoria/cervezas' className={({isActive}) => isActive ? "activeLinks" : "links"}>CERVEZAS</NavLink>
            </div>
            {
                products.length > 0
                ? <ItemList products={products} />
                : <h2>NO HAY PRODUCTOS</h2>
            }
        </section>
    )
}

export default ItemListContainer