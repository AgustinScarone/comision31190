import { useContext } from "react";
import { Link } from "react-router-dom";

import CartContext from "../../context/CartContext";
import CartSummary from "./CartSummary";
import NotA404 from "../Assets/NotA404";
import { currencyFormat } from "../Assets/Variables";


const Cart = () => {

    const { cart, removeItem, getTotal } = useContext(CartContext)

    const totalQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return(
        <section className="cartContainer">
            { totalQuantity > 0
                ? 
                <div className="containerCartSummary">
                    <h2>MI CARRITO</h2>
                    <div className="containerCartButtons">
                        <Link to='/menu' className="button">
                            SEGUIR COMPRANDO
                        </Link>
                        <Link to='/checkout' className="button">
                            FINALIZAR PEDIDO
                        </Link> 
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
                            <div className='moneyFont'>
                                {currencyFormat(prod.menuPrice)}
                            </div>
                            <div>
                                <span className="subtotal ">
                                Subtotal: <span className='moneyFont'>{currencyFormat(prod.menuPrice * prod.quantity)}</span>
                                </span>
                            </div>
                            <button onClick={() => removeItem(prod.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
                            </button>
                        </div>
                    )})
                }
            </div>
        </section>
    )
}

export default Cart