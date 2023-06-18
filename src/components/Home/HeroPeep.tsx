import React, { useEffect } from "react";
import heropeep from "../../img/peep-51.png";
import "./HeroPeep.scss";

const HeroPeep: React.FC = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll<HTMLElement>(".hero__peep__eye");
    const peepBg = document.querySelector<HTMLElement>(".hero__peep__bg")!;
    window.addEventListener("mousemove", (e) => {
      eyes.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        if (eye.classList.contains("eye--right")) {
          x = eye.getBoundingClientRect().right + eye.clientWidth / 2;
        }
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(e.pageX - x, e.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + -90;
        eye.style.transform = `rotate(${rot}deg)`;
        const valX = (e.pageX * -1) / 100;
        const valY = (e.pageY * -1) / 100;
        peepBg.style.transform = `translate(-5%) translate3d(${valX}px, ${valY}px, 0)`;
      });
    });
  }, []);
  return (
    <div className="hero__peep">
      <div className="hero__peep__bg"></div>
      <div className="hero__peep__container">
        <img src={heropeep} alt="" />
        <div className="hero__peep__eye--left">
          <div className="hero__peep__eye--left__pupil  hero__peep__eye"></div>
        </div>
        <div className="hero__peep__eye--right">
          <div className="hero__peep__eye--right__pupil hero__peep__eye"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroPeep;
