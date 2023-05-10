import { axiosInstance } from "../axios/config";

export const getAllGateways = async () => {
  return await axiosInstance.get("/gateways");
};
export const getGatewayDetials = async (id) => {
  return await axiosInstance.get(`/gateways/${id}`);
};
export const addGateWay = async (gateway) => {
  return await axiosInstance.post("/gateways",gateway);
};
export const addGateWayDevice = async (id, getway) => {
  return await axiosInstance.put(`/gateways/${id}`,getway);
};
export const deleteGateWayDevice = async (id, gateway) => {
  return await axiosInstance.put(`/gateways/${id}`,gateway);
};
