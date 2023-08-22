/*********************
 * Author: Ameen Hamza
 * File: ContextProvider.js
 * Description: This file defines the ContextProvider component that manages the global state using the React Context API and stores cart data in cookies.
 ********************/

import React, { useReducer, createContext, useEffect } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie"; // Import the js-cookie library

export const GlobalContext = createContext();

export default function ContextProvider({ children }) {
  // Define initial data for the state
  const initialData = {
    user: "Ameen",
    cart: [],
  };

  // Use the reducer to manage state and get cart data from cookies
  const [state, dispatch] = useReducer(reducer, getDataFromCookies());

  // Store cart data in cookies when cart state changes
  useEffect(() => {
    Cookies.set("cart", JSON.stringify(state.cart), { path: "/" });
  }, [state.cart]);

  // Get cart data from cookies or use initial data
  function getDataFromCookies() {
    const cartFromCookie = Cookies.get("cart");
    if (cartFromCookie) {
      return { ...initialData, cart: JSON.parse(cartFromCookie) };
    }
    return initialData;
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
