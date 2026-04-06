
import React from "react";

export const Render = () => {
    
    const [count, setCount] = React.useState(0);
    const [input, setInput] = React.useState("");


    // 1. This runs on every rendered
    React.useEffect(() => {
        console.log("Inside first useEffect...");
    });


    // 2. This runs only after the first rendered
    React.useEffect(() => {
        console.log("Inside second useEffect...");
    }, [])


    // 3. This runs only when the input changed
    React.useEffect(() => {
        console.log("Inside third useEffect...");
    }, [input]);

    console.log("Component Rendered...");
    return <section>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
        <br />
        <br />
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
    </section>;
}