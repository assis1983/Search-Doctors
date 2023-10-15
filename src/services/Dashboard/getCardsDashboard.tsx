import axios from "axios";
import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";
import Pagination from "../../types/types";

type CardsApi = Pagination & {
  total: number;
  available: number;
  unavailable: number;
};

export const getCards = async () => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse<CardsApi> = await api.get("/users/dashboard", {
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
