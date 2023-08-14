import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from './reducer-context';
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const storedToken = Cookies.get("token") || undefined;
  const decodedToken = decodeToken(storedToken);

  const initialState = {
    token: storedToken,
    userRole: decodedToken?.role || null,
    userName: decodedToken?.name || null,
    userEmail: decodedToken?.email || null,
    userProfilePic: decodedToken?.profilePic || null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.token) {
      Cookies.set("token", state.token);
    } else {
      Cookies.remove("token");
    }
  }, [state.token]);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}
