import { useState, useContext } from "react";
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Link } from "react-router-dom";
import { useNotification } from '../../notification/Notification'

import CartContext from "../../context/CartContext";
import CartSummary from "./CartSummary";
import NotA404 from "../Assets/NotA404";
import Loading from "../Assets/Loading";
import CurrencyFormat from 'react-currency-format';

const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { cart, removeItem, getTotal, clearCart, getProduct } = useContext(CartContext)

    const { setNotification } = useNotification()

    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: 'Agustin Scarone',
                email: 'agustin@email.com',
                phone: '123456789',
                address: 'direccion 12345',
                comment: 'comentario'
            },
            items: cart,
            total: getTotal()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(db)

        const outOfStock = []

        const collectionRef = collection(db, 'menu')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.menuStock >= prodQuantity) {
                        batch.update(doc.ref, { menuStock: dataDoc.menuStock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                clearCart()
                setNotification('success',`Compra concretada. El ID de tu compra es ${id}`)
            }).catch(error => {
                console.log(error)
                setNotification('error',` no tiene stock`)
            }).finally(() => {
                setLoading(false)
            })
    }
    
    if(loading) {
        return <Loading />
    }

    return(
        <div className="cartContainer">
            { totalQuantity > 0
                ? 
                <div className="containerCartSummary">
                    <h2>MI CARRITO</h2>
                    <div className="containerCartButtons">
                        <Link to='/menu' className="button">
                            SEGUIR COMPRANDO
                        </Link>
                        <button className="button" onClick={createOrder}>
                            FINALIZAR PEDIDO
                        </button> 
                    </div>
                    <CartSummary getTotal={getTotal()}  totalQuantity={totalQuantity}/>
                </div>
            :  <NotA404 />
            }
            <div className="cart">
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className="cartDetail">
                            <div>
                                <span className="titulo">{prod.menuName}</span>
                            </div>
                            <div>
                                Cantidad: {prod.quantity}
                            </div>
                            <div>
                                <CurrencyFormat value={prod.menuPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} className='moneyFont'/>
                            </div>
                            <div>
                                <span className="subtotal ">
                                    {'Subtotal: '}
                                    <CurrencyFormat value={prod.menuPrice * prod.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} className='moneyFont'/>
                                </span>
                            </div>
                            <button onClick={() => removeItem(prod.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
                            </button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart