/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    try{
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    }catch(error){
      console.error("failed to parse user from localStorage", error);
      return null;
    }
  });
 
 
  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);