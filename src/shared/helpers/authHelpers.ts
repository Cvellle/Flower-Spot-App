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
