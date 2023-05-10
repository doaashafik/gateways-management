import { axiosInstance } from "../axios/config";

export const getGateWays = async () => {
  return await axiosInstance.get("/hrcomsite/home/products");
};
export const addGateWay = async () => {
  return await axiosInstance.post("/hrcomsite/home/products");
};
export const addGateWayDevice = async () => {
  return await axiosInstance.post("/hrcomsite/home/products");
};
export const deleteGateWayDevice = async () => {
  return await axiosInstance.delete("/hrcomsite/home/products");
};
