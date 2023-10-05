"use client"
import "./globals.css";
import { Providers } from "./providers";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init();
  })

  return (
    <html lang="en">
          <body>
          <Providers>
            {children}
          </Providers>
          </body>
        </html>

  )
}
