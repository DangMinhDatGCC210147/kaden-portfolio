import * as React from "react";

export function useIsMobile(breakpointPx = 768) {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpointPx}px)`);
        const update = () => setIsMobile(mq.matches);
        update();

        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, [breakpointPx]);

    return isMobile;
}
