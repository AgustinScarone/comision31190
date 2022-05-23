import ItemCount from "./ItemCount/ItemCount";
import ItemProduct from "./ItemProduct/ItemProduct";

const ItemCard = (props) =>{
    return(
        <div className="itemCard">
            <img src={props.menuImg} alt="+ Info" className="img"/>
            <ItemProduct menuName={props.menuName} menuInfo={props.menuInfo} menuPrice={"$ " + new Intl.NumberFormat().format(props.menuPrice)}/>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemCard