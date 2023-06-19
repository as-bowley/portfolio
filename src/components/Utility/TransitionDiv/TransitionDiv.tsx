import React, { useRef, useEffect, useState } from "react";
import "./TransitionDiv.scss";

interface TransitionDivProps {
  state: "entering" | "entered" | "exiting" | "exited" | "unmounted";
}

const TransitionDiv: React.FC<TransitionDivProps> = ({ state }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const divElement = divRef.current;

    if (state === "entering" && divElement) {
      setIsAnimating(true);
      divElement.style.transform = "translateX(-100%)";
      divElement.style.transition = "transform 0.5s ease-in";
      divElement.style.opacity = "1";

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    } else if (state === "exiting" && divElement) {
      setIsAnimating(true);
      divElement.style.transform = "translateX(100%)";
      divElement.style.transition = "transform 0.5s ease-out";
      divElement.style.opacity = "0";

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  }, [state]);

  return (
    <div
      ref={divRef}
      className={`transition-div ${isAnimating ? "animating" : ""}`}
    >
      <h1>Loading...</h1>
    </div>
  );
};

export default TransitionDiv;
