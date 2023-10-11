"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, setAuthToken } from '../../utils/axiosconfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    try {
      const { token, user } = await loginUser(credentials);
      setUser(user);
      setAuthToken(token);

      // Save the token to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);

    // Remove the token from localStorage
    localStorage.removeItem('token');
  };

  const isAuthenticated = () => {
    return !!user;
  };


  useEffect(() => {
    // Retrieve user data from local storage on component mount
    if (typeof window !== 'undefined' && window.localStorage) {

      const userData = localStorage.getItem("user") === "undefined" || false ? null : JSON.parse(localStorage.getItem("user"));
      if (userData) {
        setUser(userData);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
