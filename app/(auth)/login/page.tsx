"use client"

import React from "react";
import { Input, Button} from "@nextui-org/react";

export default function page() {
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
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="mt-2">
                <Input label="Correo" type="email" variant="underlined" />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <Input type="email" label="Contraseña" variant="underlined" />
              </div>
            </div>

            <div>
              <Button
                type="button"
                color="primary"
                className="w-full text-lg font-bold"
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
