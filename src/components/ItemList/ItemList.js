import ItemCount from "../ItemCount/ItemCount";

const ItemList = (props) =>{
    return(
        <div className="itemList">
            <div className="title">
                 <h2>{props.menuName} {/*- ${props.menuPrice}*/}</h2> 
            </div>
            <div className="price">
                 <p>Valor combo ${props.menuPrice}</p>
            </div>
            <div className="item">
                <img src={props.menuImg} alt={props.menuName}/>
                <button>VER DETALLE</button>
            </div>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemList