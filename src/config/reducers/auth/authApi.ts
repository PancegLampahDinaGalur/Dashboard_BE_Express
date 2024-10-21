
import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const API_URL = import.meta.env.VITE_API_URL;
interface IAuthData {
    email: string
    password: string
}
// interface untuk menampung data dan menampilkan type data yang akan di kirim ke server



export const postSignin = createAsyncThunk('auth/signin', async (data:IAuthData, {rejectWithValue}) => {
    console.log("data", data)
try {
    const res = await axios.post(`${API_URL}/auth/signin`, {
            email: data.email,
            password: data.password
            })
        return res.data
    }catch(e:any){
        return rejectWithValue(e.response.data)
    }

})


export const postSignup = createAsyncThunk('auth/signup', async (data:IAuthData, {rejectWithValue}): Promise<object> => {
try {    
const res = await axios.post(`${API_URL}/auth/signup`, {
      email: data.email,
      password: data.password
  })
  return res.data
}catch(e:any){
    return rejectWithValue(e.response.data)
}
})


