"use client";

import { motion } from "framer-motion";

const svgMotionVariant = {
  from: {
    opacity: 0,
    pathLength: 0,
  },
  to: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const LogoIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 361 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
      drag
        variants={svgMotionVariant}
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ duration: 2, ease: "easeInOut", }}
        
        d="M223.35 63.6666V276.338C223.35 309.262 214.006 334.622 195.32 352.419C176.93 370.216 152.014 379.114 120.573 379.114C87.6491 379.114 61.2506 369.771 41.3775 351.085C21.5044 332.398 11.5679 305.851 11.5679 271.444H87.2042C87.2042 284.495 89.8737 294.431 95.2128 301.254C100.552 307.779 108.264 311.042 118.349 311.042C127.544 311.042 134.662 308.076 139.705 302.143C144.747 296.211 147.268 287.609 147.268 276.338V63.6666H223.35Z"
        fill="#D1EF1A"
      />
      <motion.path
        variants={svgMotionVariant}
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.7 }}
        d="M13 0H306V70H69C38.0721 70 13 44.9279 13 14V0Z"
        fill="#D1EF1A"
      />
      <motion.path
        variants={svgMotionVariant}
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1}}
        d="M308 -2.3167e-06C337.271 -1.03722e-06 361 23.7289 361 53L361 380L332 380C307.699 380 288 360.301 288 336L288 -3.19093e-06L308 -2.3167e-06Z"
        fill="#D1EF1A"
      />
    </svg>
  );
};
