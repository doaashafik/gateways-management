import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptors";
export const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8080"
});

axiosInstance.interceptors.request.use(request => requestHandler(request));

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);
