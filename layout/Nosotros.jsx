import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, rotateZ: -5 },
  visible: {
    opacity: 1,
    rotateZ: [0, 0, -5],
    overflow: "none",
    transition: {
      duration: 1.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    rotateZ: 0,
    transition: {
      delay: 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Nosotros = () => {
  return (
    <div className="nosotros container">
      <div className="title">
        <motion.h1
          initial="hidden"
          exit="exit"
          animate="visible"
          variants={variants}
        >
          Nosotros
        </motion.h1>
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Nosotros;
