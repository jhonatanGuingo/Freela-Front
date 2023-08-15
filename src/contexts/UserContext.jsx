import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react"
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const lsUser = localStorage.getItem("token");
  const [user, setUser] = useState(lsUser);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  )
}