import FeatureCarousel from "@/components/FeatureCarousel";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <section className="flex items-center justify-between p-4 w-[90%] m-auto mt-10">
        <div className="flex items-start flex-col justify-center w-full gap-8">
          <div className="flex items-start justify-start flex-col w-[60%]  tracking-wider font-semibold text-7xl gap-2 font-roboto-condensed">
            <h1 className="word-spacing-wide">Enter the Flow</h1>
            <h1 className="word-spacing-wide">State. Every Time.</h1>
          </div>
          <div>
            <span className="text-gray-700">AI-generated focus music, personalized for your flow</span>
          </div>

          <div className="flex items-center justify-center flex-row gap-4 mt-4 flex-wrap">
            <Button className="bg-gradient-to-r from-[#00e0ff] via-[#3b82f6] to-[#6366f1] text-base h-16 w-56 rounded-full cursor-pointer">
              Generate Focus Music
            </Button>
            <Button className="bg-white text-black hover:bg-white cursor-pointer hover:shadow-md text-base h-16 w-56 rounded-full">
              Try Demo Session
            </Button>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-between w-[90%] p-4 mx-auto mt-12 flex-row">
      <FeatureCarousel/>
      </section>
    </main>
  );
};

export default Home;
