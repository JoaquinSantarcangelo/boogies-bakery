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
      delay: 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Contacto = () => {
  return (
    <div className="contacto container">
      <div className="title">
        <motion.h1
          initial="hidden"
          exit="exit"
          animate="visible"
          variants={variants}
        >
          Contacto
        </motion.h1>
      </div>
      <div className="content">
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Contacto;
