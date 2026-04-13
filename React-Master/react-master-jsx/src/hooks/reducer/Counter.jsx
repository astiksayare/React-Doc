import React from "react"
import { counterReducer, initialState } from "./CounterReducer";

export const Counter = () => {

    const [state, dispatch] = React.useReducer(counterReducer, initialState);

    return (
        <section>
            <h1>Count: {state.count}</h1>
            <button className="btn" onClick={() => dispatch({type: "INC"})}>INCREMENT</button>
            <button className="btn" onClick={() => dispatch({type: "DESC"})}>DECREMENT</button>
            <button className="btn" onClick={() => dispatch({type: "RESET"})}>RESET</button>
        </section>
    )
}