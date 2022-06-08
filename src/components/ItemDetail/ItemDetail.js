import ItemCount from "../ItemCount/ItemCount";
import BuyDetail from "../BuyDetail/BuyDetail";
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({id, menuImg, menuName, menuInfo, menuPrice, menuStock }) =>{
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        
        setQuantity(quantity)
        addItem({ id, menuName, menuPrice, quantity})
    }
    return(
        
        <div className="itemDetail">
            <div className="itemImg">
                <img src={`../img/products/${menuImg}`} alt={menuName}/>
            </div>
            <div className="item">
                <h2>{menuName}</h2>
                <article>{menuInfo}</article>
                <div className="priceContainer">
                    <div className="price">$ {menuPrice}</div>
                </div>
                { quantity > 0
                    ? <BuyDetail /> 
                    : <ItemCount menuStock={menuStock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>
                }
            </div>
        </div>
    )
}

export default ItemDetail