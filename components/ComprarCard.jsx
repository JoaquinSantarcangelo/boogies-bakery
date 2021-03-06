import React, { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import CloseIcon from "@material-ui/icons/Close";
import Close from "@material-ui/icons/Close";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultMapOptions = {
  fullscreenControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  zoomControl: false,
};

const Card = ({ product, i }) => {
  //Map Configuration {Starts}
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  //Map Configuration {Ends}

  //Animation
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

  //Animation InView Hooks
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView]);

  const [imageVisible, setImageVisible] = useState(false);

  return (
    <motion.div
      ref={ref}
      variants={variantsCard}
      initial="hidden"
      animate={controls}
      exit="exit"
      className="card"
    >
      <div onClick={() => setImageVisible(true)} className="info-box">
        <div className="name">{product.name}</div>
        <div className="dir">{product.dir}</div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: {delay: 0} }}
        transition={{delay: 4.2}}
        animate={{ opacity: 1 }}
        className="barrio"
      >
        {product.barrio}
      </motion.div>
      <AnimatePresence>
        {imageVisible && (
          <motion.div
            style={{ backgroundImage: `url(${product.img})` }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="image"
          >
            <div
              onClick={() => setImageVisible(false)}
              className="close-button"
            >
              <CloseIcon />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <LoadScript googleMapsApiKey="AIzaSyBftuHNI5rqIIvGtLI90jKYanKdPZ25wu8">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={product.position}
          options={defaultMapOptions}
          zoom={15}
        >
          <>
            <Marker
              icon="/assets/img/boogiesMarker.png"
              position={product.position}
              onClick={() => setImageVisible(true)}
            ></Marker>
          </>
        </GoogleMap>
      </LoadScript>
    </motion.div>
  );
};
export default Card;
