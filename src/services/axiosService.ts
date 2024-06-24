import axios from "axios";
import { refreshToken } from "../api/authApi";
import { saveTokens } from "../shared/helpers/authHelpers";

export const apiURL =
  "https://a101116f092d1803361fee7a7e86c79f0665e82a.flowrspot.povio-projects.online";

export const API = axios.create({
  baseURL: apiURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Acept: "application/json",
    "Content-Type": "application/json",
  },
});

// request
API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (config.headers && token && config.url === "account/me") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    return err;
  }
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config.url === "account/me") {
      console.log(11);
      let resp = await refreshToken({
        refreshToken: localStorage.getItem("refreshToken"),
      });
      if (resp) {
        API.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${resp.accessToken}`;
        saveTokens(resp);
      }
    }
    // if (error.response.status === 401 && originalRequest._retry) {
    //   alert(123);
    //   originalRequest._retry = true;
    //   const resp =
    //     localStorage.getItem("accessToken") &&
    //     (await refreshToken({
    //       refreshToken: localStorage.getItem("refreshToken"),
    //     }));
    //   if (resp) {
    //     saveTokens(resp);
    //     API.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${resp.accessToken}`;
    //   }

    //   return API(originalRequest);
    // }
    return Promise.reject(error);
  }
);
