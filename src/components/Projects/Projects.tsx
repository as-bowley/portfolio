import "./Projects.scss";
import footbaselogo from "../../img/footbaseproject.png";
import wheresvaderlogo from "../../img/wheresvaderproject.png";
import battleshiplogo from "../../img/battleshipproject.png";
import cvlogo from "../../img/cvbuilderlogo.png";
import ProjectModal from "./ProjectModal";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import footbaseGif from "../../img/footbaseprojectgif.gif";
import vaderGif from "../../img/vaderprojectgif.gif";
import battleshipGif from "../../img/battleshipgif.gif";

const Projects: React.FC = () => {
  const [isFootModalOpen, setIsFootModalOpen] = useState<boolean>(false);
  const [isVaderModalOpen, setIsVaderModalOpen] = useState<boolean>(false);
  const [isBattleshipModalOpen, setIsBattleshipModalOpen] =
    useState<boolean>(false);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);
  const { ref } = useInView({ threshold: 0.2 });

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
            closeModal={setIsFootModalOpen}
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
            closeModal={setIsVaderModalOpen}
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
            closeModal={setIsBattleshipModalOpen}
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
            closeModal={setIsCVOpen}
          />
          <img src={cvlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
