import { getTokens } from "../shared/helpers/authHelpers";

export const useAuth = () => {
  return !!getTokens().accessToken;
};
