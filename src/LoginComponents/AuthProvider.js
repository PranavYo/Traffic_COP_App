import { createContext, useState } from "react";
import React from 'react'
import { useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>
 {
    const [user, setuser] = useState();
    const login=(user)=>
    {
        setuser(user)
    }

    const logout=()=>
    {
        setuser(null)
    }

  return (

    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>
{
    return useContext(AuthContext);
}