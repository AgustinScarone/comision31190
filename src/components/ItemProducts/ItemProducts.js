import ItemCount from "../ItemCount/ItemCount"

const ItemProducts = (props) =>{
    return(
        <div className="cardProduct"
            style={{  
                backgroundImage: `url(./img/products/${props.id}.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <h2>{props.name}</h2>   
            <ItemCount stock={7}/>
            <button>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemProducts