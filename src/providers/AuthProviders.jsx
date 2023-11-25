import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [bookmarkedList, setBookmarkedList] = useState([]);


    //  Create User Function
    // ----------------------------------------------------------------
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //  update User Function
    // ----------------------------------------------------------------
    const updateUser = (name,photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    // SignIn User Function
    // ----------------------------------------------------------------
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google SignIn User Function
    // ----------------------------------------------------------------
    
    const signInWithGoogle = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // Github SignIn User Function
    // ----------------------------------------------------------------
    
    const signInWithGithub = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
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
        updateUser,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        bookmarkedList,
        setBookmarkedList
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;