
import * as Component from '@/app/component';
import React from 'react';

export const Main = () => {

    const [count, setCount] : [number, React.Dispatch<React.SetStateAction<number>>] = React.useState<number>(0);

    return (
        <Component.Hook.Context.CounterProvider value={{ count, setCount }} >
            <Component.Hook.View.Content.CounterContainer />
        </Component.Hook.Context.CounterProvider>
    )
}