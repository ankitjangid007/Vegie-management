import useAxios from "@/hooks/useAxios";

const axios = useAxios();

export const getVegetables = async (): Promise<any> => {
  try {
    const res = await axios.get("/vegetables");
    return res.data;
  } catch (error) {
    throw new Error("Data not found!");
  }
};

export const createVegetable = async (data: any): Promise<any> => {
  try {
    const res = await axios.post("/vegetables", data);
    return res.data;
  } catch (error) {
    throw new Error("Data not found!");
  }
};

export const getVegetableById = async (id: string): Promise<any> => {
  try {
    const res = await axios.get(`/vegetables/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Data not found!");
  }
};

export const updateVegetableById = async (
  id: string,
  data: any
): Promise<any> => {
  try {
    const res = await axios.patch(`/vegetables/${id}`, data);
    return res.data;
  } catch (error) {
    throw new Error("Data not found!");
  }
};

export const deleteVegetableById = async (id: string): Promise<any> => {
  try {
    const res = await axios.delete(`/vegetables/${id}`);
    return res.data;
  } catch (error) {
    throw new Error("Data not found!");
  }
};
