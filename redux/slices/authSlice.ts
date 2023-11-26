
import {createSlice} from "@reduxjs/toolkit";

// Creacion del slice

import { DoctorInt } from "@/types/ModelTypes";
import { loadPerfil } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth:null as null | DoctorInt,
    cargando:true
  },
  reducers: {
    setAuth:(state,action)=>{
      state.auth = action.payload
      state.cargando = false
  },
  removeAuth:(state)=>{
      state.auth = null
  }
  },
  extraReducers(builder) {
    // Perfil Load
    builder.addCase(loadPerfil.pending,(state,action)=>{
        state.cargando = true
    }),
    builder.addCase(loadPerfil.fulfilled,(state,action)=>{

        if(!action.payload){
            state.cargando = false
            return
        }

        state.auth = action.payload
        state.cargando = false
    }),
    builder.addCase(loadPerfil.rejected,(state,action)=>{
        state.cargando = false
    })
    

}
  
});

// Exportacion de las acciones generadas
export const {setAuth,removeAuth} = authSlice.actions;

// Exportacion del reducer
export default authSlice.reducer;
