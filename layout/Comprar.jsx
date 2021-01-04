import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ComprarCard from "../components/ComprarCard";
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
  {
    id: 1,
    position: { lat: -34.8795934, lng: -58.0517832 },
    name: "El Arca Picadas",
    dir: "Cantilo y 21",
    barrio: "City Bell",
    img: "/assets/img/pdv-elarca.jpg",
  },
  {
    id: 2,
    position: { lat: -34.8922761, lng: -58.0215347 },
    name: "Santa Elena",
    dir: "25 esquina 501",
    barrio: "Gonnet",
    img: "/assets/img/pdv-santaelena.jpg",
  },
  {
    id: 3,
    position: { lat: -34.89214, lng: -57.9804819 },
    name: "Don Emilio",
    dir: "7 esquina 522",
    barrio: "Tolosa",
    img: "/assets/img/pdv-donemilio.jpg",
  },
  {
    id: 4,
    position: { lat: -34.9258519, lng: -57.9720938 },
    name: "El Almacen de Fiambres",
    dir: "44 e/ 23 y24",
    barrio: "La Plata",
    img: "/assets/img/pdv-almacendefiambres.jpg",
  },
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
        <motion.h4
          initial={{ opacity: 0 }}
          transition={{ delay: 3.5 }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
          animate={{ opacity: 1 }}
        >
          Contamos con distintos puntos de venta alrededor de la provincia de
          Buenos Aires, mayormente concentrados en la ciudad de La Plata.
        </motion.h4>
      </div>
      <div className="content">
        <div className="cards">
          {puntosDeVenta.map((p, i) => {
            return <ComprarCard key={p.id} product={p} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comprar;
