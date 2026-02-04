import api from './api';

interface AuthResponse {
  token: string;
  usuario: {
    id: string;
    email: string;
    nome: string;
    role: string;
  };
}

export const authService = {
  login: async (email: string, senha: string): Promise<AuthResponse> => {
    const { data } = await api.post<AuthResponse>('/auth/login', { email, senha });
    localStorage.setItem('token', data.token);
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  register: async (email: string, senha: string, nome: string, role: string) => {
    const { data } = await api.post('/auth/register', { email, senha, nome, role });
    return data;
  },
};
