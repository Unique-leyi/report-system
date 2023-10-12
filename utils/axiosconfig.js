import axios from 'axios';

// Set up the base URL based on the environment
const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_REMOTE_API
    : process.env.NEXT_PUBLIC_LOCAL_API;

// Create a reusable axios instance configuration function
const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: 30000,
    withCredentials: true, 
  });
};



const instance = createAxiosInstance(baseURL);

// Function to set authentication token in the Axios headers
export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
};

// Function to perform login
export const loginUser = async (credentials) => {
  try {
    const response = await instance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
  
};

// Function to perform logout
export const logoutUser = async () => {
    try {
      const response = await instance.get('/auth/logout');
      return response.data;
    } catch (error) {
      throw error;
    }
    
  };


export default instance;