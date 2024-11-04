import ChildComponent1 from "./ChildComponent1";

import React from 'react';

export const UserNameContext = React.createContext();
export const UserAgeContext = React.createContext();

const ParentComponent = () => {

    const name = "Astik";
    const age = 24;

    return (
        <UserNameContext.Provider value={name}>
            <UserAgeContext.Provider value={age}>
                <ChildComponent1 />
            </UserAgeContext.Provider>
        </UserNameContext.Provider>
    )
}

export default ParentComponent;