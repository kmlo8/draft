'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { setAccessToken as setApiAccessToken, userAPI } from '@/lib/api';

interface User {
  id: string;
  email: string;
  darkMode: boolean;
  preferredGenres?: string[];
  preferredActors?: string[];
  preferredDirectors?: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isAuthenticated = !!accessToken;

  const logout = useCallback(async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Authorization': `Bearer ${accessToken}` }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setAccessToken(null);
      setApiAccessToken(null);
      setUser(null); // Explicitly clear user state
    }
  }, [accessToken]);

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`, {
          method: 'POST',
          credentials: 'include'
        });

        if (response.ok) {
          const data = await response.json();
          setAccessToken(data.accessToken);
          setApiAccessToken(data.accessToken);
        }
      } catch (error) {
        console.error('Initial refresh failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
    void refreshToken();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      if (isAuthenticated) {
        try {
          const response = await userAPI.getProfile();
          setUser(response.data.user);
          console.log('User data loaded:', response.data.user);
        } catch (error) {
          console.error('Failed to fetch profile, logging out:', error);
          void logout();
        }
      }
    };
    void fetchProfile();
  }, [isAuthenticated, logout]);

  const login = (token: string, userData: User) => {
    setAccessToken(token);
    setApiAccessToken(token);
    setUser(userData);
    console.log('User logged in:', userData);
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return;

    const oldUser = user;
    // Correctly merge the new data with the existing user object
    const updatedUser = { ...oldUser, ...userData };
    setUser(updatedUser);

    try {
      const response = await userAPI.updateProfile(userData);
      setUser(response.data.user);
      console.log('User data saved and updated:', response.data.user);
    } catch (error) {
      console.error('Failed to update user data:', error);
      setUser(oldUser); // Revert on error
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        updateUser
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
