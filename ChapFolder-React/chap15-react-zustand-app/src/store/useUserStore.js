import { create } from "zustand";
import { devtools } from "zustand/middleware";

let userStore = (set) => (
    {
      user: {},
      fetch : async (id) => {
        const path = `https://jsonplaceholder.typicode.com/users/${id}`
        const response = await fetch(path)
        set({
          user: await response.json()
        });
      }
    }
)

userStore = devtools(userStore)

export const useUserStore = create(userStore)