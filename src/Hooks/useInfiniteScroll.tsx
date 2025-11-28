import { useEffect, type RefObject } from "react"



type InfiniteScrollProps = {
    ref?: RefObject<HTMLElement | null>,
    threshold?: number,
    rootMargin?: string,
    onIntersect: () => void
    enabled?: boolean
}

export const useInfiniteScroll = ({
    ref,
    threshold = 0,
    rootMargin = '0px',
    onIntersect,
    enabled = true
}: InfiniteScrollProps) => {
    useEffect(() => {
        if (!ref?.current || !enabled) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries?.[0]?.isIntersecting) {
                onIntersect();
            }
        }, {
            threshold,
            rootMargin
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, threshold, rootMargin, onIntersect, enabled]);
}
