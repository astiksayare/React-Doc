import React from "react";

export const UserContext = React.createContext();

export const UserContextProvider = UserContext.Provider;

export const useUserContext = () => {
    return React.useContext(UserContext);
}