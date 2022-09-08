import "./Projects.scss";
import footbaselogo from "../../img/footbaseproject.png";
import wheresvaderlogo from "../../img/wheresvaderproject.png";
import battleshiplogo from "../../img/battleshipproject.png";
import todolistlogo from "../../img/todolistproject.png";

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects_title">
        <h1>Projects</h1>
      </div>
      <div className="projects_tiles">
        <div className="projects_tile">
          <div className="projects_tile--front">
            <img src={footbaselogo} alt="" />
          </div>
          <div className="projects_tile--reverse">
            <section>
              <h5>Built with:</h5>
              <span>react</span>
              <span>javascript</span>
            </section>
          </div>
        </div>
        <div className="projects_tile">
          <img src={wheresvaderlogo} alt="" />
        </div>
        <div className="projects_tile">
          <img src={battleshiplogo} alt="" />
        </div>
        <div className="projects_tile">
          <img src={todolistlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
