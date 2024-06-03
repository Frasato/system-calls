import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    
    const [user, setUser] = useState(null);

    function singIn(email, password){

    }

    return(
        <AuthContext.Provider value={
            {
                signed: !!user,
                user,
                singIn,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}