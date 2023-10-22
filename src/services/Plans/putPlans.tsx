import { isAxiosError } from "axios";
import { api } from "../Api/apiservice";

export const putPlan = async (
  id: number,
  planTitle: string,
  enabled: boolean,
  period: string,
  type: string,
  values: number
) => {
  try {
    const token = localStorage.getItem("token");
    const response = await api.put(
      `/plans/${id}`,
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
