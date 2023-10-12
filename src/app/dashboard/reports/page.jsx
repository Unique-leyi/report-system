
import Reports from "../../../components/Reports/Reports";
import { getReports } from "../../../../utils/getReports";

const ReportsPage = async () => {
  const reports = await getReports();

  return (
    <Reports reportsData={reports}/>
  )
}
  
export default ReportsPage