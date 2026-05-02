
import React from "react";
import * as Component from "@/app/component";

const CounterContext : React.Context<Component.Type.CounterProps> = React.createContext<Component.Type.CounterProps>({ count: 0, setCount: () => {} });

export const CounterProvider : React.Provider<Component.Type.CounterProps> = CounterContext.Provider;

export const counterValue = () : Component.Type.CounterProps => {
    return React.useContext(CounterContext);
}