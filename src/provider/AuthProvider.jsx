import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext =createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)

    // create user 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in user 
    const signInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout 

    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }

    // manage user observing 
    useEffect(()=>{
      const unSubscribed=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('observing current user inside useeffect',currentUser)
            setLoading(false)
        });
        return ()=>{
            unSubscribed();
        }
    },[]);
    
    const information ={user,
        createUser,
        signInUser,
        logOut,
        loading
    };

    
    
    return (
        <AuthContext.Provider value={information}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;