import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type NewsletterStore = {
    showNewsLetter: boolean;
    setShowNewsLetter: (show: boolean) => void;
};

export const useNewsletterStore = create<NewsletterStore>()(
    persist(
        (set) => ({
            showNewsLetter: true,
            setShowNewsLetter: (show: boolean) => {
                set({ showNewsLetter: show })
            },
        }),
        {
            name: "newsletter-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
