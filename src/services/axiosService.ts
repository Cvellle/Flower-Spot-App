import axios from "axios";
import { refreshToken } from "../api/authApi";

export const apiURL =
  "https://a101116f092d1803361fee7a7e86c79f0665e82a.flowrspot.povio-projects.online";

export const API = axios.create({
  baseURL: apiURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Acept: "application/json",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});

// request
API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (config.headers) {
      config.headers["x-access-token"] = token;
      token &&
        config.url === "account/me" &&
        (config.headers.Authorization = `Bearer ${token}`);
    }

    return config;
  } catch (err) {
    return config;
  }
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest._retry) {
      originalRequest._retry = true;
      const resp = await refreshToken({
        refreshToken: localStorage.getItem("refreshToken"),
      });
      const access_token = resp.response.accessToken;
      localStorage.setItem("accessToken", resp.response.accessToken);
      localStorage.setItem("refreshToken", resp.response.refreshToken);
      API.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return API(originalRequest);
    }
    return Promise.reject(error);
  }
);
