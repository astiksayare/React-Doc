import React from "react";
import { userReducer, initialValue } from "./UserReducer";
import { Profile } from "./Profile";

export const User = () => {

    const [state, dispatch] = React.useReducer(userReducer, initialValue);

    return (
        <section className="flex-column">
            <input type="text" 
            value={state.username}
            onChange={(e) => dispatch({name: 'username', value: e.target.value})}
            placeholder="Enter user name..."
            />

            <input type="text" 
            value={state.firstName}
            onChange={(e) => dispatch({name: 'firstName', value: e.target.value})}
            placeholder="Enter first name..."
            />

            <input type="text" 
            value={state.lastName}
            onChange={(e) => dispatch({name: 'lastName', value: e.target.value})}
            placeholder="Enter last name..."
            />

            <input type="email" 
            value={state.email}
            onChange={(e) => dispatch({name: 'email', value: e.target.value})}
            placeholder="Enter email..."
            />

            <input type="number" 
            value={state.contactNumber}
            onChange={(e) => dispatch({name: 'contactNumber', value: e.target.value})}
            placeholder="Enter contact number..."
            />

            <input type="text" 
            value={state.address}
            onChange={(e) => dispatch({name: 'address', value: e.target.value})}
            placeholder="Enter your address..."
            />

            <hr width='500'/>

           <Profile state={state}/>

            <hr width='500'/>
            <button className="btn" onClick={() => dispatch("RESET")}>Reset</button>
        </section>
    )
}