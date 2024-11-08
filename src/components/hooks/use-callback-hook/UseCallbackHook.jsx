import React, { useCallback } from "react";
import Printer from "./Printer";

const UseCallbackHook = () => {

    const [num, setNum] = React.useState(0);
    const [dark, setDark ] = React.useState(false);

    const calculation = React.useCallback(() => {
        return [num*1, num*2, num*3];
    }, [num])

    const toggleHandle = () => {
        setDark(!dark);
    }

    return (
        <>
        <div className={`${dark ? 'bg-black text-white': ''} flex flex-col items-center mt-5`}>
            <input type="number" 
            className="border-2 p-2 "
            value={num}
            onChange={e => setNum(e.target.value)}
            />

            <Printer data={calculation}/>

            <button onClick={toggleHandle} className="bg-green-400 p-2 rounded-lg">Bg-Changer</button>
        </div>
        </>
    )
}

export default UseCallbackHook;