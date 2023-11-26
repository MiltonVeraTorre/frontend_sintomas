import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import { UserEventInt } from "@/types/AppTypes";
import { handleError } from "@/utils/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const loadUserEvents = createAsyncThunk(
    "/user/loadUserEvents",
    async (pacienteId:number) => {
        try {
        const config = axiosConfig();
        if (!config) {
            return;
        }
    
        const { data } = await clienteAxios<UserEventInt>(`/registros/${pacienteId}`, config);
    
        return data;
        } catch (error: any) {
        handleError(error);
        }
    }
    
)