import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "./auth";

const Slices = combineSlices({
    authSlice
})

export default Slices;