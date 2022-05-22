import ItemCount from "../ItemCount/ItemCount";
import ItemProduct from "../ItemProduct/ItemProduct";

const ItemCard = (props) =>{
    return(
        <div className="itemCard"
            style={{  
                backgroundImage: `url(./img/products/${props.menuImg}.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <ItemProduct menuName={props.menuName} menuData={props.menuData} menuPrice={props.menuPrice}/>
            <ItemCount menuStock={props.menuStock}/>
        </div>
    )
}

export default ItemCard