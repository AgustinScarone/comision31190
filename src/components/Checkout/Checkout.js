import { useState, useContext } from "react";
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { useNotification } from '../../notification/Notification';
import { useNavigate } from 'react-router-dom';
import { LinkCall, LinkWhatsApp, currencyFormat } from "../Assets/Variables";
import { useForm  } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

import CartContext from "../../context/CartContext";
import Loading from "../Assets/Loading";

const Checkout = () => {

    const [loading, setLoading] = useState(false);
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        paymentMethod: "",
        message: ""
    });

    const navigate = useNavigate();

    const { cart, getTotal, clearCart } = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { setNotification } = useNotification()

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer,
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
                <form onSubmit={handleSubmit(createOrder)}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="NOMBRE" 
                        value={buyer.name}
                        {...register("name", { required: "El campo NOMBRE es obligatorio" })}
                        onChange={(e) => setBuyer({...buyer, name: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="name"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="text" 
                        name="surname" 
                        placeholder="APELLIDO" 
                        value={buyer.surname}
                        {...register('surname', { required: "El campo APELLIDO es obligatorio" })}
                        onChange={(e) => setBuyer({...buyer, surname: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="surname"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="number" 
                        name="phone" 
                        placeholder="TELÉFONO" 
                        pattern="[0-9]+" 
                        value={buyer.phone}
                        {...register('phone', { required: "El campo TELÉFONO es obligatorio" })}
                        onChange={(e) => setBuyer({...buyer, phone: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="email" 
                        name="email" 
                        placeholder="EMAIL" 
                        value={buyer.email}
                        {...register('email', { required: "El campo EMAIL es obligatorio" })}
                        onChange={(e) => setBuyer({...buyer, email: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <input 
                        type="text" 
                        name="address" 
                        placeholder="DIRECCIÓN" 
                        value={buyer.address}
                        {...register('address', { required: "El campo DIRECCIÓN es obligatorio" })}
                        onChange={(e) => setBuyer({...buyer, address: e.target.value})}
                    />
                    <ErrorMessage
                        errors={errors}
                        name="address"
                        render={({ message }) => <p>{message}</p>}
                    />

                    <select 
                        name="paymentMethod" 
                        value={buyer.paymentMethod}
                        {...register('paymentMethod')}
                        onChange={(e) => setBuyer({...buyer, paymentMethod: e.target.value})}>
                        <option value="">ELEGÍ MEDIO DE PAGO</option>
                        <option value="efectivo">EFECTIVO</option>
                        <option value="mercadoPago">MERCADO PAGO</option>
                    </select>

                    <textarea 
                        type="text" 
                        name="message" 
                        rows="6" 
                        placeholder="COMENTARIOS" 
                        value={buyer.message}
                        {...register('message')}
                        onChange={(e) => setBuyer({...buyer, message: e.target.value})}
                    />

                    <input type="submit" value="FINALIZAR COMPRA" className="button"/>
                </form>
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