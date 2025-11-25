import { useToastStore } from "../../store/toastStore";
import { ToastItem } from "./ToastItem";

export const ToastHost = () => {
    const toasts = useToastStore((s) => s.toasts);
    const hideToast = useToastStore((s) => s.hideToast);

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={hideToast} />
            ))}
        </div>
    );
};
