import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const deleteQuestion = async (id: number) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/questions/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return null;
    }
    return null;
  }
};
