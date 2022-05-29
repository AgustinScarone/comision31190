import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) =>{
    return(
        <div className="itemList">
            <img src={props.menuImg} alt="+ Info" className="img"/>
            <div className="containerMenu">
                <img src="./img/angle-down-solid.svg" alt="+ Info" />
                <h2>{props.menuName}</h2>
                <article>{props.menuInfo}</article>
                <div className="price">{"$ " + new Intl.NumberFormat().format(props.menuPrice)}</div>
            </div>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemDetail