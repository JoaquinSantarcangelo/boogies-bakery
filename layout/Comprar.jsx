import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import VanillaTilt from "vanilla-tilt";

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
      delay: 1,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const puntosDeVenta = [
  { nombre: "Pan de Papa" },
  { nombre: "Slider de Papa" },
  { nombre: "Pan de Papa", desc: "Con semillas de sésamo" },
  { nombre: "Pan de Pancho" },
];

const Comprar = () => {
  //Parallax Cards
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    setTimeout(() => {
      cards.forEach((c) => {
        VanillaTilt.init(c, { max: 6 });
      });
    }, 2500);
  }, []);

  return (
    <div className="comprar container">
      <div className="title">
        <motion.h1
          initial="hidden"
          exit="exit"
          animate="visible"
          variants={variants}
        >
          Comprar
        </motion.h1>
      </div>
      <div className="content">
        <div className="cards">
          {puntosDeVenta.map((p, i) => {
            return <Card product={p} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comprar;
