import React from "react";
import './login.css';
import type { UserDataProps } from "../types/type";

export const Login = () => {

    const [user, setUser] = React.useState<UserDataProps>({
        username: "",
        password: "",
        mobile: ""
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setUser(prev => ({
            ...prev, [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: "",
            password: "",
            mobile: ""
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form_main_container">
                <div className="form_container">
                    <input type="text" name="username" value={user.username} onChange={handleInput} placeholder="username"/>
                    <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password"/>
                    <input type="number" name="mobile" value={user.mobile} onChange={handleInput} placeholder="mobile number"/>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}