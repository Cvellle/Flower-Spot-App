import { LoginInput } from "../components/Login";
import { RegisterInput } from "../components/Signup";

import { API } from "../services/axiosService";
import { IRegisterResponse, IUser } from "./types";

API.defaults.headers.common["Content-Type"] = "application/json";

export const refreshToken = async (refreshToken: {
  refreshToken: string | null;
}) => {
  const response = await API.post<IRegisterResponse>(
    "account/refresh",
    refreshToken
  );
  return response.data;
};

export const signUpUserFn = async (user: RegisterInput) => {
  const response = await API.post<IRegisterResponse>("account/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await API.post<{
    accessToken: string;
    refreshToken: string;
  }>("account/login", user);
  return response.data;
};

export const getMeFn = async () => {
  const response = await API.get<IUser>("account/me");
  return response.data;
};
