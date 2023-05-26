import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);


    //  Create User Function
    // ----------------------------------------------------------------
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // SignIn User Function
    // ----------------------------------------------------------------
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

       // LogOut User Function 
    // ----------------------------------------------------------------
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    // Display User Using SideEffect 
    // ----------------------------------------------------------------
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('Logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])


    // Data Send to Component
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;