import { AxiosResponse } from "axios"
import { api } from "../Api/apiservice"
import Pagination from "../../types/types"

type SpecialtiesApi = Pagination & {
  content: {
    id: number
    name: string
    enabled: boolean
  }[]
}

export const getSpecialties = async () => {
  try {
    const token = localStorage.getItem("token")
    const result: AxiosResponse<SpecialtiesApi> = await api.get(
      "/specialties",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return result.data.content
  } catch (error) {
    console.log(error)
  }
}

