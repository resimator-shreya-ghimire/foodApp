
export const useLockBodyScroll = ({ lock }: { lock: boolean }) => {
    if (lock) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}
