import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const postSpecialties = async (name: string, enabled: boolean) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/plans",
      {
        name,
        enabled,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
    console.log(response);
  } catch (error) {
    if (isAxiosError(error)) {
      return null;
    }
    return null;
  }
};
