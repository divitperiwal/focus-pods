"use client";
import { useEffect, useState } from "react";

function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

const LiveClock = () => {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    setTime(getFormattedTime());

    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      setTime(getFormattedTime());

      const interval = setInterval(() => {
        setTime(getFormattedTime());
      }, 60 * 1000);


      return () => clearInterval(interval);
    }, msUntilNextMinute);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="text-7xl sm:text-9xl md:text-8xl lg:text-9xl xl:text-[14rem] text-white font-mono font-semibold select-none text-center">
      {time}
    </span>
  );
};

export default LiveClock;
