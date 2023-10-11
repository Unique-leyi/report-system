"use client"
import "./globals.css";
import { Providers } from "./providers";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import { AuthProvider } from "../context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if(pathname == "/") {
      router.replace("/dashboard/reports");
    }
  }, [router, pathname])

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
