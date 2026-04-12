
import React from "react"
import { UserContext } from "./UserRegistration"

export const Profile = () => {

    const {user, setUser, setIsRegister} = React.useContext(UserContext);

    const logout = () => {
        setUser({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: ''
        });
        setIsRegister(false);
    }

    return (
        <section>
            <button onClick={logout} className="position-top btn">Logout</button>
            <div className="flex-space-between">
                <h1>User Name: {user.username}</h1>
                <h1>Password: {user.password}</h1>
            </div>
            <hr />

            <div className="flex-space-between">
                <h1>First Name: {user.firstName}</h1>
                <h1>Last Name: {user.lastName}</h1>
            </div>

            <div className="flex-space-between">
                <h1>Email: {user.email}</h1>
                <h1>Mobile: {user.mobile}</h1>
            </div>
            <h1>Address: {user.address}</h1>
        </section>  
    )
}