
import React from "react";

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

export const ClickEvent = () => {

    const [count, setCount] = React.useState(0);

    return (
        <>
        <button style={btnStyle} onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    )
}