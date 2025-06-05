import { useState, useEffect, createContext, useContext } from 'react';

interface User {
  username: string;
  email?: string;
  mobile?: string;
  name?: string;
  dateOfJoining: string;
  subscribedServices: string[];
  jwtToken: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check session storage for existing user
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    sessionStorage.setItem('user', JSON.stringify(userData));
    sessionStorage.setItem('jwtToken', userData.jwtToken);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('jwtToken');
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
