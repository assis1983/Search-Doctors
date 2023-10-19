import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";

export const putSpecialties = async (id: number) => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse = await api.put(
      `/specialties/${id}`,
      {
        id,
      },
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
