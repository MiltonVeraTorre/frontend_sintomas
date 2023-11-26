"use client"

import React, { useState } from "react";
import { Input, Button} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import clienteAxios from "@/config/clienteAxios";
import { DoctorInt } from "@/types/ModelTypes";
import jsCookie from "js-cookie"
import { setAuth } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { handleError } from "@/utils/errorHandler";
export default function page() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      // Hacemos la peticion
      const {data} = await clienteAxios.post<DoctorInt>("/login",{
        correo:email,
        password
      
      })
      // Colocamos la cookie
      jsCookie.set("token", data.token ?? "", {
        expires: new Date().setMonth(new Date().getMonth() + 1),
      });
      // Guardamos la cookie
      dispatch(setAuth(data))

      // Pantamos a la pantalla de inicio
      router.push("/")

    } catch (error:any) {
        return handleError(error)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className=" min-h-screen md:grid md:place-items-center">
      <div className="flex  flex-col justify-center  px-6 py-12 lg:px-8 md:w-1/2">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 md:h-14 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl md:text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full max-w-sm ">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mt-2">
                <Input label="Correo" type="email" variant="underlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <Input type="password" label="Contraseña" variant="underlined" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                color="primary"
                className="w-full text-lg font-bold"
                isLoading={loading}
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
