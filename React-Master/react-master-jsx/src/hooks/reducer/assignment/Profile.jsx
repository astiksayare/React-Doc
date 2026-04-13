import React from "react";

export const Profile = ({state}) => {
    return (
        <section>
            <h1>User Name: {state.username}</h1>
            <h1>First Name: {state.firstName}</h1>
            <h1>Last Name: {state.lastName}</h1>
            <h1>Email: {state.email}</h1>
            <h1>Contact Number: {state.contactNumber}</h1>
            <h1>Address: {state.address}</h1>
        </section>
    )
}