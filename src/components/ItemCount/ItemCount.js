import {useState} from 'react';

const ItemCount = (props) =>{
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
        <div className="containerCounter">
            <div className='countCartButtons'>
                <button onClick={decrement}>-</button> 
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>
            <button>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount