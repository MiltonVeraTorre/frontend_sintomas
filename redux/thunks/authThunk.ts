import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import { DoctorInt } from "@/types/ModelTypes";
import { handleError } from "@/utils/errorHandler";
import { createAsyncThunk } from "@reduxjs/toolkit";

import jsCookie from "js-cookie"

export const loadPerfil = createAsyncThunk(
  "/auth/loadPerfil",
  async (action) => {
    try {
      const config = axiosConfig();
      if (!config) {
        return;
      }

      const { data } = await clienteAxios<DoctorInt>("/perfil", config);

      return data;
    } catch (error: any) {
      handleError(error);
    }
  }
);


