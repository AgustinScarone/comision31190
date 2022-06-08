import { useContext } from "react"
import CartContext from "../../context/CartContext"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)

    return(
        <div className="cartContainer">
            <h2>MI CARRITO</h2>
            <div className="cart">
                {cart.map(prod => {
                    return(
                        <div key={prod.id} className="cartDetail">
                            <div >
                                {prod.name}
                            </div>
                            <div>
                                Cantidad: {prod.quantity}
                            </div>
                            <div>
                                Precio x Uni: ${prod.price}
                            </div>
                            <div>
                                Subtotal: ${prod.price * prod.quantity}
                            </div>
                            <button onClick={() => removeItem(prod.id)}>
                                ELIMINAR
                            </button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default Cart