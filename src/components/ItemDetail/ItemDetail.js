import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';

const ItemDetail = (props) =>{
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (count) => {
        console.log('agregue al carrito')
        console.log(count)
        setQuantity(count)
    }
    return(
        // <div className="itemDetail">
        //     <div className="itemImg">
        //         <img src={`../img/products/${props.menuImg}`} alt={props.menuName}/>
        //     </div>
        //     <div className="item">
        //         <h2>{props.menuName}</h2>
        //         <article>{props.menuInfo}</article>
        //         <div className="price">$ {props.menuPrice}</div>
        //         <ItemCount menuStock={props.menuStock}/>
        //     </div>
        // </div>
        <div className="itemDetail">
            <div className="itemImg">
                <img src={`../img/products/${props.menuImg}`} alt={props.menuName}/>
            </div>
            <div className="item">
                <h2>{props.menuName}</h2>
                <article>{props.menuInfo}</article>
                <div className="price">$ {props.menuPrice}</div>
                { quantity > 0  ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount menuStock={props.menuStock} onConfirm={handleOnAdd}/>}
            </div>
        </div>
    )
}

export default ItemDetail