import React from "react";
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
    </>
  );
}
