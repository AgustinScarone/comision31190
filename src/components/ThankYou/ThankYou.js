import { getOrder } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore';
import { useParams } from 'react-router-dom';
import { LinkCall, LinkWhatsApp, currencyFormat } from "../Assets/Variables";


const ThankYou = () => {

    const { orderId } = useParams()
    const { order } = useFirestore(() => getOrder(orderId))

    return (
        <section className="thankYouContainer" style ={ {backgroundImage: "url('./img/checkout.jpg')" } }>
            { !!order && order.id &&
            <div className="thankYouInfo">
                <h1>¡GRACIAS POR TU COMPRA {order.buyer.name.toUpperCase()}!</h1>
                <article>
                    TU NÚMERO DE ORDEN ES {order.id}                
                    <br/><br/>
                    EL TOTAL DE TU COMPRA FUE POR <span className="moneyFont">{currencyFormat(order.total)}</span>
                </article>
                {order.items.map(item => 
                    <div key={item.id} className="thankYouDetail">
                        <div>
                            <span className="titulo">{item.menuName}</span>
                        </div>
                        <div>
                            Precio: <span className='moneyFont'>{currencyFormat(item.menuPrice)}</span>
                        </div>
                        <div>
                            Cantidad: {item.quantity}
                        </div>
                        <div>
                            <span className="subtotal ">
                                Subtotal: <span className='moneyFont'>{currencyFormat(item.menuPrice * item.quantity)}</span>
                            </span>
                        </div>
                    </div>
                )}
                <article>
                    Por cualquier consulta comunicate con nosotros a través de {LinkWhatsApp} o también nos podés {LinkCall}
                </article>
            </div>
            }
        </section>
    )
}

export default ThankYou