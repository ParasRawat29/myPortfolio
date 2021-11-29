import React from "react";

function SkillCard({ name, img }) {
  return (
    <section className="skillCard">
      <img src={img} alt={name} />
      <h3 className="skillName">{name}</h3>
    </section>
  );
}

export default SkillCard;
