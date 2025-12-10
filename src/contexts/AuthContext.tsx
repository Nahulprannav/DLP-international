import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type UserRole = 'guest' | 'user' | 'admin';

interface AuthContextType {
  role: UserRole;
  login: (role: UserRole, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<UserRole>('guest');

  // Load persisted role on mount
  useEffect(() => {
    const stored = localStorage.getItem('authRole') as UserRole | null;
    if (stored) setRole(stored);
  }, []);

  // Persist role whenever it changes
  useEffect(() => {
    localStorage.setItem('authRole', role);
  }, [role]);

  const login = (newRole: UserRole, name?: string) => {
    setRole(newRole);
    // In a real app you would also store user info (e.g., name) here
  };

  const logout = () => {
    setRole('guest');
    localStorage.removeItem('authRole');
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
