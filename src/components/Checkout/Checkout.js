import { useState, useContext } from "react";
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNotification } from '../../notification/Notification';
import { useNavigate } from 'react-router-dom';
import { LinkCall, LinkWhatsApp, currencyFormat } from "../Assets/Variables";

import CartContext from "../../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import Loading from "../Assets/Loading";

const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const [data, setData] = useState("");

    const navigate = useNavigate()

    const { cart, getTotal, clearCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                phone: data.phone,
                address: data.adress,
                paymentMethod: data.paymentMethod,
                message: data.message
            },
            items: cart,
            total: getTotal()
        }
        console.log(objOrder)

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
                navigate('/thankyou')
            }).catch(error => {
                console.log(error)
                setNotification('error',`no tiene stock`)
            }).finally(() => {
                setLoading(false)
            })
    }
    
    if(loading) {
        return <Loading />
    }

    return(
        <section className="contact" style ={ {backgroundImage: "url('./img/checkout.jpg')" } }>
            <div className="formContainer">
                <h2>COMPLETÁ TUS DATOS PARA FINALIZAR LA COMPRA</h2>
                < CheckoutForm />
                <div className="cartCheckout">
                    <p>
                        RESUMEN DE TU COMPRA<br/><br/> 
                        TOTAL A PAGAR:
                    </p>
                    <h3 className='moneyFont'>
                        {currencyFormat(getTotal())}
                    </h3>
                    {cart.map(prod => {
                        return(
                            <div key={prod.id} className="cartCheckoutDetail">
                                <div>
                                    <span className="titulo">{prod.menuName}</span>
                                </div>
                                <div>
                                    Subtotal: <span className='moneyFont'>{currencyFormat(prod.menuPrice)}</span>
                                </div>
                                <div>
                                    Cantidad: {prod.quantity}
                                </div>
                                <div>
                                    <span className="subtotal ">
                                        Subtotal: <span className='moneyFont'>{currencyFormat(prod.menuPrice * prod.quantity)}</span>
                                    </span>
                                </div>
                            </div>
                        )})
                    }
                    <div>
                        <article>
                            Una vez realizada la compra vas a recibir un email con toda la información. <br/><br/>
                            Por cualquier consulta comunicate con nosotros a través de {LinkWhatsApp} o también nos podés {LinkCall}
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout