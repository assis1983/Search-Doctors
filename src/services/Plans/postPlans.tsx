import { api } from "../Api/apiservice";

export const postPlans = async (
  planTitle: string,
  period: string,
  values: number
) => {
  try {
    const response = await api.post("/plans", {
      planTitle: planTitle,
      period: period,
      values: values,
    });

    console.log("Resposta da API:", response.data);
  } catch (error) {
    console.error("Erro na requisição à API:", error);
  }
};
