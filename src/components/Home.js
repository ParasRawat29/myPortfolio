import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

export default function Home() {
  return (
    <div id="home" className={`home `}>
      <div className="anchor"></div>
      <div className="intro">
        <h2>Hello World , I'am</h2>
        <h1 className="name">Paras Rawat</h1>
        <h1 className="introInfo">Frontend Developer | UI/UX Developer</h1>
      </div>
      <div className="socialIcons">
        <button>
          <a href="https://github.com/ParasRawat29/" target="_blank">
            <img src={github} alt="github icon" width="60" height="60" />
          </a>
        </button>
        <button>
          <a href="https://www.linkedin.com/in/parasrawat29/" target="_blank">
            <img src={linkedin} alt="linkedin icon" width="60" height="60" />
          </a>
        </button>

        <button>
          <a href="https://twitter.com/Paras_Rawat_29" target="_blank">
            <img src={twitter} alt="twitter icon" width="60" height="60" />
          </a>
        </button>
      </div>
    </div>
  );
}
