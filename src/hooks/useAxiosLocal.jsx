import axios from "axios";

const axiosLocal = axios.create({
  baseURL: "https://parcel-management-server-sigma.vercel.app",
});
const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
