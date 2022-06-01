import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) =>{
    return(
        <div className="itemDetail">
            <div className="itemImg">
                <img src={`../img/products/${props.menuImg}`} alt={props.menuName}/>
            </div>
            <div className="item">
                <h2>{props.menuName}</h2>
                <article>{props.menuInfo}</article>
                <div className="price">$ {props.menuPrice}</div>
                <ItemCount menuStock={props.menuStock}/>
            </div>
        </div>
    )
}

export default ItemDetail