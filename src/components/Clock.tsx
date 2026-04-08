import { useSettingsStore } from "@/stores/settingsStore";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";

function Clock() {
  const radius = 115;
  const circumference = 2 * Math.PI * radius;

  const mode = useSettingsStore((state) => state.mode);
  const timeForMode = useSettingsStore((state) => state.time[mode]);
  const font = useSettingsStore((state) => state.font);
  const color = useSettingsStore((state) => state.color);

  const totalSeconds = timeForMode * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const progress = timeLeft / totalSeconds;
  const strokeDashoffset = circumference * (1 - progress);

  const formatTime = (seconds: number) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
    const ss = String(seconds % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  }, [mode, totalSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return timeLeft - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleButton = () => {
    if (timeLeft === 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    } else {
      setIsRunning((isRunning) => !isRunning);
    }
  };

  return (
    <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-linear-to-br from-[#0E112A] to-[#2E325A] p-[22px] shadow-[-50px_-50px_100px_#272C5A,50px_50px_100px_#121530] sm:h-[410px] sm:w-[410px]">
      <svg
        viewBox="0 0 300 300"
        className="pointer-events-none absolute h-full w-full -rotate-90"
      >
        <circle
          cx="150"
          cy="150"
          r={radius}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={clsx(
            "fill-none transition-all duration-1000 ease-linear",
            {
              "stroke-red-400": color === "red",
              "stroke-cyan-300": color === "cyan",
              "stroke-purple-400": color === "purple",
            },
          )}
        />
      </svg>

      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-blue-900">
        <h2
          className={clsx("text-[80px] text-blue-100 sm:text-[100px]", {
            "font-kumbh-sans leading-[125%] font-bold tracking-[-5px]":
              font === "Kumbh Sans",
            "font-roboto-slab leading-[133%] font-bold tracking-[0px] sm:leading-[130%]":
              font === "Roboto Slab",
            "font-space-mono leading-[120%] tracking-[-10px] sm:leading-[150%]":
              font === "Space Mono",
          })}
        >
          {formatTime(timeLeft)}
        </h2>
        <button
          onClick={handleButton}
          className={clsx(
            "cursor-pointer text-sm font-bold tracking-[13px] text-blue-100 uppercase sm:text-base sm:tracking-[15px]",
            {
              "font-kumbh-sans leading-[120%] sm:leading-[125%]":
                font === "Kumbh Sans",
              "font-roboto-slab leading-[130%] sm:leading-[125%]":
                font === "Roboto Slab",
              "font-space-mono leading-[150%]": font === "Space Mono",
            },
          )}
        >
          {timeLeft === 0 ? "Restart" : isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}

export { Clock };
