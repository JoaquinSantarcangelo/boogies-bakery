import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { y: -20, opacity: 0, rotateZ: -5 },
  visible: {
    y: 0,
    opacity: 1,
    rotateZ: [0, 0, -5],
    overflow: "none",
    transition: {
      delay: 0.4,
      duration: 1.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    rotateZ: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <div className="home container">
      <div className="texts-wrapper">
        <motion.div className="title">
          <motion.h1
            ref={ref}
            animate={controls}
            initial="hidden"
            exit="exit"
            variants={variants}
          >
            #THEBESTPOTATOBREAD
          </motion.h1>
        </motion.div>
        {/* <div className="subtitle">
          <motion.h4
            initial="hidden"
            exit="exit"
            animate="visible"
            variants={variants}
          >
            Mas de 50 años de experiencia
          </motion.h4>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
