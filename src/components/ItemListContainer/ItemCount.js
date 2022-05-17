import {useState} from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(1)

    const decrement = () =>{
        if(count >= 2)
        setCount(count - 1)
    }

    const increment = () =>{
        if(count < 5){
            setCount(count+1)
        }
    }

    return (
        <div className="contador">
            <button onClick={decrement}>-</button> 
            <div>{count}</div>
            <button onClick={increment}>+</button>
        </div>
        )
}

export default ItemCount