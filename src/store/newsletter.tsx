import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type NewsletterStore = {
    showNewsLetter: boolean;
    newsletterData: { [key: string]: boolean };
    setShowNewsLetter: (email: string, show: boolean) => void;
};

export const useNewsletterStore = create<NewsletterStore>()(
    persist(
        (set) => ({
            showNewsLetter: true,
            newsletterData: {},
            setShowNewsLetter: (email: string, show: boolean) => {
                const newsletterData = set.getState().newsletterData;
                if (!newsletterData[email]) {
                    set({ showNewsLetter: show })
                    newsletterData[email] = show;
                }
            },
        }),
        {
            name: "newsletter-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
