import { React, useState, useEffect } from "react";

const LINKS = [
  { name: "Home", to: "home", id: 0 },
  { name: "Project", to: "projectContainer", id: 1 },
  { name: "About", to: "aboutContainer", id: 2 },
  { name: "Skills", to: "skillsContainer", id: 3 },
];

export default function Navbar(props) {
  const [activeLink, setActiveLink] = useState(0);
  const [fromTop, setFromTop] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  function listenToScroll() {
    setFromTop(() => window.scrollY);

    LINKS.map((link) => {
      const section = document.getElementById(link.to);

      if (
        section.offsetTop - 50 <= fromTop &&
        section.offsetHeight + section.offsetTop > fromTop
      ) {
        setActiveLink(link.id);
      }

      if (document.body.offsetHeight - fromTop <= 700) {
        setActiveLink(3);
      }
    });
  }

  function handleNavClick() {
    listenToScroll();
  }

  return (
    <div className={`nav`}>
      <ul className="navlinksList">
        {LINKS.map((link, id) => {
          return (
            <li key={id} className={activeLink === link.id ? "active" : ""}>
              <a href={"#" + link.to} onClick={() => handleNavClick(id)}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
