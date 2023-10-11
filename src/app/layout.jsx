"use client"
import "./globals.css";
import { Providers } from "./providers";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";


export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init();
  })

  return (
    <html lang="en">
      <body>
      <Providers>
        <AuthProvider>
          { children }
        </AuthProvider>
      </Providers>
      </body>
    </html>

  )
}
