import React from "react";
import { motion } from "framer-motion";

interface Props {
  word: string;
}

const AnimatedText: React.FC<Props> = ({ word }) => {
  const letters = word.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const child = {
    visible: {
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        mass: 1,
        stiffness: 250,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
    hidden: {
      y: -15,
      transition: {
        type: "spring",
        damping: 10,
        mass: 1,
        stiffness: 250,
        repeat: Infinity,
        repeatDelay: 5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="animted__text"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          style={{ marginRight: "4px" }}
          variants={child}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
