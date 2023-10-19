import { AxiosResponse } from "axios";
import { api } from "../Api/apiservice";

export const postNewUser = async (userData: string) => {
  try {
    const token = localStorage.getItem("token");
    const result: AxiosResponse = await api.post(
      "/public/register/register-user-account",
      {
        userData,
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
