"use client";

import { useState } from "react";
import Header from "./Header";
import RegistersCalendar from "./RegistersCalendar";
import { Input,Button } from "@nextui-org/react";
import { useDebounce } from "@/hooks/useDebounce";
import useSWR from "swr";
import { fetcher } from "@/config/fetcher";

import { PacienteInt } from "@/types/ModelTypes";
import { useDispatch } from "react-redux";
import { loadUserEvents } from "@/redux/thunks/appThunk";

export default function page() {
  // Estados de la busqueda
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const clearSearch = () => setSearch("")

  // Buscamos al usuario 
  const {data:users} = useSWR<PacienteInt[]>(`/paciente/${debouncedSearch}`,fetcher)


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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />

        <div className="shadow-lg rounded-md">
          {users && users.length !== 0 ? (
            users.map(user=>(
              <UserSearchSelect key={user.id} {...user} clearSearch={clearSearch}/>
            
            ))
          ): (
            
            search !== "" && (

            <div className="p-2 w-full text-left">
              No se encontraron resultados
            </div>
            )

         
          )}
           
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

interface UserSearchSelect extends PacienteInt{
  clearSearch:()=>void
}
function UserSearchSelect({ id,nombre,apellido,clearSearch}:UserSearchSelect) {

  const dispatch = useDispatch<any>()

  return (
    <>
      <button 
      onClick={()=>{
        clearSearch()
        dispatch(loadUserEvents(id))}}
      className="p-2 w-full text-left capitalize" type="button">
        {nombre} {apellido}
      </button>

      <div className="my-1 w-full bg-gray-200 rounded-lg h-[1px]"></div>
    </>
  );
}
