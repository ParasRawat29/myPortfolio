import React from "react";
import parasPhoto from "../images/paras dp.jpeg";
export default function About() {
  return (
    <div id="aboutContainer">
      <div className="anchor"></div>
      <div className="AboutHeading">About Me</div>
      <div className="innerAboutContainer">
        <div className="aboutImg">
          <img src={parasPhoto} alt="" />
        </div>
        <div className="aboutInfo">
          <p>
            My name is <span className="aboutUnderline">Paras Rawat</span>, 3rd
            Year Engineering student specializing in{" "}
            <span className="aboutUnderline">information technology</span>.
          </p>
          <p>
            Pursing engineering 🎓 from Maharaja Surajmal institute of
            technology.
          </p>
          <p>
            I am currently learning 🌱{" "}
            <span className="aboutUnderline">web development</span>. I love to
            create web apps mostly using javascript.
          </p>
        </div>
      </div>
    </div>
  );
}
