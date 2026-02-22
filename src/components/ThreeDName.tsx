import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// SVG-based extruded text effect to avoid heavy 3D font dependencies.
const ThreeDName: React.FC = () => {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // initial morph animation
    controls.start({
      y: [20, 0],
      opacity: [0, 1],
      transition: { duration: 0.9 },
    });
  }, [controls]);

  return (
    <div
      className="w-full h-full flex items-center justify-center perspective-1000"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 200"
        preserveAspectRatio="xMidYMid meet"
        className="mx-auto"
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 60 }}
      >
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="100%" stopColor="#7d4eff" />
          </linearGradient>
          <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* extruded layers for faux 3D */}
        <g transform="translate(50,140)">
          {[...Array(8)].map((_, i) => (
            <motion.text
              key={i}
              x="0"
              y="0"
              fontFamily="Segoe UI, Roboto, sans-serif"
              fontWeight={900}
              fontSize={72}
              fill={i === 0 ? "url(#g1)" : "rgba(0,0,0,0.06)"}
              transform={`translate(${i * 3},${i * -2})`}
              style={{ letterSpacing: 6 }}
              opacity={i === 0 ? 1 : 0.9}
            >
              SAKIN BARUA LIKHAN
            </motion.text>
          ))}

          {/* neon front with glow */}
          <motion.text
            x="0"
            y="0"
            fontFamily="Segoe UI, Roboto, sans-serif"
            fontWeight={900}
            fontSize={72}
            fill="url(#g1)"
            style={{ letterSpacing: 6, filter: "url(#blurGlow)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={controls}
          >
            SAKIN BARUA LIKHAN
          </motion.text>
        </g>
      </motion.svg>
    </div>
  );
};

export default ThreeDName;
