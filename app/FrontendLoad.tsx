"use client"
import {NextUIProvider} from "@nextui-org/react";

interface Props {
    children: React.ReactNode
}

export default function FrontendLoad({ children }: Props) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  )
}
