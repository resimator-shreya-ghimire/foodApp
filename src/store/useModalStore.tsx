import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ModalData = {
    id?: string;
    isOpen?: boolean;
    hasOpen?: boolean;
    title?: string;
    content?: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmText?: string;
    cancelText?: string;
};

type ModalStore = {
    modals: ModalData[];
    currentModal: ModalData | null;
    isOpen: boolean;
    showModal: (modal: ModalData) => void;
    hideModal: (id: string | undefined) => void;
};

export const useModalStore = create<ModalStore>()(
    persist(
        (set) => ({
            modals: [],
            currentModal: null,
            isOpen: false,
            showModal: (modal: ModalData) => {
                if (!modal?.id) {
                    modal.id = Date.now().toString();
                }
                set({
                    isOpen: true,
                    currentModal: modal,
                });
            },

            hideModal: () => {
                set({
                    isOpen: false,
                    currentModal: null,
                });
            },
        }),
        {
            name: "modal-store",
            partialize: (state) => ({
                modals: state.modals,
            }),
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
