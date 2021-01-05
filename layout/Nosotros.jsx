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
      <div className="content">
        <motion.div
          initial={{ opacity: "0%" }}
          transition={{ when: "beforeChildren", staggerChildren: 1 }}
          exit={{
            width: "0%",
            transition: { delay: 1, duration: 1, when: "afterChildren" },
          }}
          animate={{ opacity: "100%" }}
          className="card"
        >
          <motion.h4
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            animate={{ opacity: 1 }}
          >
            Somos una empresa familiar que inició en el rubro en 1936, a lo
            largo de los años fuimos especializándonos en distintos segmentos
            dentro del rubro, hasta hoy en dia ser especialistas en los{" "}
            <span>panificados de papa</span>.
          </motion.h4>
          <motion.h4
            initial={{ opacity: 0 }}
            transition={{ delay: 1 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            animate={{ opacity: 1 }}
          >
            Nuestro objetivo como empresa, es poder brindar la mejor calidad de
            panificados, en la mesa de cada familia.
          </motion.h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Nosotros;
