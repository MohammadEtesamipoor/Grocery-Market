import { useState } from "react";

const useDebounce = (fn: () => void, delay: number): (() => void) => {
    const [timer, setTimer] = useState<number | undefined>(undefined);

    return function timeout() {
        if (timer) {
            clearTimeout(timer);
        }
        const timerTimeout = window.setTimeout(fn, delay);
        setTimer(timerTimeout);
    };
};

export default useDebounce;
