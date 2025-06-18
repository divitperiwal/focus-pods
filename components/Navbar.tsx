import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-[90%] h-[100px] flex items-center justify-between m-auto p-4">
      <div className="flex items-center justify-center gap-1">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-contain rounded-full select-none"
        />
        <span className="font-bold text-xl text-[#1B2E57] select-none">FocusPods</span>
      </div>

      <div className="flex items-center justify-betwee gap-2">
        <Button className="cursor-pointer bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] hover:shadow-md select-none">Generate Focus Music</Button>

        <Button className="bg-white hover:bg-white text-black cursor-pointer hover:shadow-md transition-all duration-200 select-none" >Login / SignUp</Button>
      </div>
    </nav>
  );
};

export default Navbar;
