import ItemCount from "../ItemCount/ItemCount";

const ItemList = (props) =>{
    return(
        <div className="itemList">
            <img src={props.menuImg} alt="+ Info" className="img"/>
            <div className="containerMenu">
                <h2>{props.menuName}</h2></div>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemList