import axios from "axios";
import { api } from "../Api/apiservice";

export const putPlan = async (
  id: number,
  planTitle: string,
  enabled: boolean,
  values: number
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put(
      `/plans/${id}`,
      {
        planTitle,
        enabled,
        values,
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
    logged: false,
    message: "Erro ao alterar os dados",
  };
};
