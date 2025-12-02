import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

type Options = {
  rootMargin?: string;
}

export function useLazyLoadingOnIntersection(
  ref?: RefObject<HTMLElement | null>,
  options: Options = {}
) {
  const { rootMargin = "200px" } = options;
  const localRef = useRef<HTMLElement | null>(null);
  const observedRef = ref ?? localRef;

  const [visible, setVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = observedRef?.current;
    if (!node) return;

    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              io.disconnect();
            }
          });
        },
        { rootMargin }
      );

      io.observe(node);
      return () => io.disconnect();
    }
    setVisible(true);

    return;
  }, [observedRef, rootMargin]);

  useEffect(() => {
    if (!visible) return;
    setShouldLoad(true);
  }, [visible]);

  return { ref: observedRef, visible, shouldLoad };
}

export default useLazyLoadingOnIntersection;