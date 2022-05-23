import ItemCount from "./ItemCount/ItemCount";
import ItemProduct from "./ItemProduct/ItemProduct";

const ItemCard = (props) =>{
    return(
        <div className="itemCard"
            style={{  
                backgroundImage: `url(${props.menuImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <ItemProduct menuName={props.menuName} menuInfo={props.menuInfo} menuPrice={props.menuPrice}/>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemCard