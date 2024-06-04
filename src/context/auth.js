import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    
    const [user, setUser] = useState(null);

    function singIn(email, password){

    }

    function singUp(email, password, name){

    }

    return(
        <AuthContext.Provider value={
            {
                signed: !!user,
                user,
                singIn,
                singUp,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}