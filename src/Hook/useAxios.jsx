import axios from "axios";
const axiosBase = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxios = () => {
  return axiosBase;
};

export default useAxios;
