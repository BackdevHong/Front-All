import { create } from "zustand";
import { devtools, persist } from "zustand/middleware"

let counterStore = (set) => ({
    count: 1,
    increment: () => set((state) => ({count: state.count + 1})),
    reset: () => set(() => ({ count : 1 })),
    setInt: (int) => set(() => ({ count: Number(int)}))
  })

counterStore = devtools(counterStore);
counterStore = persist(counterStore, {name: 'counter'})

export const useCounterStore = create(counterStore)
