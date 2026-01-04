/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    try{
      const savedUser = localStorage.getItem('user');
      if(!savedUser) return null;
      const parsedData = JSON.parse(savedUser);
      return parsedData.user ? parsedData.user : parsedData;
    }catch(error){
      console.error("failed to parse user from localStorage", error);
      return null;
    }
  });
 
 
  const login = (userData) => {
    const cleanUser = userData.user ? userData.user:userData;
    localStorage.setItem('user', JSON.stringify(cleanUser));
    localStorage.setItem('token', cleanUser.token);
    setUser(cleanUser);
  };

  const logout = () => {
    console.log("Logout triggered: Clearing state and storage");
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);// trigger navbar re-render
  };

  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);