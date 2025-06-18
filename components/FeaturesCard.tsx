import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageurl: string;
}

const FeaturesCard = ({ title, description, imageurl }: FeatureCardProps) => {
  return (
    <div className="bg-white h-[200px] sm:h-[220px] lg:h-[180px] w-full max-w-[324px] rounded-xl px-2 py-2 sm:px-6 sm:py-6 flex items-center justify-center flex-col shadow-md hover:shadow-xl transition-all duration-200 select-none">
      <div className="flex flex-col items-start justify-center gap-4 font-jetbrains text-left w-full">
        <div className="flex items-center gap-2">
          <Image
            src={imageurl}
            width={24}
            height={24}
            alt="Feature Icon"
            className="min-w-[24px] min-h-[24px]"
          />
          <span className="text-base sm:text-lg font-semibold text-gray-900">
            {title}
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-700 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
