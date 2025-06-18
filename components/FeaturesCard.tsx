import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageurl: string;
}

const FeaturesCard = ({ title, description, imageurl }: FeatureCardProps) => {
  return (
    <div className="bg-white h-[180px] w-[324px] rounded-xl px-6 py-4 flex items-center justify-center flex-col shadow-md gap-4 hover:shadow-xl duration-200 transition-all select-none">
      <div className="flex items-center justify-start gap-2 font-jetbrains w-full">
        <Image src={imageurl} width={28} height={28} alt="Musical Note Icon" />
        <span className="text-lg font-semibold ">{title}</span>
      </div>
      <div className="flex items-center justify-start h-[50%]">
        <span className="font-normal leading-snug text-gray-700">{description}</span>
      </div>
    </div>
  );
};

export default FeaturesCard;
