import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card = ({ i }) => {
  const variantsCard = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        delay: 0.4 + i / 2,
        ease: "easeInOut",
        duration: 0.4,
      },
    },
    exit: {
      width: "0%",
      transition: {
        ease: "easeIn",
        duration: 0.8,
      },
    },
  };

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
    <motion.div
      ref={ref}
      variants={variantsCard}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="card"
    ></motion.div>
  );
};
export default Card;
