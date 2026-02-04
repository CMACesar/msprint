import { create } from 'zustand';

interface Usuario {
  id: string;
  email: string;
  nome: string;
  role: string;
}

interface AuthStore {
  usuario: Usuario | null;
  token: string | null;
  setAuth: (usuario: Usuario, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  usuario: null,
  token: localStorage.getItem('token'),
  setAuth: (usuario, token) => set({ usuario, token }),
  logout: () => {
    localStorage.removeItem('token');
    set({ usuario: null, token: null });
  },
}));
