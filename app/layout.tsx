import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FrontendLoad from "./FrontendLoad";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Sintomas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <FrontendLoad>
        <body className={inter.className}>{children}</body>
      </FrontendLoad>
    </html>
  );
}
