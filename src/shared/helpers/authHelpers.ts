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

/////
// import { IUser } from "../../api/types";

// export const saveTokens = (resp: {
//   accessToken: string;
//   refreshToken: string;
// }) => {
//   localStorage.setItem("accessToken", resp.accessToken);
//   localStorage.setItem("refreshToken", resp.refreshToken);
// };

// export const getTokens = () => {
//   return {
//     accessToken: localStorage.getItem("accessToken"),
//     refreshToken: localStorage.getItem("refreshToken"),
//   };
// };

// export const removeTokens = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
// };

// export const getUser = () => {
//   let cookieUser = getCookie("user");
//   return cookieUser;
//   // return localStorage.getItem("user");
// };

// export const saveUser = (user: IUser) => {
//   setCookie("user", JSON.stringify("user"), 60);
//   localStorage.setItem("user", JSON.stringify(user));
// };

// export const rmoveUser = (user: IUser) => {
//   document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   localStorage.removeItem("user");
// };

// export function setCookie(cname: string, cvalue: string, exdays: number) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = "expires=" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// export function getCookie(cname: string) {
//   let name = cname + "=";
//   let ca = document.cookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
