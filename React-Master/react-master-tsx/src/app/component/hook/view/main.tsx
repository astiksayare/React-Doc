
import * as Component from '@/app/component';
import React from 'react';

/*
// Counter with useState and Context API
export const Main = () => {

    const [count, setCount] : [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(0);

    return (
        <Component.Hook.Context.CounterProvider value={{ count, setCount }} >
            <Component.Hook.View.Content.CounterContainer />
        </Component.Hook.Context.CounterProvider>
    )
}

*/


// Counter with useReducer
export const Main = () => {

    const [state, dispatch] : [state: {count: number}, dispatch: React.Dispatch<{type: string}>] = React.useReducer(Component.Hook.Reducer.counterReducer, Component.Hook.Reducer.initialCount);
    return (
        <section>
            <Component.Hook.View.Content.Counter state={state} dispatch={dispatch}/>
        </section>
    )
}