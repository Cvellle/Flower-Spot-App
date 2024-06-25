import axios from "axios";
import { refreshToken } from "../api/authApi";
import { saveTokens } from "../shared/helpers/authHelpers";

enum BareerRoutesEnum {
  Me = "account/me",
}

export const apiURL =
  "https://a101116f092d1803361fee7a7e86c79f0665e82a.flowrspot.povio-projects.online";

export const API = axios.create({
  baseURL: apiURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const bareerRoutesArray: string[] = [BareerRoutesEnum.Me];

// request
API.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (
      config.url &&
      config.headers &&
      token &&
      bareerRoutesArray.includes(config.url)
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err) {
    return err;
  }
});

// response
API.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (
      error.response.status === 401 &&
      bareerRoutesArray.includes(error.config.url)
    ) {
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
    return Promise.reject(error);
  }
);
