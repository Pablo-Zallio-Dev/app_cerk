import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CerkState } from "../types/cerk.interface";



export const useCerkStore = create<CerkState>()(
  persist(
    (set, get) => ({
      userName: "",
      contactName: "",
      phoneContact: "",
      message: "Necesito ayuda. Por favor, contacta a las autoridades.",
      shareLocation: true,
      hasStarted: false,
      setHasStarted: (hasStarted) => set({ hasStarted }),
      setUserName: (userName) => set({ userName }),

      setContactName: (contactName) => set({ contactName }),

      setPhoneContact: (phoneContact) => set({ phoneContact }),

      setMessage: (message) => set({ message }),

      setShareLocation: (shareLocation) => set({ shareLocation }),

      isConfigurationComplete: () => {
        const { phoneContact, message } = get();
        return phoneContact.trim() !== "" && message.trim() !== "";
      },
    }),
    {
      name: "cerk-store",
    },
  ),
);
