import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import FrontendLoad from "./FrontendLoad";
import ReduxProvider from "@/redux/ReduxProvider";

const poppins = Poppins({ weight: ["400", "600", "700"],subsets: ["latin"] });

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
      <body className={poppins.className}>
        <FrontendLoad>
          <ReduxProvider>{children}</ReduxProvider>
        </FrontendLoad>
      </body>
    </html>
  );
}
