import OptionCards from "@/components/OptionCards";
import { Button } from "@/components/ui/button";
import React from "react";

const WebPlayer = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const genreArray = [1, 2, 3, 4];
  const durationArray = [1, 2, 3, 4, 5];
  return (
    <main>
      <section className="flex flex-col lg:flex-row items-center justify-between w-[90%] m-auto mt-12 gap-8 px-4">
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <div className="tracking-wider font-semibold text-5xl sm:text-5xl lg:text-6xl leading-14 sm:leading-tight ">
            <h1 className="sm:word-spacing-wide">Setup</h1>
          </div>

          <span className="text-gray-700 text-sm sm:text-base">
            Generate focus music tailored to your needs.
          </span>
          <div className="flex flex-col items-start justify-center mt-4 gap-2">
            <h1 className="text-2xl font-bold ">Focus</h1>
            <div className="flex w-full flex-row items-center justify-start gap-4 flex-wrap flex-grow">
              {array.map((item) => (
                <OptionCards key={item} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-4 gap-2">
            <h1 className="text-2xl font-bold ">Genre</h1>
            <div className="flex w-full flex-row items-center justify-start gap-4 flex-wrap flex-grow">
              {genreArray.map((item) => (
                <OptionCards key={item} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center mt-4 gap-2">
            <h1 className="text-2xl font-bold ">Duration</h1>
            <div className="flex w-full flex-row items-center justify-start gap-4 flex-wrap flex-grow">
              {durationArray.map((item) => (
                <OptionCards key={item} />
              ))}
            </div>
          </div>

            <Button className="absolute right-12 bottom-10 h-16 w-64 rounded-full text-lg cursor-pointer">
              Generate Music
            </Button>
        </div>
      </section>
    </main>
  );
};

export default WebPlayer;
