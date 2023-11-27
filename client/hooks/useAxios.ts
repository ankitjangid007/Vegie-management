import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const useAxios = () => {
  const defaultOptions = {
    baseURL,
  };

  const instance: AxiosInstance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const authToken = localStorage.getItem("token");

    if (authToken) {
      request.headers.Authorization = authToken;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("error", error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxios;
