import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ModalVariant = "content" | "info";

type ModalData = {
    id?: string;
    isOpen?: boolean;
    variant?: ModalVariant;
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
        (set, get) => ({
            modals: [],
            currentModal: null,
            isOpen: false,
            showModal: (modal: ModalData) => {
                if (!modal?.id) {
                    modal.id = Date.now().toString();
                }
                const { modals } = get();
                const target = modals.find((m) => m.id === modal.id);
                if (!target) {
                    return set({
                        modals: [
                            ...modals,
                            { id: modal.id, isOpen: true, hasOpen: true },
                        ],
                        isOpen: true,
                    });
                }

                if (modal.variant === "content") {
                    return set({
                        modals: modals.map((m) =>
                            m.id === modal.id ? { id: modal.id, isOpen: true, hasOpen: true } : m
                        ),
                        currentModal: modal,
                        isOpen: true,
                    });
                }

                if (modal.variant === "info") {
                    if (!target.hasOpen) {
                        return set({
                            modals: modals.map((m) =>
                                m.id === modal.id
                                    ? { id: modal.id, isOpen: true, hasOpen: true }
                                    : m
                            ),
                            currentModal: modal,
                            isOpen: true,
                        });
                    } else {
                        return set({
                            modals: modals.map((m) =>
                                m.id === modal.id ? { id: modal.id, isOpen: false } : m
                            ),
                            currentModal: null,
                            isOpen: false,
                        });
                    }
                }
            },

            hideModal: () => {
                set((state) => ({
                    modals: state.modals.map((m) =>
                        m.id === state.currentModal?.id ? { ...m, isOpen: false } : m
                    ),
                    isOpen: false,
                }));
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
