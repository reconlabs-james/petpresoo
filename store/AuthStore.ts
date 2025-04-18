import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: (accessToken: string, refreshToken: string) => void;
  storeLogout: () => void;
}

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  return token;
};

const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token)
}

const setRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token)
}

export const removeToken = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: getToken() ? true : false,
  storeLogin: (accessToken: string, refreshToken: string) => {
    set({ isLoggedIn: true })
    setAccessToken(accessToken);
    setRefreshToken(refreshToken)
  },
  storeLogout: () => {
    set({ isLoggedIn: false })
    removeToken();
  },
}))
