import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    getCurrentUser,
    signInAuthUserWithEmailAndPassword, signInWithGooglePopup,
    signOutUser
} from "../../utils/firebase/firebase.utils";
import {logger} from "redux-logger/src";


const initialState = {
    currentUser: null,
}


export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async (dispatch, getState) => {
        try {
            const user = await getCurrentUser()
            return {accessToken: user.accessToken, email: user.email};
        } catch (error) {
            console.error(error);
        }

    }
)

export const signInWithEmail = createAsyncThunk(
    'user/signInWithEmail',
    async ({email, password}) => {
        try {
            const {user} = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            return {accessToken: user.accessToken, email: user.email};
        } catch (e) {
            console.error(e);
        }
    }
)

export const signInWithGoogle = createAsyncThunk(
    'user/signInWithGoogle',
    async (email, password) => {
        try {
            const { user } = await signInWithGooglePopup();
            return {accessToken: user.accessToken, email: user.email};
        } catch (error) {
            console.log(error)
        }
    }
)

export const signUp = createAsyncThunk(
    'user/signUp',
    async ({email, password, displayName}) => {
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            return {accessToken: user.accessToken, email: user.email};
        } catch (error) {
            console.log(error)
        }
    }
)

export const signOut = createAsyncThunk(
    'user/signOut',
    async () => {
        try {
            await signOutUser()
        } catch (error) {
            logger.error(error);
        }
    }
)
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signOut.fulfilled, (state) => {
                state.currentUser = null
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(signInWithEmail.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
    }
})

export const {reducer: userReducer} = userSlice