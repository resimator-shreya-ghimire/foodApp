import { create } from 'zustand';

export type User = {
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  login: (userData: User, authToken: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),

  login: (userData, authToken) => {
    set({
      user: userData,
      token: authToken,
    });
    localStorage.setItem('token', authToken);
    localStorage.setItem('user', JSON.stringify(userData));
  },

  logout: () => {
    set({
      user: null,
      token: null,
    });
    localStorage.removeItem('token');
  },
}));
