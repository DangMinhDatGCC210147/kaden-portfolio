import * as React from "react";

export function useDisableMotion(breakpointPx = 768) {
    const [disable, setDisable] = React.useState(false);

    React.useEffect(() => {
        const mqMobile = window.matchMedia(`(max-width: ${breakpointPx}px)`);
        const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

        const update = () => setDisable(mqMobile.matches || mqReduce.matches);
        update();

        mqMobile.addEventListener("change", update);
        mqReduce.addEventListener("change", update);

        return () => {
            mqMobile.removeEventListener("change", update);
            mqReduce.removeEventListener("change", update);
        };
    }, [breakpointPx]);

    return disable;
}
