import ApiResponse from "@/types/apiResponse";
import axios, { AxiosError, AxiosResponse } from "axios";
import { tree } from "next/dist/build/templates/app-page";

const AxiosInstance = axios.create({
  baseURL: `${process.env.API_URL_BASE}/`,
  timeout: 3000,
});

AxiosInstance.interceptors.response.use(
  (response : AxiosResponse)  => {

    const apiResponse : ApiResponse<any> = {
      data: response.data,
      success: true,
      statusCode: response.status,
      message: ""
    }

    response.data = apiResponse

    return response.data
  },
  (error: AxiosError) => {
    if (error.response) 
      return {
        data: error.response.data,
        success: true,
        statusCode: error.response.status,
        message: ""
      }
    else {
      return {
        success: false,
        statusCode: error.request ? 503 : 500,
        data: undefined,
        message: error.request
          ? "No se pudo conectar con el servicio requerido"
          : error.message,
      };
    }
  }
);

export default AxiosInstance;
