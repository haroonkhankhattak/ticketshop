import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
    initialMinutes: number;
    initialSeconds: number;
}

const Timer: React.FC<TimerProps> = ({ initialMinutes, initialSeconds }) => {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [minutes, seconds]);

    return (
        <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center gap-2 text-gray-700">
                <Clock className="h-5 w-5" />
                <span>
                    The tickets are reserved for you. {minutes}:{seconds < 10 ? `0${seconds}` : seconds} remaining to finish your order.
                </span>
            </div>
        </div>
    );
};

export default Timer;