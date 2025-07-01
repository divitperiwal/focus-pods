"use client";

import { motion } from "motion/react"
import FeatureCarousel from "@/components/FeatureCarousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeStaggerContainer, fadeLeft, zoomIn, popIn, slideUp } from "@/constant/animation";

const Home = () => {
  return (
    <motion.main variants={HomeStaggerContainer} initial="hidden" animate="show">
      <section className="flex flex-col lg:flex-row items-center justify-between w-[90%] m-auto mt-12 gap-8 px-4">
        <div className="flex flex-col items-start justify-center gap-8 w-full lg:w-[60%]">
          <motion.div
            className="tracking-wider font-semibold text-5xl sm:text-5xl lg:text-7xl font-roboto-condensed leading-14 sm:leading-tight"
            variants={fadeLeft}
          >
            <h1>Enter the Flow State.</h1>
            <h1>Every Time.</h1>
          </motion.div>

          <motion.span
            className="text-gray-700 text-sm sm:text-base"
            variants={zoomIn}
          >
            AI-generated focus music, personalized for your flow
          </motion.span>

          <div className="flex flex-wrap gap-4 mt-4">
            <motion.div variants={popIn} className="w-full sm:w-auto">
              <Link href={"/web-player"}>
                <Button className="cursor-pointer bg-gradient-to-r from-[#00e0ff] via-[#3b82f6] to-[#6366f1] text-base h-14 sm:h-16 w-full sm:w-56 rounded-full select-none">
                  Generate Focus Music
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={popIn} className="w-full sm:w-auto">
              <Button className="bg-white text-black hover:bg-white cursor-pointer hover:shadow-md text-base h-14 sm:h-16 w-full sm:w-56 rounded-full select-none">
                Try Demo Session
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={slideUp}  
          className="hidden lg:block w-full lg:w-[40%]"
        ></motion.div>
      </section>

      <section className="w-[90%] mx-auto mt-18 px-4">
        <FeatureCarousel />
      </section>
    </motion.main>
  );
};

export default Home;
