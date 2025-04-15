import React, { useState, useEffect } from "react";
import { Timer as TimerIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <Alert className="bg-white shadow-lg">
      <div className="flex items-center gap-3">
        <TimerIcon className="h-5 w-5 text-ticket-red animate-pulse" />
        <AlertDescription className="text-base text-gray-700">
          The tickets are reserved for you.
          <span className="font-semibold ml-1">
            {minutes}:{seconds < 20 ? `0${seconds}` : seconds} &nbsp;
          </span>
          remaining to finish your order.
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default Timer;
