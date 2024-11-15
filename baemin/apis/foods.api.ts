import axios from "axios";

export const API = "http://localhost:3000";

export const getfoodSearch = async (name: string) => {
  const response = await axios.get(API + `/foods/search?name=${name}`);
  return response.data.data;
};
