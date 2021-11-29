import React from "react";
import js from "../../images/js.png";
import c from "../../images/c.png";
import cpp from "../../images/cpp.png";
import css3 from "../../images/css3.png";
import reactJs from "../../images/reactJS.png";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "ReactJS",
    img: reactJs,
  },
  {
    name: "javascript",
    img: js,
  },
  {
    name: "Css",
    img: css3,
  },
  {
    name: "C",
    img: c,
  },
  {
    name: "C++",
    img: cpp,
  },
];

export default function Skills() {
  return (
    <div id="skillsContainer">
      <div className="anchor"></div>
      <h1 className="skillshead">Skills</h1>
      <div className="skillsList">
        {skills.map((skill, id) => {
          return <SkillCard name={skill.name} img={skill.img} key={id} />;
        })}
      </div>
    </div>
  );
}
