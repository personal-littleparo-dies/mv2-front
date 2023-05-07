import axios, { AxiosRequestConfig } from "axios";

// TODO: read environment variable and set baseURL based on it
// const baseURL = "http://localhost:8000/api/v1/";
const baseURL = "/api/v1/";

const get = <T>(url: string, config?: AxiosRequestConfig) => {
  return axios.get<T>(`${baseURL}${url}`, config);
};

const post = <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
  return axios.post<T>(`${baseURL}${url}`, data, config);
};

export const api = {
  get,
  post,
};
/* ...or you can do this
import axios, { AxiosResponse } from "axios";

export const callApi = async <T>(
  method: "GET" | "POST",
  url: string,
  data?: any
): Promise<AxiosResponse<T>> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "GET") {
    return await axios.get<T>(url, config);
  } else {
    return await axios.post<T>(url, data, config);
  }
};
*/
