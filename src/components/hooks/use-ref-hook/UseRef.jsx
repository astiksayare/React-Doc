import React from "react";

const UseRef = () => {

    const emailRef = React.useRef('');
    const passwordRef = React.useRef('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center mt-5">
            <div className="flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <input type="email" 
                id="email"
                className="p-2 rounded-lg border-2"
                ref={emailRef}
                />
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password"
                className="p-2 rounded-lg border-2"
                ref={passwordRef}
                />
            </div>
            <button type="submit" className="p-2 rounded-lg bg-green-400">Submit</button>
        </form>
        </>
    )
}

export default UseRef;