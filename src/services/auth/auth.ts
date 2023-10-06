import axios from 'axios'
import { api } from '../Api/apiservice'

export const postLogin = async (login: string, password: string) => {
  try {
    const response = await api.post(`public/register/login?email=${login}&password=${password}`, {
      email: login,
      senha: password
    })

    if (response.status === 200) {
      api.defaults.headers.common.Authorization = `${response.data.type} ${response.data.token}`
      localStorage.setItem('token', JSON.stringify(response.data))
      return {
        logged: true
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { logged: false, message: 'Credenciais Inválidas' }
      }

      if (error.response?.status === 404) {
        return { logged: false, message: 'Página Não Encontrada' }
      }
    }
  }

  return {
    logged: false,
    message: 'Email e Senha são Obrigatórios'
  }
}

