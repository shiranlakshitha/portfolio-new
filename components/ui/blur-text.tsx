"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
};

// Adapted from React Bits' documented Blur Text component for a one-time name reveal.
export function BlurText({ text, className }: BlurTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <motion.h1
      className={cn("flex flex-wrap gap-x-[0.22em]", className)}
      aria-label={text}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.11 } },
      }}
    >
      {words.map((word) => (
        <motion.span
          aria-hidden="true"
          key={word}
          className="inline-block"
          variants={{
            hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, filter: "blur(10px)", y: 12 },
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
