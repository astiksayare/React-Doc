
import React from "react"
const btnStyle = {
    padding: ".5rem",
    width: "100px",
    marginTop: '1rem',
    background: "#fff",
    color: "blue",
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '.5rem',
    border: '1px solid #000'

}


export const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)} style={btnStyle}>Increment</button>
                <button onClick={() => setCount(count - 1)} style={btnStyle}>Decrement</button>
            </div>
        </>
    )
}