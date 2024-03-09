"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mouseMove", mouseMove);
    };
  });

  return (
    <motion.div
      variants={{
        default: {
          x: mousePosition.x - 13,
          y: mousePosition.y - 13,
          border: "5px solid #535f09",
          backgroundColor: "#94a909",
        },
      }}
      transition={{ stiffness: 100 }}
      animate="default"
      className=" h-7 w-7 fixed rounded-full top-0 left-0 pointer-events-none z-50 hidden md:block"
    />
  );
};
