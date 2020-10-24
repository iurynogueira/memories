import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom';
import { handleError } from 'services/error-handler';
import api from '../services/api';

export interface AuthContextProps {
  user: UserData | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
  check: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export interface UserData {
  token: string;
  exp: string;
  username: string;
  userId: number;
  accessLevel: string;
}

export interface LoginData {
  documento: string;
  senha: string;
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserFromStorage = () => {
      let storedUser = localStorage.getItem('_auth');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        api.defaults.headers['Authorization'] = 'Bearer ' + parsedUser.token
      }
      setLoading(false);
    };
    loadUserFromStorage();
    check();
  }, []);

  const login = async (data: LoginData) => {
    try {
      setLoading(true);
      const response = await api.post('auth/login', data);

      if (response.data) {
        const { data } = response;
        api.defaults.headers['Authorization'] = 'Bearer ' + data.token
        setLoading(false)
        setUser(data);
        localStorage.setItem('_auth', JSON.stringify(data));
      }
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('_auth');
    setUser(null);
  };

  const check = async () => {
    try {
      setLoading(true);
      const response = await api.get('/auth/check');

      if (response.status === 200) {
        setLoading(false);
        return;
      }
    } catch (error) {
      handleError(error);
      setLoading(false);
      logout();
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout, check }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
};
