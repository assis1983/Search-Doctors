import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const deleteSpecialties = async (id: number) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/specialties/${id}`, {
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
