"use client";

import { useEffect, useState } from "react";

const quotes = [
  "Deep focus is a superpower. 🧠",
  "Your brain loves the sound of silence. 🔇",
  "Pomodoro isn't just a tomato. 🍅",
  "Every session is a step toward mastery. 🪜",
  "Create, don't consume. 🎧",
];

const Loader = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#eef4ff] via-[#f1f5ff] to-[#f5f3ff] transition-all duration-300">
      <div className="text-center px-6 text-xl sm:text-2xl font-semibold text-gray-800 mb-6 select-none">
        {quotes[currentQuote]}
      </div>

      <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#00e0ff] via-[#3b82f6] to-[#6366f1] animate-loader-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
