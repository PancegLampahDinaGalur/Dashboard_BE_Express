import { combineSlices } from "@reduxjs/toolkit";
import { signInSlice } from "./signinSlice";
import { signUpSlice } from "./signUpSlice";

const authSlices = combineSlices(
    signInSlice,
    signUpSlice
)

export default authSlices;