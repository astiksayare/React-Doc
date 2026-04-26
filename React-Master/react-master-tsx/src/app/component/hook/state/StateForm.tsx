
import React from "react";
import * as Component from '../../../component';


export const StateFrom  = () => {

    const [user, setUser] = React.useState<Component.Type.User>({
        username: '',
        firstName: '',
        middleName: '',
        lastName: '',
        mobile: '',
        address: ''
    });

    const handleSubmit = (e:React.SubmitEvent) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: '',
            firstName: '',
            middleName: '',
            lastName: '',
            mobile: '',
            address: ''
        });
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Enter the username..."
                        value={user.username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Enter the first name..."
                        value={user.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Enter the last name..."
                        value={user.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="middleName">Middle Name: </label>
                    <input 
                        type="text" 
                        name="middleName" 
                        placeholder="Enter the middle name..."
                        value={user.middleName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="mobile">Mobile Number: </label>
                    <input 
                        type="text" 
                        name="mobile" 
                        placeholder="Enter the mobile..."
                        value={user.mobile}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="address">Address: </label>
                    <input 
                        type="text" 
                        name="address" 
                        placeholder="Enter the address..."
                        value={user.address}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({...user, [e.target.name]: e.target.value})}
                    />
                </div>

                <button type="submit">Submit</button>

            </form>
        </section>
    )
}