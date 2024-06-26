"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'user' | 'admin';

interface AuthContextType {
  isLoggedIn: boolean;
  role: UserRole | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  role: null,
  login: () => {},
  logout: () => {},
});
console.log("Exporting useAuth and AuthProvider");
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);

  const login = (userRole: UserRole) => {
    setIsLoggedIn(true);
    setRole(userRole);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
