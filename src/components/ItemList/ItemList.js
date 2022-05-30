import ItemCount from "../ItemCount/ItemCount";

const ItemList = (props) =>{
    return(
        <div className="itemList">
            <img src={props.menuImg} alt="+ Info" className="img"/>
            <h2>{props.menuName}</h2>
            <button>VER +</button>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemList