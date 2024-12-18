import {  useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    // Create a user
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // Sign in a user
    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // sign out a user
    const logoutUser =()=>{
        setLoading(true);
        return signOut(auth);
    }

    // sign in with the google
    const signWithGoogle= ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // hold on the user information
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        signWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;