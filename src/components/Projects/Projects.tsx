import "./Projects.scss";
import footbaselogo from "../../img/footbaseproject.png";
import wheresvaderlogo from "../../img/wheresvaderproject.png";
import battleshiplogo from "../../img/battleshipproject.png";
import todolistlogo from "../../img/todolistproject.png";
import cvlogo from "../../img/cvbuilderlogo.png";
import memorylogo from "../../img/memorygamelogo.png";
import ProjectModal from "./ProjectModal";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import footbaseGif from "../../img/footbaseprojectgif.gif";
import vaderGif from "../../img/vaderprojectgif.gif";
import battleshipGif from "../../img/battleshipgif.gif";
import todoGif from "../../img/todogif.gif";

const Projects: React.FC = () => {
  const [isFootModalOpen, setIsFootModalOpen] = useState<boolean>(false);
  const [isVaderModalOpen, setIsVaderModalOpen] = useState<boolean>(false);
  const [isBattleshipModalOpen, setIsBattleshipModalOpen] =
    useState<boolean>(false);
  const [isMemoryCardOpen, setIsMemoryCardOpen] = useState<boolean>(false);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const [isTodoModalOpen, setIsTodoModalOpen] = useState<boolean>(false);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0",
        y: "0",
        boxShadow: "8px 10px 4px rgba(0, 0, 0, 0.25)",
        transition: {
          delay: 0.3,
          type: "spring",
          duration: 0.8,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "8px",
        y: "10px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 0px",
      });
    }
  }, [inView, animation]);

  return (
    <div className="projects" id="projects">
      <div className="projects_title">
        <h1>Projects</h1>
      </div>
      <div className="projects_tiles">
        <div
          ref={ref}
          className="projects_tile"
          onClick={() => setIsFootModalOpen(!isFootModalOpen)}
        >
          <ProjectModal
            title="Footbase"
            previewImg={footbaseGif}
            tech={["react", "javascript", "firebase"]}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa eu sollicitudin ipsum. Turpis risus imperdiet ultricies
            feugiat etiam eu consectetur risus. Dui in egestas ligula lorem.
            Facilisis vel volutpat erat faucibus iaculis est ut. Aliquam
            pharetra consectetur feugiat non. Morbi neque ac faucibus bibendum
            egestas. Lacus iaculis nec."
            isModalOpen={isFootModalOpen}
            link="https://foot-base.herokuapp.com/"
            code="https://github.com/as-bowley/footbase"
            design="https://www.figma.com/file/KfzwxjTpN2G0znH052UfkO/Footbase"
          />
          <img src={footbaselogo} alt="" />
        </div>
        <div
          ref={ref}
          className="projects_tile"
          onClick={() => setIsVaderModalOpen(!isVaderModalOpen)}
        >
          <ProjectModal
            title="Where's Vader?"
            previewImg={vaderGif}
            tech={["react", "javascript", "firebase"]}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa eu sollicitudin ipsum. Turpis risus imperdiet ultricies
            feugiat etiam eu consectetur risus. Dui in egestas ligula lorem.
            Facilisis vel volutpat erat faucibus iaculis est ut. Aliquam
            pharetra consectetur feugiat non. Morbi neque ac faucibus bibendum
            egestas. Lacus iaculis nec."
            isModalOpen={isVaderModalOpen}
            link="https://as-bowley.github.io/wheres-waldo/"
            code="https://github.com/as-bowley/wheres-waldo"
            design=""
          />
          <img src={wheresvaderlogo} alt="" />
        </div>
        <div
          ref={ref}
          className="projects_tile"
          onClick={() => setIsBattleshipModalOpen(!isBattleshipModalOpen)}
        >
          <ProjectModal
            title="Battleship"
            previewImg={battleshipGif}
            tech={["react", "javascript", "firebase"]}
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa eu sollicitudin ipsum. Turpis risus imperdiet ultricies
            feugiat etiam eu consectetur risus. Dui in egestas ligula lorem.
            Facilisis vel volutpat erat faucibus iaculis est ut. Aliquam
            pharetra consectetur feugiat non. Morbi neque ac faucibus bibendum
            egestas. Lacus iaculis nec."
            isModalOpen={isBattleshipModalOpen}
            link=""
            code="https://github.com/as-bowley/battleship"
            design="https://www.figma.com/file/xmwZaIcVFdxbTus2cCIxDJ/Battleship"
          />
          <img src={battleshiplogo} alt="" />
        </div>
        <div
          ref={ref}
          className="projects_tile"
          onClick={() => setIsCVOpen(!isCVOpen)}
        >
          <ProjectModal
            title="Cv Builder"
            previewImg={cvlogo}
            tech={["react", "javascript"]}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa eu sollicitudin ipsum. Turpis risus imperdiet ultricies
            feugiat etiam eu consectetur risus. Dui in egestas ligula lorem.
            Facilisis vel volutpat erat faucibus iaculis est ut. Aliquam
            pharetra consectetur feugiat non. Morbi neque ac faucibus bibendum
            egestas. Lacus iaculis nec."
            isModalOpen={isCVOpen}
            link=""
            code="https://github.com/as-bowley/cv-project"
            design="https://www.figma.com/file/yoVel5zlpUSO8UIkOjbVPO/CV-App"
          />
          <img src={cvlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
