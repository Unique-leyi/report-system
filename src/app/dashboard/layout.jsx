"use client";
import { ReportContextProvider } from "../../context/ReportContext";

const DashboardPage = ({ children }) => {
    return (
        <div>
          <ReportContextProvider>
            { children }
          </ReportContextProvider>  
        </div>
    )
}

export default DashboardPage