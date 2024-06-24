import create from "zustand";
import { IUser } from "../api/types";

type Store = {
  dialogOpen: boolean;
  setUser: (userData: IUser) => void;
  setDialogOpen: (isOpen: boolean) => void;
};

const useStore = create<Store>((set) => ({
  user: null,
  setUser: (userData) => set((state) => ({ ...state, user: userData })),
  dialogOpen: false,
  setDialogOpen: (isOpen) => set((state) => ({ ...state, dialogOpen: isOpen })),
}));

export default useStore;
