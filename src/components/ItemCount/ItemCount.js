import {useState} from 'react';

const ItemCount = ({menuStock}) =>{
    const [count, setCount] = useState(1)

    const decrement = () =>{
        if(count >= 2)
        setCount(count - 1)
    }

    const increment = () =>{
        if(count < `${menuStock}`){
            setCount(count+1)
        }
    }
    return(
        <div className="containerCounter">
            <div className='countCartButtons'>
                <button onClick={decrement} className='button'>-</button> 
                <div>{count}</div>
                <button onClick={increment} className='button'>+</button>
            </div>
            <button className='button'>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount