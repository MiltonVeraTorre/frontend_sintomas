import { PacienteInt } from "@/types/ModelTypes";
import { createSlice } from "@reduxjs/toolkit";
import { loadUserEvents } from "../thunks/appThunk";
import { UserEventInt } from "@/types/AppTypes";


export const appSlice = createSlice({
    name: 'app',
    initialState:{
        selectedPatient: null as null | PacienteInt,
        userGraph: null as null | UserEventInt,
        isLoading: false,
    },
    reducers:{
        setSelectedPatient: (state, action) => {
            state.selectedPatient = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(loadUserEvents.fulfilled, (state, action) => {

            state.isLoading = false;
            if(!action.payload){
                state.userGraph = null;
                return;
            }

            state.userGraph = action.payload;
        });
        builder.addCase(loadUserEvents.rejected, (state, action) => {
            state.isLoading = false;
            state.userGraph = null;
        });
        builder.addCase(loadUserEvents.pending, (state, action) => {
            state.isLoading = true;
            state.userGraph = null;
        });
    },

})

export const { setSelectedPatient } = appSlice.actions;
export default appSlice.reducer;

