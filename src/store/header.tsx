import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type HeaderStore = {
    showTopHeader: boolean;
    setShowTopHeader: (show: boolean) => void;
}

export const useHeaderStore = create<HeaderStore>()(persist((set) => ({
    showTopHeader: true,
    setShowTopHeader: (show: boolean) => set({ showTopHeader: show }),
}), {
    name: 'header-store',
    storage: createJSONStorage(() => sessionStorage),
}));
