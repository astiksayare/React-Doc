
import React from 'react';
import './state.css';

export const ReactFrom = () => {

    const [user, setUser] = React.useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: 0,
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: 0,
            password: ''
        });
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    console.log('Rendered: On every state change rendering happen...');
    return (
        <form onSubmit={handleSubmit}>
            <section className='flex'>
                <label htmlFor="username">User Name</label>
                <input 
                type="text" 
                name="username" 
                id="username" 
                value={user.username} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the username...'
                />
            </section>
            <section className='flex'>
                <label htmlFor="firstName">First Name</label>
                <input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value={user.firstName} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the first name...'
                />
            </section>
            <section className='flex'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value={user.lastName} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the last name...'
                />
            </section>
            <section className='flex'>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email" 
                id="email" 
                value={user.email} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the email...'
                />
            </section>
            <section className='flex'>
                <label htmlFor="mobile">Mobile</label>
                <input 
                type="number" 
                name="mobile" 
                id="mobile" 
                value={user.mobile} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the mobile number...'
                />
            </section>
            <section className='flex'>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                value={user.password} 
                onChange={(e) => handleChange(e)}
                placeholder='Enter the password...'
                />
            </section>
            <button type='submit' className='btn'>Submit</button>
        </form>
    )
}