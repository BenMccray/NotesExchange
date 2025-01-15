import {create, set} from "zustand";


export const useStore = create((set) => {
    user = undefined;
    setUser = (user) => set({user});
})