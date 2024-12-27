
import { createContext , useContext } from "react";

export const UserContext = createContext();

export const UserProvider = UserContext.Provider;

export const useData = () => {
    return useContext(UserContext);
}
