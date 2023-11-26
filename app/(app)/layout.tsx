"use client";

import { RootState } from "@/redux/store";
import { loadPerfil } from "@/redux/thunks/authThunk";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function layout({ children }: { children: React.ReactNode }) {
  const { auth, cargando } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<any>();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadPerfil());
  }, []);

  useEffect(() => {
    if (!auth?.id && !cargando) {
      router.push("/login");
    }
  }, [cargando, auth, router]);

  if (cargando) {
    return (
      <div className="w-full min-h-screen grid place-items-center">
        <img src="/next.svg" alt="Logo" className="w-32 h-32 animate-ping" />
      </div>
    );
  }

  return <>{children}</>;
}
