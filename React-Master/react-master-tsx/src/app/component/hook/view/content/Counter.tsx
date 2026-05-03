
import React from 'react';

export const Counter = ({state, dispatch}: {state: {count: number}, dispatch: React.Dispatch<{type: string}>}) => {

    return (
        <section>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({type: 'INC'})}>INCREMENT</button>
            <button onClick={() => dispatch({type: 'DEC'})}>DECREMENT</button>
        </section>
    )
}