import React from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { y: 150 },
  visible: {
    y: 0,
    transition: {
      delay: 2.4,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    y: 150,
    transition: {
      delay: 0,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <div className="home container">
      <div className="texts-wrapper">
        <div className="title">
          <motion.h1
            initial="hidden"
            exit="exit"
            animate="visible"
            variants={variants}
          >
            #THEBESTPOTATOBREAD
          </motion.h1>
        </div>
        <div className="subtitle">
          <motion.h4
            initial="hidden"
            exit="exit"
            animate="visible"
            variants={variants}
          >
            Mas de 50 años de experiencia
          </motion.h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
