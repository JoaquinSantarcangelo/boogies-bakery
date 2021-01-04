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
      delay: 0,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const variantsCard = {
  hidden: { width: "40%" },
  visible: { width: "45%", transition: {
    delay: 1.4,
    duration: 1
  }},
};

const products = [
  { nombre: "Pan de Papa" },
  { nombre: "Slider de Papa" },
  { nombre: "Pan de Papa", desc: "Con semillas de sésamo" },
  { nombre: "Pan de Pancho" },
];

const Card = () => {
  return (
    <motion.div
      variants={variantsCard}
      initial="hidden"
      animate="visible"
      className="card"
    ></motion.div>
  );
};

const Productos = () => {
  return (
    <div className="productos container">
      <div className="title">
        <motion.h1
          initial="hidden"
          exit="exit"
          animate="visible"
          variants={variants}
        >
          Productos
        </motion.h1>
      </div>
      <div className="content">
        <div className="cards">
          {products.map((p) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Productos;
