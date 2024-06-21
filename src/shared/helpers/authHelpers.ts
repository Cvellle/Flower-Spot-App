import { IUser } from "../../api/types";

export const saveTokens = (resp: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem("accessToken", resp.accessToken);
  localStorage.setItem("refreshToken", resp.refreshToken);
};

export const getTokens = () => {
  return {
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  };
};

export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const saveUser = (user: IUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const rmoveUser = (user: IUser) => {
  localStorage.removeItem("user");
};
