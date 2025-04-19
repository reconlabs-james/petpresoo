import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (accessToken: string, refreshToken: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
};

const setAccessToken = (token: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem('accessToken', token);
};

const setRefreshToken = (token: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem('refreshToken', token);
};

export const removeToken = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: false, // SSR-safe 초기값
  storeLogin: (accessToken: string, refreshToken: string) => {
    set({ isLoggedIn: true });
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
    removeToken();
  },
}));
