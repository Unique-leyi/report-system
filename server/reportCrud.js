import { readJson, writeJson } from 'fs-extra'


async function getReports() {
  const data = await readJson('./reports.json');
  return JSON.parse(data);
}


function generateUniqueId() {
    const timestamp = new Date().getTime(); 
    const randomNum = Math.floor(Math.random() * 1000);
  
    const uniqueId = timestamp * 1000 + randomNum;
  
    return uniqueId;
  }

async function writeReports(Reports) {
  await writeJson('./reports.json', JSON.stringify(Reports, null, 2));
}

// Create a new Report
export async function createReport(title, tags, images, date, author) {

     const id = generateUniqueId();

     const newReport = {
        id, 
        task_title: title,
        task_tags: [...tags],
        task_images: [...images],
        task_date: date,
        task_author: author,
    }
  

  const Reports = await getReports();
  Reports.push(newReport);
  await writeReports(Reports);

  return newReport;
}

// Find a Report
export async function getReport(ReportnameOrEmail) {
  const Reports = await getReports();
  return Reports.find(
    (Report) =>
      Report.Reportname === ReportnameOrEmail || Report.email === ReportnameOrEmail
  );
}

// Update Report
export async function updateReport(ReportnameOrEmail, updatedReportData) {
  const Reports = await getReports();
  const ReportIndex = Reports.findIndex(
    (Report) =>
      Report.Reportname === ReportnameOrEmail || Report.email === ReportnameOrEmail
  );

  if (ReportIndex === -1) {
    return null; 
  }

  Reports[ReportIndex] = {
    ...Reports[ReportIndex],
    ...updatedReportData,
  };

  await writeReports(Reports);

  return Reports[ReportIndex];
}

// Delete Report 
export async function deleteReport(ReportnameOrEmail) {
  const Reports = await getReports();
  const ReportIndex = Reports.findIndex(
    (Report) =>
      Report.Reportname === ReportnameOrEmail || Report.email === ReportnameOrEmail
  );

  if (ReportIndex === -1) {
    return false; // Report not found
  }

  Reports.splice(ReportIndex, 1);
  await writeReports(Reports);

  return true; 
}
