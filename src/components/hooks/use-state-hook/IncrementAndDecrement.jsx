
import React from "react";

const IncrementAndDecrement = () => {

    const [count, setCount] = React.useState(0);

    const incrementHandler = () => {

        if(count < 10) return setCount(count + 1);

        return count;
    }

    const decrementHandler = () => {

        if(count > 0) return setCount(count - 1);

        return count;
    }

    return (
        <>
        <h1>Count: {count}</h1>
        <button onClick={incrementHandler}> + </button>
        <button onClick={decrementHandler}> - </button>
        </>
    )
}

export default IncrementAndDecrement;