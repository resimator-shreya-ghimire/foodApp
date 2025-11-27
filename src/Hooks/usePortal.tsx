import { useEffect, useState } from "react";

export function usePortal(id: string = "portal-root") {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        let el = document.getElementById(id);

        if (!el) {
            el = document.createElement("div");
            el.id = id;
            document.body.appendChild(el);
        }
        setPortalElement(el);

        return () => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
    }, [id]);

    return portalElement;
}
