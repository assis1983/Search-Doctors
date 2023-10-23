import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const postPlan = async (
  planTitle: string,
  enabled: boolean,
  period: string,
  type: string,
  values: number
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.post(
      "/plans",
      {
        planTitle,
        enabled,
        period,
        type,
        values,
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
