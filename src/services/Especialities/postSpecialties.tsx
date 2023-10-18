import { api } from "../Api/apiservice";

export const postSpecialties = async () => {
  try {
    const token = localStorage.getItem("token");
    const result = await api.post("/specialties", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return result.data.content;
  } catch (error) {
    console.log(error);
  }
};
