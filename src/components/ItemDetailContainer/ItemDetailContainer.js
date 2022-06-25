import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Assets/Loading";
import NotA404 from "../Assets/NotA404";

import { useParams } from 'react-router-dom';
import { getProduct } from "../../services/firebase/firestore";
import { useFirestore } from '../../hooks/useFirestore';


const ItemDetailContainer = () => {

    const { productId } = useParams()
    const { isLoading, data, error } = useFirestore(() => getProduct(productId))
    

    if(isLoading) {
        return <Loading />
    }

    if(error) {
        return <NotA404 />
    }   
    
    return (
        <section className="itemDetailContainer">
            <ItemDetail {...data}/>
        </section>
    )
}

export default ItemDetailContainer