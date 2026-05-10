import React from "react";
import * as Store from '@/app/store';

export const Content = () => {
    
    const [state, dispatch] = React.useReducer(Store.counterReducer, Store.initialCounter);

    return (
        <section
        className="w-full flex flex-col justify-center items-center gap-4"
        >
            <h1>Count: {state.count}</h1>
            <button 
            className="bg-green-500 w-40 h-14 rounded-md cursor-pointer border-0 font-semibold"
            onClick={() => dispatch({type: 'INC'})}>Increment Count</button>
            <button 
            className="bg-red-400 w-40 h-14 rounded-md cursor-pointer border-0 font-semibold"
            onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </section>
    )
}