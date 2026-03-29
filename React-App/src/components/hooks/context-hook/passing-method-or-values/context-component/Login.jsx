
import Profile from "./Profile";
import React from "react";
import { useContextData } from "../UserContext";

const Login = () => {

    const { setData } = useContextData();
    const [username, setUsername] = React.useState('');

    const handleInput = (e) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {
        setData(username);
        setUsername("");
    }

    return (
        <div style={{height: '10vh', width: '100%', textAlign: 'center', marginTop: '2rem'}}>
        <input 
        style={{padding: '.8rem'}}
        type="text"
        value={username}
        placeholder="Enter user name..."
        onChange={handleInput}
        />
        {' '}
        <button onClick={handleLogin}>Login</button>
        <Profile />
        </div>
    )
}

export default Login;