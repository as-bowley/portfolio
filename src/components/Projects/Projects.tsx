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
import cvBuilderGif from "../../img/cvbuilder.gif";

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
            desc={
              <>
                <p>
                  This project was made for the final part of The Odin Project's
                  Javascript curriculum. The instructions were to re-create a
                  website and implement as much functionality from that website
                  as we could. I chose transfermarkt as the website I wanted to
                  replicate and had already decided that it wouldn't be a
                  straight clone, but rather my own take on the website. The
                  primary things that I wanted to practice whilst making this
                  project were:
                </p>
                <ul>
                  <li>
                    Making multiple API calls and managing that data in state.
                  </li>
                  <li>
                    Using Firebase for User Authentication and to store the
                    users favourite players/teams.
                  </li>
                  <li> Visualise that data using tables where possible.</li>
                </ul>
                <p>
                  The end result is a site where you can make an account, save
                  your favourite Premier League players and teams, as well as
                  see up-to-date statistics from their current season. You can
                  also stay up-to-date via the homepage with all the latest news
                  and statistics from the league as a whole.
                </p>
              </>
            }
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
            desc="This project was made for The Odin Project's curriculum, focusing on gaining familiarity with Firebase and also learning about the implementation of a backend in to a React project. The project is made in the style of a Where's Waldo/Wally? game, where you need to find certain characters in a larger image. The coordinates and also the leaderboard for the game are all kept on a Firestore database."
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
            desc="This project was made as part of The Odin Project's curriculum. The project focuses on Test Driven Development. Tests were done with Jest.

            "
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
            previewImg={cvBuilderGif}
            tech={["react", "javascript"]}
            desc="This project was made for The Odin Project's React curriculum and focused on practising the basics, primarily state management, of the React framework using class based components."
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
