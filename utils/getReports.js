import instance from "./axiosconfig";

export async function getReports() {

    try {
        const response = await instance.get(`/report/`);
        return response.data;
    } catch(error) {
        return error.data;
    }
}


export async function getReport(id) {
    try {
        const Reports = await getReports();
        const Report = Reports.find(Report => Report._id == id);
        
        return Report ? { Report } : { error: "Report Not Found" };
    } catch (error) {
        return { 
            error: "An error occurred while fetching the Report" 
         };
    }
}