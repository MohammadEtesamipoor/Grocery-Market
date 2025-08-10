import { useState, useEffect } from 'react';

function useTimer(discountExpireDate:string|undefined) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const originalDate = new Date(discountExpireDate!);


        const extendedDate = new Date(originalDate);
        extendedDate.setFullYear(extendedDate.getFullYear() + 1);
        extendedDate.setMonth(extendedDate.getMonth() + 2);

        const expireTime = extendedDate.getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const diff = expireTime - now;

            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }

        const intervalId = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(intervalId);
    }, [discountExpireDate]);

    return timeLeft;
}

export default useTimer;
