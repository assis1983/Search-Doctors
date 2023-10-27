import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

const deleteNotifications = async (id: number) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/notifications/${id}`, {
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

export default deleteNotifications;
