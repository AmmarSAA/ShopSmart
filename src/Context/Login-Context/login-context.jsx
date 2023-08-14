import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from './reducer-context';
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const storedToken = Cookies.get('token') || null;
  const [state, dispatch] = useReducer(reducer, { token: storedToken, user: null });

  useEffect(() => {
    if (state.token) {
      const decodedToken = decodeToken(state.token);
      dispatch({ type: "LOGIN_USER", token: state.token, user: decodedToken });
    }

    Cookies.set('token', state.token);
  }, [state.token]);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
