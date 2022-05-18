import {useState} from 'react'

const ItemProducts = (props) =>{
    const [count, setCount] = useState(1)

    const decrement = () =>{
        if(count >= 2)
        setCount(count - 1)
    }

    const increment = () =>{
        if(count < `${props.stock}`){
            setCount(count+1)
        }
    }
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
            <div className="contador">
                <button onClick={decrement}>-</button> 
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>
            <button>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemProducts