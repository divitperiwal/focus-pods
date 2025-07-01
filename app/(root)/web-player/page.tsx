"use client";

import Loader from "@/components/Loader";
import OptionCards from "@/components/OptionCards";
import SongPlayer from "@/components/SongPlayer";
import { Button } from "@/components/ui/button";
import { useMusicSetup } from "@/store/useMusicSetup";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeLeft,
  slideUp,
  OptionStaggerContainer,
  SectionStagger,
  zoomIn,
} from "@/constant/animation";

const WebPlayer = () => {
  const {
    selectedFocus,
    selectedGenre,
    selectedDuration,
    setFocus,
    setGenre,
    setDuration,
  } = useMusicSetup();
  const [isLoading, setisLoading] = useState(false);
  const [isSongGenerated, setisSongGenerated] = useState(false);
  const isAllSelected = selectedFocus && selectedGenre && selectedDuration;

  const focusOptions = [
    { label: "Coding", imageurl: "/assets/icons/code.svg" },
    { label: "Writing", imageurl: "/assets/icons/writing.svg" },
    { label: "Studying", imageurl: "/assets/icons/studying.svg" },
    { label: "Design", imageurl: "/assets/icons/beaker.svg" },
    { label: "Meditation", imageurl: "/assets/icons/sparkle.svg" },
    { label: "Sleeping", imageurl: "/assets/icons/moon.svg" },
  ];

  const genreOptions = ["Lo-fi", "Ambient", "Nature", "Classical"];
  const durationOptions = ["1 min", "5 min", "15 min", "30 min", "45 min"];

  const handleGenerateMusic = async () => {
    setisLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setisSongGenerated(true);
    setisLoading(false);
  };

  if (isLoading) return <Loader />;
  if (isSongGenerated) return <SongPlayer />;

  return (
    <motion.main
      variants={SectionStagger}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      <section className="flex flex-col lg:flex-row items-center justify-between w-[90%] m-auto mt-12 gap-8 px-4">
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          {/* Heading */}
          <motion.div variants={fadeLeft}>
            <h1 className="tracking-wider font-semibold text-5xl sm:text-5xl lg:text-6xl leading-14 sm:leading-tight">
              Setup
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.span
            variants={slideUp}
            className="text-gray-700 text-sm sm:text-base"
          >
            Generate focus music tailored to your needs.
          </motion.span>

          {/* Focus Section */}
          <motion.div variants={fadeLeft} className="mt-4 w-full">
            <h1 className="text-2xl font-bold">Focus</h1>
          </motion.div>
          <motion.div
            variants={OptionStaggerContainer}
            className="flex w-full flex-wrap items-center justify-start gap-4"
          >
            {focusOptions.map((item) => (
              <OptionCards
                key={item.label}
                {...item}
                selected={selectedFocus === item.label}
                onClick={() => setFocus(item.label)}
              />
            ))}
          </motion.div>

          {/* Genre Section */}
          <motion.div variants={fadeLeft} className="mt-4 w-full">
            <h1 className="text-2xl font-bold">Genre</h1>
          </motion.div>
          <motion.div
            variants={OptionStaggerContainer}
            className="flex w-full flex-wrap items-center justify-start gap-4"
          >
            {genreOptions.map((label) => (
              <OptionCards
                key={label}
                label={label}
                selected={selectedGenre === label}
                onClick={() => setGenre(label)}
              />
            ))}
          </motion.div>

          {/* Duration Section */}
          <motion.div variants={fadeLeft} className="mt-4 w-full">
            <h1 className="text-2xl font-bold">Duration</h1>
          </motion.div>
          <motion.div
            variants={OptionStaggerContainer}
            className="flex w-full flex-wrap items-center justify-start gap-4"
          >
            {durationOptions.map((label) => (
              <OptionCards
                key={label}
                label={label}
                selected={selectedDuration === label}
                onClick={() => setDuration(label)}
              />
            ))}
          </motion.div>

          {/* Button */}
          <motion.div
            variants={zoomIn}
            className="mt-6 mb-4 self-center lg:self-end"
          >
            <Button
              className="h-16 w-64 rounded-full text-lg cursor-pointer select-none"
              disabled={!isAllSelected}
              onClick={handleGenerateMusic}
            >
              Generate Music
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default WebPlayer;
