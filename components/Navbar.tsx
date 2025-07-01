"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full px-4 sm:px-6 md:px-10 lg:px-[5%] h-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0"
    >
      <div className="w-full flex items-center justify-between sm:justify-start sm:gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="object-contain rounded-full select-none"
          />
          <span className="font-bold text-xl text-[#1B2E57] select-none">
            FocusPods
          </span>
        </Link>

        <Button className="bg-white hover:bg-white text-black cursor-pointer hover:shadow-md transition-all duration-200 select-none sm:hidden border-gray-300 border-2 rounded-full">
          Login / Signup
        </Button>
      </div>

      <div className="hidden sm:flex items-center justify-center gap-2">
        <Link href={"/web-player"}>
          <Button className="cursor-pointer bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] hover:shadow-md select-none">
            Generate Focus Music
          </Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button className="bg-white hover:bg-white text-black cursor-pointer hover:shadow-md transition-all duration-200 select-none">
            Login / SignUp
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
