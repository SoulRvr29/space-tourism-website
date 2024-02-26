"use client";

import React from "react";
import Image from "next/image";
import logo from "../public/assets/shared/logo.svg";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="min-w-12 max-sm:min-w-10 max-sm:max-w-10 max-sm:mt-2 "
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      <Image src={logo} alt="logo" />
    </motion.div>
  );
};

export default Logo;
