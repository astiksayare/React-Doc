import React from "react"


export const UserForm = () => {

    const id = React.useId();

    const [user, setUser] = React.useState({
        firstName: '',
        lastName: '',
        middleName: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <section>
           <form action="" onSubmit={handleSubmit}>
                 <div className="display_flex">
                    <label htmlFor={`${id}_firstName`}>First Name</label>
                    <input type="text" id={`${id}_firstName`} value={user.firstName} onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>

                <div className="display_flex">
                    <label htmlFor={`${id}_middleName`}>Middle Name</label>
                    <input type="text" id={`${id}_middleName`} value={user.middleName} onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>

                <div className="display_flex">
                    <label htmlFor={`${id}_lastName`}>Last Name</label>
                    <input type="text" id={`${id}_lastName`} value={user.lastName} onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>

                <div className="display_flex">
                    <label htmlFor={`${id}_email`}>Email</label>
                    <input type="email" id={`${id}_email`} value={user.email} onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>

                <button type="submit" className="btn">Submit</button>
           </form>
        </section>
    )
}