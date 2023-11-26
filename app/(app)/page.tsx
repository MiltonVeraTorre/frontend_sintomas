"use client";

import { useState } from "react";
import Header from "./Header";
import RegistersCalendar from "./RegistersCalendar";
import { Input,Button } from "@nextui-org/react";
import { useDebounce } from "@/hooks/useDebounce";

export default function page() {
  // Estados de la busqueda
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  // Buscamos al usuario 
  


  return (
    <div className="w-full min-h-screen">
      <Header />

      <div className="mt-14 w-2/3 mx-auto">
        
        <Input
          size="lg"
          type="text"
          label="Buscar paciente"
          labelPlacement="outside"
          className=" text-2xl"
        />

        <div className="shadow-lg rounded-md">
            <UserSearchSelect name="Pedrito Sanchez" />
            <UserSearchSelect name="Pedrito Sanchez" />
            <UserSearchSelect name="Pedrito Sanchez" />
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <div>
          <Button
            type="button"
            color="primary"
            size="lg"
            variant="solid"
            
          >
            Descargar Datos de Paciente

          </Button>
        </div>
        <RegistersCalendar />
      </div>
    </div>
  );
}

function UserSearchSelect({ name }: { name: string }) {
  return (
    <>
      <button className="p-2 w-full text-left" type="button">
        Pedrito Sanchez
      </button>

      <div className="my-1 w-full bg-gray-200 rounded-lg h-[1px]"></div>
    </>
  );
}
