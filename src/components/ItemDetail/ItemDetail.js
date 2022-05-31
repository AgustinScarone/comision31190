import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) =>{
    return(
        <div className="itemDetail">
            <div className="itemImg">
                <img src={props.menuImg} alt={props.menuName}/>
            </div>
            <div className="item">
                <h2>{props.menuName}</h2>
                <article>{props.menuInfo}</article>
                <div className="price">{"$ " + new Intl.NumberFormat().format(props.menuPrice)}</div>
                <ItemCount menuStock={props.menuStock}/>
            </div>
        </div>
    )
}

export default ItemDetail