import { useReducer, createContext } from "react";
import { reducer } from './reducer-context';

export const LoginContext = createContext("Initial Value");

let login_data = {
    user: undefined
}

export default function Login_Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, login_data);

    return (
        <LoginContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginContext.Provider>
    )
}