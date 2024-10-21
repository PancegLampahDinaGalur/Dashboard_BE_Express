import { configureStore } from "@reduxjs/toolkit";  
import reducers from './reducers';  // import reducers yang sudah di buat di folder reducers




export const store = configureStore({
    reducer: reducers,   // untuk menampung rak-rak data yang akan di buat
    devTools: true,  // untuk mengaktifkan redux devtools yang sudah di download di extention web 
});


// state untuk menampung data dari redux
export type RootState = ReturnType<typeof store.getState>;  // rootstate adalah fungsi untuk mengambil data dari state


// dispatch  adalah fungsi untuk mengubah, manambah data di state
export type AppDispatch = typeof store.dispatch; // appdispatch adalah fungsi untuk menggunakan fungsi dispatch di redux

