import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const postNotifications = async (
  title: string,
  sendingDate: string,
  message: string
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/notifications",
      {
        title,
        sendingDate,
        message,
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
