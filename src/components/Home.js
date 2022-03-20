import React, { useEffect, useState } from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import leetcode from "../images/leetcode.png";
import codepen from "../images/codepen.png";
import anim from "../images/websiteGif.png";
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

      <img
        src={anim}
        alt="backgroundImage"
        className="animationImg"
        style={{
          transform: appear === true ? "translate(0,0)" : "translate(80%,50%)",
        }}
      />

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
          <a
            href="https://codepen.io/ParasRawat"
            target="_blank"
            rel="noreferrer"
          >
            <img src={codepen} alt="codepen icon" width="60" height="60" />
          </a>
        </button>
        <button>
          <a
            href="https://leetcode.com/paras29/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={leetcode} alt="leetcode icon" width="60" height="60" />
          </a>
        </button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111111"
          fill-opacity="1"
          d="M0,160L34.3,181.3C68.6,203,137,245,206,229.3C274.3,213,343,139,411,122.7C480,107,549,149,617,138.7C685.7,128,754,64,823,69.3C891.4,75,960,149,1029,197.3C1097.1,245,1166,267,1234,245.3C1302.9,224,1371,160,1406,128L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
