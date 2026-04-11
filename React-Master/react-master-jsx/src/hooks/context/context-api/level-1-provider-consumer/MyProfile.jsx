
import { UserContext } from "./UserRegistration"

export const MyProfile = () => {

    return (
        <UserContext.Consumer>
            {
                (user) => {
                    return (
                        <section>
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
            }
        </UserContext.Consumer>
    )
}