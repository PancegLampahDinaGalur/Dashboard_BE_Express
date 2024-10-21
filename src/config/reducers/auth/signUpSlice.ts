import { createSlice } from "@reduxjs/toolkit";
import { postSignup } from "./authApi";
import { RootState } from "../../store"; 


export interface SignUpState {
    user: null | object,
    status: 'idle' | 'loading' | 'success' | 'error',
    message: null | string
}

const initialState:SignUpState = {
    user: null,
    status: 'idle',
    message: null,

}

export const signUpSlice = createSlice({
    name: 'signup',
    initialState,
    // reducers untuk yang pake syncronus
    reducers:{

    },
    // extraRedducers untuk yang pake Asyncronus 
    extraReducers: (builder) => {
        builder.addCase(postSignup.pending, (state,) => {
            state.status = 'loading'
        })
        builder.addCase(postSignup.fulfilled, (state, action) => {
            state.status = 'success'
            state.user = action.payload.data.user
            state.message = action.payload.message
        })
        builder.addCase(postSignup.rejected, (state, action) => {
            state.status = 'error'
            console.log("action.payload", action.payload)
            state.message = action.payload.message
        })
    }

})



export { postSignup }
export const selectUser = (state: RootState) => state.authSlice.signup.user
export default signUpSlice.reducer // selector
