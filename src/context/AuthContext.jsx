"use client"
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, logoutUser, setAuthToken } from "../../utils/axiosconfig";
import Cookies from 'js-cookie'; 

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const fetchedUser = localStorage.getItem("user");
      const storedUser = fetchedUser == "undefined" ? null : JSON.parse(localStorage.getItem("user")) || {};
      return storedUser;
    } else {
      return {};
    }
  });


  const login = async (credentials) => {
    try {
      const { token, user } = await loginUser(credentials);
      setUser(user);
      setAuthToken(token);

      // Set token to expire in 1 hour
      const oneHourFromNow = new Date();
      oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);
      Cookies.set('token', token, { expires: oneHourFromNow });

    } catch (error) {
      throw new Error('Login failed. Please check your credentials and try again.');
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setAuthToken(null);
  
      // Remove the token cookie
      Cookies.remove('token');
    } catch(error) {
      throw new Error('Logout failed.');
    }
  };

  const isAuthenticated = () => {
    const authToken = Cookies.get('token');
    return !!authToken; 
  }

  

  useEffect(() => {
    if(typeof window !== "undefined" && window.localStorage){
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated  }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);