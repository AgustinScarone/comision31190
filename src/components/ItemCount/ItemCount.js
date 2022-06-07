import {useState} from 'react';

const ItemCount = ({menuStock, initial = 1, onAdd}) =>{
    const [quantity, setQuantity] = useState(initial)

    const decrement = () =>{
        if(quantity > 1)
        setQuantity(quantity - 1)
    }

    const increment = () =>{
        if(quantity < `${menuStock}`){
            setQuantity(quantity + 1)
        }
    }
    return(
        <div className="containerCounter">
            <div className='countCartButtons'>
                <button onClick={decrement} className='button'>-</button> 
                <div>{quantity}</div>
                <button onClick={increment} className='button'>+</button>
            </div>
            <button className='button' onClick={() => onAdd(quantity)}>SUMAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount