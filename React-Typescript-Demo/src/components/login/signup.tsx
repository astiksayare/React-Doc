import './signup.css';

/**
 * 
 * import react lib
 */
import React from 'react';

/**
 * 
 * @returns import type
 */

import type { UserRegistrationProps } from '../types/type';

export const SignUp  = () => {
    const [userReg, setUserReg] = React.useState<UserRegistrationProps>({
        username: "",
        password: "",
        mobile: "",
        firstName:"",
        lastName: "",
        email: "",
        gender: false,
        domain: "",
        day: 0,
        month: 0,
        year: 0,
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setUserReg(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(userReg);
        setUserReg({
        username: "",
        password: "",
        mobile: "",
        firstName:"",
        lastName: "",
        email: "",
        gender: false,
        domain: "",
        day: 0,
        month: 0,
        year: 0,
    })
    }

    return (
        <>
        <form  className="form_main_container" onSubmit={handleSubmit}>
            <div className='form_container'>
                <input type="text" placeholder="username" name="username" value={userReg.username} onChange={handleInput}/>
                <input type="text" placeholder="first name" name="firstName" value={userReg.firstName} onChange={handleInput}/>
                <input type="text" placeholder="last name" name="lastName" value={userReg.lastName} onChange={handleInput}/>
                <input type="email" placeholder="email" name="email" value={userReg.email} onChange={handleInput}/>
                <input type="number" placeholder="mobile number" name="mobile" value={userReg.mobile} onChange={handleInput}/>
                <select name="domain" value={userReg.domain} onChange={handleInput} id="domain" style={{textAlign: "center", padding: '5px', borderRadius: "5px"}}>
                    <option value="">-- Select --</option>
                    <option value="associate software engineer">Associate Software Engineer</option>
                    <option value="frontend developer">Frontend Developer</option>
                    <option value="backend developer">Backend Developer</option>
                    <option value="fullstack developer">Full-Stack Developer</option>
                    <option value="tester">Tester</option>
                    <option value="designer">Designer</option>
                </select>
                <div className='flex'>
                    <label htmlFor='gender'>Gender: </label>
                    <input type="radio" name="gender" id="male" value={"male"} onChange={handleInput}/>Male
                    <input type="radio" name="gender" id="female" value={"female"} onChange={handleInput}/>Female
                </div>
                <div className='flex'>
                     <input type="number" name='day' value={userReg.day}  onChange={handleInput} placeholder='DD'/>
                     <input type="number" name='month' value={userReg.month}  onChange={handleInput} placeholder='MM'/>
                     <input type="number" name='year' value={userReg.year}  onChange={handleInput} placeholder='YYYY'/>
                </div>
                <button type="submit">Signup</button>
            </div>
        </form>
        </>
    )
}