import axios from "axios";
import { api } from "../Api/apiservice";

export const getDashboarUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return { message: "Token de autorização ausente" };
    }

    const response = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { message: "Credenciais Inválidas" };
      }

      if (error.response?.status === 404) {
        return { message: "Página não encontrada" };
      }
    }
  }
};
