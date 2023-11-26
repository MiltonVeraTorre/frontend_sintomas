import { PacienteInt } from "@/types/ModelTypes";
import { createSlice } from "@reduxjs/toolkit";
import { loadUserEvents } from "../thunks/appThunk";
import { UserEventInt } from "@/types/AppTypes";


export const appSlice = createSlice({
    name: 'app',
    initialState:{
        selectedPatient: null as null | PacienteInt,
        userEvents: null as null | UserEventInt[]
    },
    reducers:{
        setSelectedPatient: (state, action) => {
            state.selectedPatient = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(loadUserEvents.fulfilled, (state, action) => {

            if(!action.payload){
                state.userEvents = null;
                return;
            }

            state.userEvents = action.payload;
        });
        builder.addCase(loadUserEvents.rejected, (state, action) => {
            state.userEvents = null;
        });
        builder.addCase(loadUserEvents.pending, (state, action) => {
            state.userEvents = null;
        });
    },

})

export const { setSelectedPatient } = appSlice.actions;
export default appSlice.reducer;

