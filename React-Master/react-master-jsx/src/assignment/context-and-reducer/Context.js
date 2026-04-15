import React from "react";

const Context = React.createContext();

export const ContextProvider = Context.Provider;

export const useContextData = () => {
    return React.useContext(Context);
}
