import axios from "axios";

export const API = "http://localhost:3000";

export const getListCate = async () => {
  const response = await axios.get(API + "/categories");
  return response.data.data;
};
