import { LoginInput } from "../pages/login.page";
import { RegisterInput } from "../pages/register.page";
import { API } from "../services/axiosService";
import { GenericResponse, ILoginResponse, IUserResponse } from "./types";

API.defaults.headers.common["Content-Type"] = "application/json";

export const refreshToken = async (refreshToken: string) => {
  const response = await API.post<GenericResponse>(
    "account/refresh",
    refreshToken
  );
  return response.data;
};

export const signUpUserFn = async (user: RegisterInput) => {
  const response = await API.post<GenericResponse>("account/register", user);
  return response.data;
};

export const loginUserFn = async (user: LoginInput) => {
  const response = await API.post<ILoginResponse>("account/login", user);
  return response.data;
};

export const getMeFn = async () => {
  const response = await API.get<IUserResponse>("account/me");
  return response.data;
};
