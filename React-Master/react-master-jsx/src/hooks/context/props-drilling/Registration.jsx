import React from "react"

import { LandingModule } from "./LandingModule";

export const Registration = () => {
    const [isNavigate, setIsNavigate] = React.useState(false);

    const [user, setUser] = React.useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsNavigate(true);
    }

    const handleInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    return (
        <section className="display_flex">
            {
                !isNavigate ? 
                <form onSubmit={handleSubmit}>
                <div className="flex-column">
                    <h1>User Registration</h1>
                    <div className="display_flex">
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" name="username" value={user.username} onChange={handleInput}/>
                    </div>

                    <div className="display_flex">
                        <label htmlFor="password">Password: </label>
                        <input type="text" id="password" name="password" value={user.password} onChange={handleInput}/>
                    </div>

                    <div className="display_flex">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInput}/>
                    </div>
                    <div className="display_flex">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleInput}/>
                    </div>
                    <div className="display_flex">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id="email" name="email" value={user.email} onChange={handleInput}/>
                    </div>
                    <div className="display_flex">
                        <label htmlFor="mobile">Mobile: </label>
                        <input type="number" id="mobile" name="mobile" value={user.mobile} onChange={handleInput}/>
                    </div>
                    <div className="display_flex">
                        <label htmlFor="address">Address: </label>
                        <input type="textarea" id="address" name="address" value={user.address} onChange={handleInput}/>
                    </div>
                    
                    <div className="display_flex">
                        <button type="submit" className="btn">Register</button>
                    </div>
                </div>
            </form>
            : 
            <LandingModule user={user}/>
            }
        </section>
    )
}