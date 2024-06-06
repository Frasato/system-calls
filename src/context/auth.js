import { useState, createContext, useEffect } from "react";
import {auth, db} from '../services/firebaseconection.js'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc, getDoc, setDoc} from 'firebase/firestore';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);

    function singIn(email, password){

    }

    async function singUp(email, password, name){
        setLoadingAuth(true);
        
        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value)=> {
                let uid = value.user.uid;

                await setDoc(doc(db, "users", uid), {
                    name: name,
                    avatarUrl: null, 
                }).then(()=> {
                    let data = {
                        uid,
                        name,
                        email: value.user.email,
                        avatarUrl: null
                    }

                    setUser(data);

                    setLoadingAuth(false);
                }).catch((err)=> {
                    console.log(err);
                    setLoadingAuth(false);
                });
            });
    }

    return(
        <AuthContext.Provider value={
            {
                signed: !!user,
                user,
                singIn,
                singUp,
                loadingAuth,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
}