import axios from 'axios';
import { api } from '../Api/apiservice';

export const postLogin = async (login: string, password: string) => {
  try {
    
    const authResponse = await api.post(`public/register/login?email=${login}&password=${password}`, {
      email: login,
      senha: password,
    },
    );

    if (authResponse.status === 200) {
      const token = authResponse.data.token;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem('token', token);

      return {
        logged: true,
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { logged: false, message: 'Credenciais Inválidas' };
      }
      if (error.response?.status === 404) {
        return { logged: false, message: 'Página Não Encontrada' };
      }
    }
  }

  return {
    logged: false,
    message: 'Email e Senha são Obrigatórios',
  };
};

