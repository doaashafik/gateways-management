import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptors";
export const axiosInstance = axios.create({
    baseURL: ""
});

axiosInstance.interceptors.request.use(request => requestHandler(request));

axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);
