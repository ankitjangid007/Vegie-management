import useAxios from "@/hooks/useAxios";

const axios = useAxios();

export const login = async (data: any): Promise<any> => {
  try {
    const res = await axios.post("/auth/login", data);
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const register = async (data: any): Promise<any> => {
  try {
    const res = await axios.post("/auth/register", data);
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
