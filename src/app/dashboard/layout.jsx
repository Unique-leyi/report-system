"use client";
import { ReportContextProvider } from "../../context/ReportContext";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

const DashboardPage = ({ children }) => {
  


    return (
        <div>
          <ReportContextProvider>
            <DashboardHeader>
            { children }
            </DashboardHeader>
          </ReportContextProvider>  
        </div>
    )
}

export default DashboardPage