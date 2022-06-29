import { useParams } from 'react-router-dom';
import { getOrder } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore';

const ThankYou = () => {

    const { orderId } = useParams()
    const { order } = useFirestore(() => getOrder())
    
    console.log(order)
    
    return (
        <section className="thankYouContainer">
            {order.map(prod => {
                return(
                    <article key={prod.id}>
                        <span>{prod.id}</span><br/>
                        <span>{prod.buyer.name}</span><br/>
                        <span>{prod.items[prod.id]}</span><br/>
                    </article>
                )})
            }
        </section>
    )
}

export default ThankYou