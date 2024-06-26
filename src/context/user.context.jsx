import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTIONS_TYPE = {
    GET_CURRENT_USER: "GET_CURRENT_USER",
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case USER_ACTIONS_TYPE.GET_CURRENT_USER: {
            return {...state, currentUser: payload}
        }
        default:
            throw new Error(`Unknown action type ${type}`);
    }
}

const InitialState = {
    currentUser: null,
}

export const UserProvider = ({ children }) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, InitialState )
    const setCurrentUser = (user) => {
        dispatch({type: USER_ACTIONS_TYPE.GET_CURRENT_USER, payload: user})
    }
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
            if (user) {
               createUserDocumentFromAuth(user);
            }
        })
        return () => unsubscribe()
    }, []);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}