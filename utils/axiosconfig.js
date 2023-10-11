import axios from 'axios';

// Create a reusable axios instance configuration function
const createAxiosInstance = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: 10000,
  });
};

// Set up the base URL based on the environment
const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_REMOTE_API
    : process.env.NEXT_PUBLIC_LOCAL_API;

// Create the axios instance with the appropriate base URL
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
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default instance;
