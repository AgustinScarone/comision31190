import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartSummary from "./CartSummary"
import NotA404 from "../NotA404/NotA404"

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
    
    const totalPrice = cart.reduce((total, item) => {
        return total + item.menuPrice
    }, 0)

    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)
    
    return(
        <div className="cartContainer">
            <h2>MI CARRITO</h2>
            { totalQuantity > 0
                    ? <CartSummary totalPrice={totalPrice} totalQuantity={totalQuantity}/> 
                    : <NotA404 /> 
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
                                Precio unidad: ${prod.menuPrice}
                            </div>
                            <div>
                                <span className="subtotal">Subtotal: ${prod.menuPrice * prod.quantity}</span>
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