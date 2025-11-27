import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  login: (userData: User, authToken: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (userData, authToken) => {
        set({
          user: userData,
          token: authToken,
        });
      },

      logout: () => {
        set({
          user: null,
          token: null,
        });
      },
    }),
    {
      name: "auth",
    }
  )
);
