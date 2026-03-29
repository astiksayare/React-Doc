
import { useEffect, useState } from "react";

const SimpleRendering = ( ) => {

    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    /* 
    Render All the time, Whenever something change in the web page 

    useEffect(() => {
        console.log("Calling UseEffect...");
    });

    */ 

    
    /* 
    Render for the time, Whenever web page will load. 

    useEffect(() => {
        console.log("Calling UseEffect...");
    }, []);

    */

    // Render whenever the given dependencies value will change in the web page.
    useEffect(() => {
        console.log("Calling UseEffect...");
    }, [input])

 
    
    return (
        <div>
        <h1>Count: {count}</h1>
        <h1>Value: {input}</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={(e) => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default SimpleRendering;