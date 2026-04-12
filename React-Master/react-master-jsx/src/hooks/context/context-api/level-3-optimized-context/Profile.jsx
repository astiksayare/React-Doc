import * as Context from './index'; // Just single import

export const Profile = () => {
    const context = Context.useUserContext(); // Make the object to use anywhere in the component

    const handleClick = () => {
        context.setUser({
            username: '', 
            password: '', 
            firstName: '', 
            lastName: '',
            email: '', 
            mobile: '',
            address: ''
        });

        context.setIsUserRegister(false);
    }
    return (
        <section>
            <button onClick={handleClick} className='btn position-top'>Registration Page</button>
            <div className="flex-space-between">
                <h1>User Name: {context.user.username}</h1>
                <h1>Password: {context.user.password}</h1>
            </div>
            <hr />

            <div className="flex-space-between">
                <h1>First Name: {context.user.firstName}</h1>
                <h1>Last Name: {context.user.lastName}</h1>
            </div>

            <div className="flex-space-between">
                <h1>Email: {context.user.email}</h1>
                <h1>Mobile: {context.user.mobile}</h1>
            </div>
            <h1>Address: {context.user.address}</h1>
        </section>  
    )
}