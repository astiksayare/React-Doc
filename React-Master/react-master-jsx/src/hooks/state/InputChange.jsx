import React from "react"

export const InputChange = () => {

    const [inputVal, setInputVal] = React.useState("");
    console.log('INputChange rendered')
    return (
        <section>
            <h1>Input: {inputVal}</h1>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
        </section>
    )
}