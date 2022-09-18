import React from "react";
import "./ProjectModal.scss";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  previewImg: string;
  tech: string[];
  desc: string;
  isModalOpen: boolean;
  link: string;
  code: string;
  design: string;
}

const ProjectModal: React.FC<Props> = ({
  title,
  previewImg,
  tech,
  desc,
  isModalOpen,
  link,
  code,
  design,
}) => {
  if (!isModalOpen) return null;
  return (
    <motion.div
      className="modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } }}
    >
      <motion.div
        className="modal__container"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: -150, rotateY: 270, scale: 0.8 }}
        animate={{
          x: 0,
          rotateY: 360,
          scale: 1,
          transition: { ease: "easeInOut", duration: 0.3 },
        }}
        exit={{
          rotateY: 270,
          scale: 0.8,
          x: -150,
          transition: { ease: "easeInOut", duration: 0.3 },
        }}
      >
        <div className="modal__project__content">
          <h2 className="modal__project__title">{title}</h2>
          <img src={previewImg} alt="" className="modal__project__img" />
          <div className="modal__project__tech">
            {tech.map((item, i) => (
              <span key={i}>
                <i className={`devicon-${item}-plain`}></i>
                {item}
              </span>
            ))}
          </div>
          <div className="modal__project__desc">
            <p>{desc}</p>
          </div>

          <div className="modal__project__buttons">
            {link !== "" ? (
              <a href={link} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>
            ) : null}
            {code !== "" ? (
              <a href={code} target="_blank" rel="noreferrer">
                <button>Code</button>
              </a>
            ) : null}
            {design !== "" ? (
              <a href={design} target="_blank" rel="noreferrer">
                <button>Design</button>
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
