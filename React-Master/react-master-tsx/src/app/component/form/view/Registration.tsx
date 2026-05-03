import React from "react";
import * as Type from '@/app/component/type';

export const Registration = () => {
    const [user, setUser] = React.useState<Type.RegistrationForm>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
        firstName: '',
        lastName: '',
        mobile: 0
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        setUser({
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            address: '',
            firstName: '',
            lastName: '',
            mobile: 0
        });
    }


  return (
    <form
    onSubmit={handleSubmit}
    className="flex flex-col gap-4"
    >
      <h1 className="text-blue-400 text-center text-[1.5rem] underline font-bold font-mono mt-4">
        User Registration Form
      </h1>

      <main className="w-full flex flex-col gap-4 justify-center items-center">
        <div>
          <label>Username: </label>
          <input
            type="text"
            placeholder="Username..."
            name="username"
            id="username"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="First name..."
            name="firstName"
            id="firstName"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Last name..."
            name="lastName"
            id="lastName"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mobile: </label>
          <input
            type="number"
            placeholder="Mobile..."
            name="mobile"
            id="mobile"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.mobile}
            onChange={handleChange}
          />
        </div> 
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            id="email"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.email}
            onChange={handleChange}
          />
        </div> 
        <div>
          <label>Address: </label>
          <input
            type="text"
            placeholder="Address..."
            name="address"
            id="address"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.address}
            onChange={handleChange}
          />
        </div> <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password..."
            name="password"
            id="password"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.password}
            onChange={handleChange}
          />
        </div> <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="Confirm password..."
            name="confirmPassword"
            id="confirmPassword"
            className="border-slate-500 border-2 p-1 rounded-md"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div><button type="submit" className="text-white px-4 py-2 rounded-md bg-blue-500 font-bold cursor-pointer">Submit</button></div>
      </main>
    </form>
  );
};
