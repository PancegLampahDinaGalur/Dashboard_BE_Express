import { createSlice } from "@reduxjs/toolkit";
import { postSignin } from "./authApi";
import { RootState } from "../../store"; 


export interface SignInState {
    user: null | object,
    token: null | string,
    status: 'idle' | 'loading' | 'success' | 'error',
    message: null | string
}

const initialState:SignInState = {
    user: null,
    token: null,
    status: 'idle',
    message: null,

}

export const signInSlice = createSlice({
    name: 'signin',
    initialState,
    // reducers untuk yang pake syncronus
    reducers:{

    },
    // extraRedducers untuk yang pake Asyncronus 
    extraReducers: (builder) => {
        builder.addCase(postSignin.pending, (state,) => {
            state.status = 'loading'
        })
        builder.addCase(postSignin.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload.data.user
            state.token = action.payload.data.token
            state.message = action.payload.message
        })
        builder.addCase(postSignin.rejected, (state, action) => {
            state.status = 'error'
            console.log("action.payload", action.payload)
            state.message = action.payload.message
        })
    }

})



export { postSignin }
export const selectUser = (state: RootState) => state.authSlice.signin.user
export default signInSlice.reducer // selector
