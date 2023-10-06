import axios from 'axios'

export const apiService = axios.create({
  baseURL: 'https://api.buscarmedicos.izap.dev/swagger-ui/index.html#/register-controller/login/',
})