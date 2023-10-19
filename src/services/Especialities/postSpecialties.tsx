import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";

type SpecialtiesApi = {
  content: {
    name: string;
    enabled: boolean;
  }[];
};

export const postSpecialties = async () => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse<SpecialtiesApi> = await api.post(
      "/specialties",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return result.data.content;
  } catch (error) {
    console.log(error);
  }
};
