import { useState } from "react";
import { Icon } from "@/components/icon/Icon";
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

export type ToastType = "success" | "error" | "warning" | "info";

export type ToastData = {
    type: ToastType;
    message: string;
    id: number;
}

type ToastItemProps = {
    toast: ToastData;
    onClose: (id: number) => void;
}

const toastType = {
    success: {
        text: "text-green-800",
        icon: faCheckCircle,
        iconColor: "text-green-500"
    },
    error: {
        text: "text-red-800",
        icon: faExclamationCircle,
        iconColor: "text-red-500"
    },
    warning: {
        text: "text-yellow-800",
        icon: faExclamationTriangle,
        iconColor: "text-yellow-500"
    },
    info: {
        text: "text-blue-800",
        icon: faInfoCircle,
        iconColor: "text-blue-500"
    }
}

export const ToastItem = ({ toast, onClose }: ToastItemProps) => {
    const [isExiting, setIsExiting] = useState(false);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            onClose(toast.id);
        }, 300);
    };

    const styles = toastType[toast.type];

    return (
        <div
            className={`
                ${isExiting ? 'animate-slide-out-right' : 'animate-slide-in-right'}
                border-l-4 shadow-lg p-4 flex items-start gap-3 min-w-[300px]
                transition-all duration-300 z-10 bg-primary/100
            `}
        >
            <Icon icon={styles.icon} className={`${styles.iconColor} text-xl mt-0.5`} />
            <p className={`${styles.text} flex-1`}>{toast.message}</p>
            <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close toast"
            >
                <Icon icon={faTimes} className="text-lg" />
            </button>
        </div>
    );
};
