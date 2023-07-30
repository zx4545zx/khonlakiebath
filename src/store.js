import { create } from "zustand";

export const useNavStore = create((set) => ({
  // bears: 0,
  page: 0,
  // increasePopulation: () =>
  //   set((state) => ({
  //     bears: state.bears + 1,
  //   })),
  // removeAllBears: () => set({ bears: 0 }),
  setPage: (v) =>
    set({
      page: v,
    }),
}));

export const useCalStore = create((set) => ({
  promptpay: null,
  dis: "",
  list: [],
  setPromptpay: (v) =>
    set({
      promptpay: v,
    }),
  setDis: (v) =>
    set({
      dis: v,
    }),
  pushList: (v) =>
    set((state) => ({
      list: [...state.list, v],
    })),
  removeList: (index) =>
    set((state) => ({
      list: state.list.filter((v, i) => i !== index),
    })),
}));

export const useDialogStore = create((set) => ({
  open: false,
  handleClickOpen: () =>
  set({
    open: true,
  }),
  handleClose: () =>
  set({
    open: false,
  }),
}));
