import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import pomoTime from "../../images/pomoTime.png";
import gallerina from "../../images/gallerina.png";
import boxOffice from "../../images/boxOffice.png";
import canvasShooingGame from "../../images/canvasShooingGame.png";

const PROJECTS = [
  {
    id: 1,
    title: "PomoTime",
    description:
      "PomoTime is web based customizable and easy to use looping Pomodoro timer that help people to focus on the task more effectively be it studying, coding, writing, etc. It also shows analytics of time focused each day using Chart js",
    tools: "React , Firebasae , chartjs",
    img: pomoTime,
    linkToGithub: "https://github.com/ParasRawat29/Pomodoro-Timer",
    linkToApp: "https://pomotimer-o.web.app/",
  },
  {
    id: 2,
    title: "Gallerina",
    description:
      "Photo album web app. It lets the user to create Albums ans upload photos on the app. User can also search for photos and filter photos according to date of upload.",
    tools: "React , Firebase",
    img: gallerina,
    linkToGithub: "https://github.com/ParasRawat29/Gallerina",
    linkToApp: "https://gallerina-2e701.web.app/",
  },
  {
    id: 3,
    title: "Box-Office-App",
    description: "Search Your Favorite TV Series and Actors",
    tools: "React , TVMaze API",
    img: boxOffice,
    linkToGithub: "https://github.com/ParasRawat29/box-office",
    linkToApp: "https://parasrawat29.github.io/box-office/#/",
  },
  {
    id: 4,
    title: "Shooting Game",
    description: "Single palyer Shooting game",
    tools: "JavaScript , Canvas",
    img: canvasShooingGame,
    linkToGithub: "https://github.com/ParasRawat29/Canvas-Shooting-Game",
    linkToApp: "https://parasrawat29.github.io/Canvas-Shooting-Game/",
  },
];

export default function Project() {
  useEffect(() => {
    window.addEventListener("scroll", checkBoxes);
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  function checkBoxes() {
    const triggerPoint = (window.innerHeight / 5) * 4;
    const projectImgs = document.querySelectorAll(".projectImg");
    const projectDescs = document.querySelectorAll(".projectDesc");

    projectImgs.forEach((projectImg) => {
      const boxTop = projectImg.getBoundingClientRect().top;
      if (boxTop < triggerPoint) projectImg.classList.add("appear");
      else projectImg.classList.remove("appear");
    });

    projectDescs.forEach((projectDesc) => {
      const boxTop = projectDesc.getBoundingClientRect().top;
      if (boxTop < triggerPoint) projectDesc.classList.add("appear");
      else projectDesc.classList.remove("appear");
    });
  }
  return (
    <>
      <div id="projectContainer">
        <div className="anchor"></div>
        <h2 className="projecthead">PROJECTS</h2>

        <div className="projectslist">
          {PROJECTS.map((project, id) => {
            return (
              <ProjectCard
                title={project.title}
                img={project.img}
                description={project.description}
                tools={project.tools}
                key={id}
                linkToApp={project.linkToApp}
                linkToGithub={project.linkToGithub}
              />
            );
          })}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c1b1b"
          fill-opacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,229.3C274.3,213,343,139,411,122.7C480,107,549,149,617,138.7C685.7,128,754,64,823,69.3C891.4,75,960,149,1029,197.3C1097.1,245,1166,267,1234,245.3C1302.9,224,1371,160,1406,128L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
