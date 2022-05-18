import {useState} from 'react'

const ItemProducts = (props) =>{
    const [count, setCount] = useState(1)

    const decrement = () =>{
        if(count >= 2)
        setCount(count - 1)
    }

    const increment = () =>{
        if(count < `${props.menuStock}`){
            setCount(count+1)
        }
    }
    return(
        <div className="cardProduct"
            style={{  
                backgroundImage: `url(./img/products/${props.menuImg}.jpg)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <div className="containerMenu">
                <img src="./img/angle-down-solid.svg" alt="+ Info" />
                <h2>{props.menuName}</h2>
                <article>{props.menuData}</article>
                <div className="precio">{props.menuPrice}</div>
            </div>
            <div className="container">
                <div className="contador">
                    <button onClick={decrement}>-</button> 
                    <div>{count}</div>
                    <button onClick={increment}>+</button>
                </div>
                <button>SUMAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemProducts