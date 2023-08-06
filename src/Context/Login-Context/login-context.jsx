import { useReducer, createContext } from "react";
import { reducer } from './reducer-context';

const initialState = {
    user: JSON.parse(localStorage.getItem('loggedInUser')) || undefined
  };

export const LoginContext = createContext();


export default function Login_Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LoginContext.Provider value={{ state, dispatch }}>
            {children}
        </LoginContext.Provider>
    )
}