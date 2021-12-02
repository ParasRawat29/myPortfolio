import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { React, useState } from "react";
import Project from "./components/project/Project";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import PreLoader from "./components/PreLoader/PreLoader";
function App() {
  const [preLoading, setPreLoading] = useState(true);
  setTimeout(() => {
    setPreLoading(false);
  }, 2800);
  console.log(
    "%c It seems you are a developer",
    "color: white;font-size:30px;font-weight:600;background: #333333;text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00;"
  );

  return (
    <div className="App">
      {preLoading === true ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <div className="main">
            <Home />
            <Project />
            <About />
            <Skills />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
