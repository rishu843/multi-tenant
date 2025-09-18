import React, { createContext, useState, useContext } from "react";
import { getToken, setToken, clearToken } from "../utils/authHelpers.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const tokenData = getToken();
    return tokenData ? tokenData.user : null;
  });

  const login = (userData, token) => {
    setUser(userData);
    setToken({ user: userData, token });
  };

  const logout = () => {
    setUser(null);
    clearToken();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
