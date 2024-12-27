
import React from "react";
import { useData } from "./UserContext";

const Login = () => {

    const [input, setInput] = React.useState('');
    const appState = useData();
    console.log(appState);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        appState.setData([input]);
        setInput("");
    }
    return (
        <>
            <input type="text" 
            value={input}
            onChange={e => setInput(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login;