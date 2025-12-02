import { useToastStore } from "@/store/toastStore";
import { ToastItem } from "@/components/Toast/ToastItem";

export const ToastHost = () => {
    const { toasts, hideToast } = useToastStore();

    if (toasts.length === 0) return null;

    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md">
            {toasts.map((toast) => (
                <ToastItem key={toast.id} toast={toast} onClose={hideToast} />
            ))}
        </div>
    );
};
