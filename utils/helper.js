export const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
          resolve(fileReader.result);
      }
  
      fileReader.onerror = () => {
          reject(fileReader.error);
      }
    });
  }

  export const convertDate = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const originalDate = new Date(date);
    const month = months[originalDate.getMonth()];
    const day = originalDate.getDate();
    const year = originalDate.getFullYear();

    return `${day} ${month}, ${year}`;
};
