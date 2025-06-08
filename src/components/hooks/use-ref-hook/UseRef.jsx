import React from "react";

const UseRef = () => {

    const [toggle, setToggle] = React.useState(false);
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const emailLable = React.useRef(null);
    const passwordLabel = React.useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log({
            email: emailRef.current.value,
            password: passwordRef.current.value
        })
        emailRef.current.focus();
        emailRef.current.style.color='red';
        passwordRef.current.placeholder='Enter password';
    }

    const handleToggle = () => {
        setToggle(!toggle);

        if(toggle){
            emailLable.current.style.display="none";
            emailRef.current.style.display="none";
            passwordLabel.current.style.display="none";
            passwordRef.current.style.display="none";
        }else {
           emailLable.current.style.display="block";
            emailRef.current.style.display="block";
            passwordLabel.current.style.display="block";
            passwordRef.current.style.display="block";
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center items-center mt-5">
            <div className="flex flex-col gap-3">
                <label ref={emailLable} htmlFor="email">Email</label>
                <input type="email" 
                id="email"
                className="p-2 rounded-lg border-2"
                ref={emailRef}
                />
                <label ref={passwordLabel} htmlFor="password">Password</label>
                <input type="password" 
                id="password"
                className="p-2 rounded-lg border-2"
                ref={passwordRef}
                />
            </div>
            <button type="submit" className="p-2 rounded-lg bg-green-400">Submit</button>
            <button onClick={handleToggle} className="p-2 rounded-lg bg-green-400">Hide/Show</button>
        </form>
        </>
    )
}

export default UseRef;