import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";


//Layout
import HomeC from "../layout/Home";
import Nosotros from "../layout/Nosotros";
import Productos from "../layout/Productos";
import Comprar from "../layout/Comprar";
import Contacto from "../layout/Contacto";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {}, []);
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      <Head>
        <title>Boogie's Bakery</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0vw" }}
        transition={{
          when: "beforeChildren",
          ease: "easeInOut",
          delay: 1.4,
          duration: 1,
        }}
        className="app"
      >
        <Router>
          <Navbar />
          <div className="content">
            <Route
              render={({ location }) => (
                <AnimatePresence exitBeforeEnter>
                  <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={HomeC}></Route>
                    <Route path="/nosotros" component={Nosotros}></Route>
                    <Route path="/productos" component={Productos}></Route>
                    <Route path="/comprar" component={Comprar}></Route>
                    <Route path="/contacto" component={Contacto}></Route>
                  </Switch>
                </AnimatePresence>
              )}
            />
          </div>
        </Router>
      </motion.div>
    </>
  );
}
