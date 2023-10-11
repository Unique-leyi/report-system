"use client";

import ReportUpload from "../../../components/Reports/ReportUpload";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ReportUploadPage = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(!isAuthenticated()){
      router.push("/auth/login");
    } else {
      router.push("/dashboard/reports");
    }
  }, []);


    return (
      <ReportUpload/>
    )
  }
  
  export default ReportUploadPage