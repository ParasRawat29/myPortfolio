import React from "react";
import website from "../../images/website.png";
import github from "../../images/github.png";
function ProjectCard({
  title,
  tools,
  description,
  img,
  linkToApp,
  linkToGithub,
}) {
  return (
    <section className="projectCard">
      <img src={img} alt="project image" className="projectImg"></img>
      <div className="projectDesc">
        <h1 className="title">{title}</h1>
        <h3 className="toolsUsed">{tools}</h3>
        <p className="projectInfo">{description}</p>
        <div className="projectLinks">
          <button className="projectGithubLink">
            <a href={linkToGithub} target="_blank">
              <img src={github} alt="" width="40px" height="40px" />
            </a>
          </button>
          <button className="projectLiveLink">
            <a href={linkToApp} target="_blank">
              <img src={website} alt="" width="40px" height="40px" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
