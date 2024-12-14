import {  useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

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

    // hold the user
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;