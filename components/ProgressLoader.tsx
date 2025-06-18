"use client";

import React, { useEffect, useState } from "react";

interface ProgressLoaderProps {
  duration: number;
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

const ProgressLoader: React.FC<ProgressLoaderProps> = ({ duration }) => {
  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsedSec = (now - startTime) / 1000;

      if (elapsedSec >= duration) {
        setElapsed(duration);
        clearInterval(interval);
      } else {
        setElapsed(elapsedSec);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, startTime]);

  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl px-2">

      <div className="flex justify-between text-xs sm:text-sm text-gray-300 font-mono mb-2 px-1">
        <span>{formatTime(elapsed)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden relative">
        <div
          className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
          style={{
            width: "100%",
            animation: `loader-progress ${duration}s linear forwards`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressLoader;
