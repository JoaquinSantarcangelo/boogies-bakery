import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Navbar = () => {
  return (
    <motion.div
      initial="hidden"
      transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
      exit="exit"
      animate="visible"
      variants={variants}
      className="navbar container"
    >
      <div className="logo">
        <img src="assets/img/Logo.svg" alt="" />
      </div>
      <div className="buttons">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div className="button">Inicio</div>
        </Link>
        <Link
          to="/nosotros"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="button">Nosotros</div>
        </Link>
        <Link
          to="/productos"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="button">Productos</div>
        </Link>
        <Link
          to="/comprar"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="button">Comprar</div>
        </Link>
        <Link
          to="/contacto"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="button">Contacto</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
