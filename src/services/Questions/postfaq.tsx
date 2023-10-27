import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const postFaq = async (title: string, message: string, type: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/questions",
      {
        title,
        message,
        type,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return null;
    }
    return null;
  }
};
