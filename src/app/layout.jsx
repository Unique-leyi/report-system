"use client"
import "./globals.css";
import { Providers } from "./providers";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import { usePathname, useRouter } from "next/navigation";


export default function RootLayout({ children }) {

  const pathname = usePathname();
  const router = useRouter();
 
  useEffect(() => {
    if(pathname === "/"){
      router.replace("/dashboard/reports");
    }
  }, [pathname]);

  useEffect(() => {
    AOS.init();
  })

  return (
    <html lang="en">
          <body>
          <Providers>
            <DashboardHeader>
                {children}
            </DashboardHeader>
          </Providers>
          </body>
        </html>

  )
}
