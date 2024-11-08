
import React from "react";

const UseMemoHook = () => {


    const [number, setNumber] = React.useState(0);
    const [darkMode, setDarkMode] = React.useState(false);
    const style = 'bg-black text-white'
    const count = React.useMemo(() => {
        return Calculation(number);
    }, [number])

    // const count = Calculation(number);
    
    const mode = darkMode? style: '';
    return (
        <>
        <div className={`${mode} flex flex-col justify-center items-center mt-5`}>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} className="border-2 p-2"/>
            <h1>{count}</h1>

            <button onClick={() => setDarkMode(!darkMode)} className={`bg-green-400 rounded-lg p-2`}>Toggle BG</button>
        </div>
        </>
    )
}

export default UseMemoHook;


const Calculation = (num) => {

    console.log('Calculation Method was called.');
    for(let i=0; i< 600000009; i++){}

    return num;
}