import { create } from 'zustand';
import { axiosApi } from '@/lib/api/axios';
import { UserDTO } from '@/lib/types/userTypes';
import { logout } from '@/lib/services/authServices';
import { fetchCurrentUser } from '@/lib/services/userServices';

type AuthState = {
  user: UserDTO | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  fetchUser: async () => {
    try {
      const res = await fetchCurrentUser()
      set({
        user: res,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (err) {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  logout: async () => {
    try {
      await logout();
    } catch (e) {
      console.error("Erreur durant le logout :", e);
    } finally {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }
}));
