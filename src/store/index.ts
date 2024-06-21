import create from "zustand";
import { IUser } from "../api/types";

type Store = {
  authUser: IUser | null;
  requestLoading: boolean;
  setAuthUser: (user: IUser | null) => void;
};

const useStore = create<Store>((set) => ({
  authUser: null,
  flowers: [],
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
}));

export default useStore;
