import { create } from "zustand";
import type { ToastData, ToastType } from "@/components/Toast/ToastItem";

type ToastStore = {
    toasts: ToastData[];
    showToast: (type: ToastType, message: string, duration?: number) => void;
    hideToast: (id: number) => void;
};

export const useToastStore = create<ToastStore>((set, get) => ({
    toasts: [],
    showToast: (type, message, duration = 3000) => {
        const id = Date.now();
        set((state) => ({
            toasts: [...state.toasts, { id, type, message }],
        }));

        if (duration > 0) {
            setTimeout(() => {
                get().hideToast(id);
            }, duration);
        }
    },

    hideToast: (id) => {
        set((state) => ({
            toasts: state.toasts.filter((toast) => toast.id !== id),
        }));
    },
}));
