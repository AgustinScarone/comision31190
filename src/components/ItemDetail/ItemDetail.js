import ItemCount from "../ItemCount/ItemCount";
import BuyDetail from "./BuyDetail";
import { useState, useContext } from "react";
import CartContext from '../../context/CartContext';
import { currencyFormat } from "../Assets/Variables";

const ItemDetail = ({id, menuImg, menuName, menuInfo, menuPrice, menuStock }) =>{
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProduct } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem({ id, menuName, menuPrice, quantity })
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
                    <span className="price moneyFont">{currencyFormat(menuPrice)}</span>
                </div>
                { menuStock > 0
                    ? <div className="containerItemButtons">{quantity > 0
                        ? <BuyDetail /> 
                        : <ItemCount menuStock={menuStock} onAdd={handleOnAdd} initial={getProduct(id)?.quantity}/>
                    }</div>
                    : <h1>PRODUCTO SIN STOCK</h1>
                }
            </div>
        </div>
    )
}

export default ItemDetail