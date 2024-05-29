
import React, { useState } from "react";
import { SwitchCase } from "../pages";

// function OpenNav() {
//     if (isActive) {
//       isActive = false;
//       document.getElementById("hamburger").classList.remove("cover");
//       document.querySelector(".dis2").classList.remove("active2");
//       document.querySelector(".dis3").classList.remove("active3");
//       document.querySelector(".dis1").classList.remove("active1");
//       document.querySelector(".cover-place").classList.add("cover-active");
//     } else {
//       isActive = true;
//       document.getElementById("hamburger").classList.add("cover");
//       document.querySelector(".dis1").classList.add("active1");
//       document.querySelector(".dis2").classList.add("active2");
//       document.querySelector(".dis3").classList.add("active3");
//       document.querySelector(".cover-place").classList.remove("cover-active");
//     }
//   }



function NavBar() {

    const [isActive, setisActive] = useState(false);

    const OpenNav = () => {
        if (isActive) setisActive(false);
        else setisActive(true);
    }


    return (
      <div className="NavBar">
        <div className="Nav blur-nav">
          <div className="Nav-place">
            <a href="#hero" rel="noreferrer">
              <div
                className="Nav-content Nav--about"
                id="Nav--about"
                onMouseEnter={(e) => {
                  SwitchCase("Nav--about");
                }}
              >
                {" "}
                ABOUT{" "}
              </div>
            </a>
            <a href="#experience" rel="noreferrer">
              <div
                className="Nav-content Nav--exp"
                id="Nav--exp"
                onMouseEnter={(e) => {
                  SwitchCase("Nav--exp");
                }}
              >
                EXPERIENCE
              </div>
            </a>
            <a href="#skills" rel="noreferrer">
              <div
                className="Nav-content Nav--skills"
                id="Nav--skills"
                onMouseEnter={(e) => {
                  SwitchCase("Nav--skills");
                }}
              >
                SKILLS
              </div>
            </a>
            <a href="#projects" rel="noreferrer">
              <div
                className="Nav-content Nav--projects"
                id="Nav--projects"
                onMouseEnter={(e) => {
                  SwitchCase("Nav--projects");
                }}
              >
                PROJECTS
              </div>
            </a>
            <a href="#Socials" rel="noreferrer">
              <div
                className="Nav-content Nav--socials"
                id="Nav--socials"
                onMouseEnter={(e) => {
                  SwitchCase("Nav--socials");
                }}
              >
                SOCIALS
              </div>
            </a>
          </div>
        </div>
        {/* Pixel Breakdown hamburger display block  */}


        <div className={isActive ? "hamburger cover" : "hamburger"} id="hamburger">
          <div className="haburger--btn" onClick={OpenNav}>
            <div className={isActive ? "hamburger--dis dis1 active1" : "hamburger--dis dis1"}></div>
            <div className={isActive ? "hamburger--dis dis2 active2" : "hamburger--dis dis2"}></div>
            <div className={isActive ? "hamburger--dis dis3 active3" : "hamburger--dis dis3"}></div>
          </div>
          <div className={isActive ? "cover-place" : "cover-place cover-active"}>
            <a href="#hero" rel="noreferrer">
              <div
                className="cover-content cover-design"
                id="cover--about"
                onClick={OpenNav}
                onMouseEnter={(e) => {
                  SwitchCase("cover--about");
                }}
              >
                {" "}
                ABOUT{" "}
              </div>
            </a>
            <a href="#experience" rel="noreferrer">
              <div
                className="cover-content cover-design"
                id="cover--exp"
                onClick={OpenNav}
                onMouseEnter={(e) => {
                  SwitchCase("cover--exp");
                }}
              >
                EXPERIENCE
              </div>
            </a>
            <a href="#skills" rel="noreferrer">
              <div
                className="cover-content cover-design"
                id="cover--skills"
                onClick={OpenNav}
                onMouseEnter={(e) => {
                  SwitchCase("cover--skills");
                }}
              >
                SKILLS
              </div>
            </a>
            <a href="#projects" rel="noreferrer">
              <div
                className="cover-content cover-design"
                id="cover--projects"
                onClick={OpenNav}
                onMouseEnter={(e) => {
                  SwitchCase("cover--projects");
                }}
              >
                PROJECTS
              </div>
            </a>
            <a href="#Socials" rel="noreferrer">
              <div
                className="cover-content cover-design"
                id="cover--socials"
                onClick={OpenNav}
                onMouseEnter={(e) => {
                  SwitchCase("cover--socials");
                }}
              >
                SOCIALS
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }


  export default NavBar;