import React, { useReducer, createContext, useEffect, useState } from "react";
import { reducer } from './reducer-context';
import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

export const LoginContext = createContext();

export default function LoginProvider({ children }) {
  const storedToken = Cookies.get('token') || undefined;
  const [state, dispatch] = useReducer(reducer, { token: storedToken });
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userProfilePic, setUserProfilePic] = useState(null);

  useEffect(() => {
    if (state.token) {
      const decodedToken = decodeToken(state.token);
      setUserRole(decodedToken ? decodedToken.role : null);
      setUserName(decodedToken ? decodedToken.name : null);
      setUserEmail(decodedToken ? decodedToken.email : null);
      setUserProfilePic(decodedToken ? decodedToken.profilePic : null);
    } else {
      setUserRole(null);
      setUserName(null);
      setUserEmail(null);
      setUserProfilePic(null);
    }

    Cookies.set('token', state.token);
  }, [state.token]);

  return (
    <LoginContext.Provider value={{ state, dispatch, userRole, userName, userEmail, userProfilePic }}>
      {children}
    </LoginContext.Provider>
  );
}
