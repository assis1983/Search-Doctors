import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";
import Pagination from "../../types/types";

type PlansApi = Pagination & {
  content: {
    id: number;
    name: string;
    enabled: boolean;
    type: string;
  }[];
};

export const getPlans = async () => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse<PlansApi> = await api.get(`/plans`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
    return result.data.content;
  } catch (error) {
    console.log(error);
  }
};
