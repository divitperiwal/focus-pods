"use client";

import React, { useRef } from "react";
import FeaturesCard from "./FeaturesCard";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const FeatureCarousel = () => {
  const features = [
    {
      title: "Task-Specific Music",
      description: "AI-generated soundscapes optimized for coding, writing, or any creative work.",
      imageurl: "/assets/icons/musical-note.svg",
    },
    {
      title: "Pomodoro Sync",
      description: "Built-in Pomodoro timer with smart music fade in and out.",
      imageurl: "/assets/icons/clock.svg",
    },
    {
      title: "Flow-State Tracking",
      description: "Real-time focus score based on session duration and consistency.",
      imageurl: "/assets/icons/signal.svg",
    },
    {
      title: "Mood Personalization",
      description: "Select chill, intense, or uplifting vibes tailored to your workflow.",
      imageurl: "/assets/icons/smile.svg",
    },
    {
      title: "Session Analytics",
      description: "Track time focused, distractions avoided, and mood feedback after sessions.",
      imageurl: "/assets/icons/chart-bar.svg",
    },
    {
      title: "Auto Dark/Light Mode",
      description: "Smooth transitions between themes for day and night productivity.",
      imageurl: "/assets/icons/moon.svg",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: true }));

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {features.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-[80%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 py-2"
          >
            <FeaturesCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default FeatureCarousel;
