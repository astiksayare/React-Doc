
import React from "react"
import './state.css';


export const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)} className='btn'>Increment</button>
                <button onClick={() => setCount(count - 1)} className='btn'>Decrement</button>
            </div>
        </>
    )
}