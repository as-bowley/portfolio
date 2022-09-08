import React from "react";
import "./About.scss";

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about_title">
        <h1>About</h1>
      </div>
      <div className="about_desc">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar vel
          arcu phasellus pellentesque mi, enim. Sed aenean neque leo, odio
          accumsan, senectus. Id ut porttitor eu mattis. Integer imperdiet in
          tortor dui eleifend donec gravida molestie. Orci, elit sollicitudin
          morbi purus justo, diam interdum augue ornare. Ipsum nec id mattis
          elementum. Vitae a volutpat praesent egestas elementum. Amet arcu
          felis ac sit vulputate. Aliquam ornare ullamcorper sed lacus libero,
          nunc varius habitant semper. Nibh nisl, gravida sollicitudin ornare
          pellentesque ultrices amet. Donec feugiat nisi aenean facilisi. Orci,
          morbi nisl viverra tincidunt nunc nibh morbi. Turpis metus id fames
          rhoncus neque morbi sit blandit nisi.
        </p>
      </div>
      <div className="about_skills">
        <div className="about_skill">
          <i className="devicon-typescript-plain colored"></i>
          <h5>Typescript</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-javascript-plain colored"></i>

          <h5>Javascript</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-react-original colored"></i>

          <h5>React</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-git-plain colored"></i>
          <h5>Git</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-nodejs-plain colored"></i>
          <h5>NodeJS</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-sass-plain colored"></i>
          <h5>SASS</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-figma-plain colored"></i>
          <h5>Figma</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-jest-plain colored"></i>
          <h5>Jest</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-webpack-plain colored"></i>
          <h5>Webpack</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-firebase-plain colored"></i>
          <h5>Firebase</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-npm-original-wordmark colored"></i>
          <h5>npm</h5>
        </div>
        <div className="about_skill">
          <i className="devicon-wordpress-plain colored"></i>
          <h5>Wordpress</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
