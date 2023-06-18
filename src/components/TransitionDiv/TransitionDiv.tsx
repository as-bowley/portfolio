import "./TransitionDiv.scss";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const TransitionDiv = () => {
  const location = useLocation();
  const controls = useAnimation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    controls
      .start({ x: "0%", transition: { type: "tween" } })
      .then(() => controls.start({ x: "0%" }))
      .then(() => controls.start({ x: "100%", transition: { type: "tween" } }))
      .then(() => controls.start({ x: "-100%", transition: { duration: 0 } }));
  }, [location, controls]);

  return (
    <motion.div
      className="transition-div"
      initial={{ x: "-100%" }}
      animate={controls}
    />
  );
};

export default TransitionDiv;
