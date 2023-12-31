import axios from "axios";
import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";
import Pagination from "../../types/types";

type PlansApi = Pagination & {
  content: {
    id: number;
    name: string;
    enabled: boolean;
  }[];
};

export const getNotification = async () => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse<PlansApi> = await api.get("/notifications", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data.content;
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
