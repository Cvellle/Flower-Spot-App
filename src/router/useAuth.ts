import { useQuery } from "@tanstack/react-query";
import { getMeFn } from "../api/authApi";
import { getTokens } from "../shared/helpers/authHelpers";

export const useAuth = () => {
  const { data } = useQuery(["user"], async () => await getMeFn(), {
    staleTime: 9000000,
    cacheTime: 9000000,
    enabled: !!getTokens().accessToken,
  });
  return {
    user: data,
    auth: !!data,
    hasToken: !!getTokens().accessToken,
  };
};
