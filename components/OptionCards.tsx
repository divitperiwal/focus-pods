import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils"; 

interface OptionCardProps {
  label: string;
  imageurl?: string;
  selected?: boolean;
  onClick?: () => void;
}

const OptionCards = ({ label, imageurl, selected, onClick }: OptionCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-md cursor-pointer w-full sm:w-[200px] transition-all duration-200 select-none border-2",
        selected
          ? "border-blue-500 bg-blue-50 text-blue-900 scale-[1.03]"
          : "border-transparent hover:scale-105"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        {imageurl && (
          <Image
            src={imageurl}
            width={24}
            height={24}
            alt="Feature Icon"
            className="min-w-[24px] min-h-[24px]"
          />
        )}
        <span className="text-base font-semibold">{label}</span>
      </div>
    </div>
  );
};

export default OptionCards;
