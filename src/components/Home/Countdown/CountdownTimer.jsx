import React, { useEffect } from "react";

export default function CountdownTimer() {
    const date = ["X", "X", "2025"];

    useEffect(() => {
        const handleScroll = () => {
            const timers = document.querySelectorAll(".countdown_timer");
            timers.forEach((timer) => {
                const rect = timer.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    timer.classList.add("animate");
                } else {
                    timer.classList.remove("animate");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function Time ({ time }) {
        return (
            <div className="time">{time}</div>
        )
    }

    return <div className="countdown_timer">
        <Time time={date[0]} />
        <div className="countdown_timer_divider">:</div>
        <Time time={date[1]} />
        <div className="countdown_timer_divider">:</div>
        <Time time={date[2]} />
    </div>;
}
