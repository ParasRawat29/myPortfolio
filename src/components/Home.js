import React, { useEffect, useState } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

export default function Home() {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppear(true);
    }, 200);
  }, []);

  return (
    <div id="home" className={`home `}>
      <div className="anchor"></div>
      <div className="intro" style={{ opacity: appear === true ? 1 : 0 }}>
        <h2>Hello World , I'am</h2>
        <h1 className="name">Paras Rawat</h1>
        <h1 className="introInfo">Frontend Developer | UI/UX Developer</h1>
      </div>
      <div className="socialIcons" style={{ opacity: appear === true ? 1 : 0 }}>
        <button>
          <a
            href="https://github.com/ParasRawat29/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github icon" width="60" height="60" />
          </a>
        </button>
        <button>
          <a
            href="https://www.linkedin.com/in/parasrawat29/"
            target="_blank"
            rel="noreferrer"
          >
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
