"use client";

import Dashboard from "../../components/Dashboard/Dashboard";
import { ReportContextProvider } from "../../context/ReportContext";

const DashboardPage = () => {
    return (
        <div>
          <ReportContextProvider>
            <Dashboard/>
          </ReportContextProvider>  
        </div>
    )
}

export default DashboardPage