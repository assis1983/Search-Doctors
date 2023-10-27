import axios from "axios";
import { api } from "../Api/apiservice";

export const putQuestion = async (
  id: number,
  planTitle: string,
  message: string
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put(
      `/questions/${id}`,
      {
        planTitle,
        message,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        return { logged: false, message: "Credenciais Inválidas" };
      }
      if (error.response?.status === 404) {
        return { logged: false, message: "Página Não Encontrada" };
      }
    }
  }

  return {
    logged: true,
    message: "Erro ao alterar os dados",
  };
};
