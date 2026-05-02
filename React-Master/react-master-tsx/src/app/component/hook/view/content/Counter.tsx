
import * as Component from "@/app/component";
import type React from "react";

export const Counter: React.FC= () => {

    const {count, setCount} : Component.Type.CounterProps = Component.Hook.Context.counterValue();

    return (
        <section>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>INC</button>
            <button onClick={() => setCount(count - 1)}>DEC</button>
        </section>
    )
}