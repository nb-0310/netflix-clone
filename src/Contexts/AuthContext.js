import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from '../firebase.config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})

    const signUp = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        setDoc(doc(db, 'users', email), {
            savedMovies: []
        })
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ signUp, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}