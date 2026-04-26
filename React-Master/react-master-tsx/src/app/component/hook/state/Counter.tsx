import React from "react";

export const Counter = () => {
    const [counter, setCounter] = React.useState<number>(0);

    return (
        <>
            <h1>Count: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
            <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
        </>
    )
}