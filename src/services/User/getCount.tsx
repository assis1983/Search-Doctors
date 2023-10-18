import axios from "axios";
import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";

type UsersApi = {
  total: number;
  totalDoctors: number;
  totalContractor: number;
};

export const getCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse<UsersApi> = await api.get("/users/count", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
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
