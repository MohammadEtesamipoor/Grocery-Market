export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export function getTimeLeft(totalSeconds: number): TimeLeft {
    let diff = Math.max(0, totalSeconds);

    const days = Math.floor(diff / (60 * 60 * 24));
    diff -= days * 60 * 60 * 24;

    const hours = Math.floor(diff / (60 * 60));
    diff -= hours * 60 * 60;

    const minutes = Math.floor(diff / 60);
    diff -= minutes * 60;

    const seconds = diff;

    return { days, hours, minutes, seconds };
}


