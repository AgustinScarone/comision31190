import ItemCount from "./ItemCount"

const ItemProducts = () =>{
    return(
        <div className="cardProduct"
            style={{  
                backgroundImage: "url(" + "./img/products/burga03.jpg" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <h2>CORONABURGER</h2>   
            <ItemCount />
            <button>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemProducts