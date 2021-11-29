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
            djskljdflkjsdlkfjdskljfskldj dsj flkjdskljf klsdjlfkjsdlkjflksd
            lfksjdlkj
          </p>
          <p>salfksdjkfdjslkfjlkdsj</p>
          <p>djskjfsjkdakjfsdjkfdsjkafjksdhkjhdkjshjkdshkjhdshkjhfd</p>
          <p>dfsdjflkdsjkldlkskljlkdsjlkfjdklj</p>
        </div>
      </div>
    </div>
  );
}
