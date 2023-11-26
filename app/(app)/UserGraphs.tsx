import AreaGraph from "@/components/graph/AreaGraph";
import GraphsCarousel from "@/components/graph/GraphsCarousel";
import { axiosConfig } from "@/config/axiosConfig";
import clienteAxios from "@/config/clienteAxios";
import { RootState } from "@/redux/store";
import { handleError } from "@/utils/errorHandler";
import { Button, Skeleton } from "@nextui-org/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function UserGraphs() {
  const {
    isLoading,
    userGraph: userEvents,
    selectedPatient,
  } = useSelector((state: RootState) => state.app);
  const [loading, setLoading] = useState(false);

  if (!userEvents)
    return (
      <div className="w-full h-30vh grid place-items-center">
        <p className="text-2xl text-blue-500 font-bold">
          Selecciona un usuario para ver su informacion
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="w-full grid grid-cols-2">
        <Skeleton className=" h-96 w-full" />
        <Skeleton className=" h-96 w-full" />
      </div>
    );

  const handleExportClick = async () => {
    setLoading(true);
    try {
      const config = axiosConfig(false, "blob");
      if (!config) {
        throw new Error("No hay sesion");
      }

      const { data } = await clienteAxios(
        `/descargar/${selectedPatient}`,
        config
      );

      // Crear un enlace temporal para descargar el archivo
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement("a");
      link.href = url;


      link.setAttribute("download", "registros.csv");

      document.body.appendChild(link);
      link.click();

      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    } catch (error: any) {
      return handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-2">
      <div className="col-span-2 w-full">
        <Button
          type="button"
          color="primary"
          className="font-bold"
          isLoading={loading}
          onClick={handleExportClick}
        >
          Descargar registros
        </Button>
      </div>
      <GraphsCarousel datasets={userEvents.registrosSintomas} />
      <GraphsCarousel datasets={userEvents.registrosCuantitativos} />
    </div>
  );
}
