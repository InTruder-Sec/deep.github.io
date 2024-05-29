import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "../components/About";
import Experience, { ExpDetails } from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Footer from "../components/Footer";
import { AnimationOnScroll } from "react-animation-on-scroll";


function Index() {
  return (
    <div className="index">
      <NavBar />
      {/* <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={false}> */}
        <Hero />
        {/* </AnimationOnScroll> */}
        <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={false}>
      <AboutMe />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={true}>
      <Experience />

      </AnimationOnScroll>

      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={true}>
      <ExpDetails />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={true}>
      <Skills />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={true}>
      <Projects />
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        animateOnce={true}
        animatePreScroll={true}>
      <Socials />
      </AnimationOnScroll>
      

      <Footer />
    </div>
  );
}


// Hacker text effect

let isEnabled = [];

function SwitchCase(x) {
  if (isEnabled.indexOf(x) === -1) {
    isEnabled.push(x);
    const alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let t = document.getElementById(x);
    let word = t.innerText;
    let loop = (word.length - 1) * 4;
    let subCount = 1;
    let newWord = "";
    let random;
    let crCount;
    let Timer = setInterval(() => {
      for (let r = 0; r < word.length; r++) {
        crCount = r * 4 - subCount;
        if (crCount <= 0) {
          newWord = newWord + word[r];
        } else {
          random = Math.floor(Math.random() * 26);
          newWord = newWord + alphabet[random];
        }
      }
      subCount++;
      t.innerText = newWord;
      newWord = "";
      if (loop - subCount === 0) {
        t.innerText = word;
        let m = isEnabled.indexOf(x);
        isEnabled.splice(m, 1);
        clearInterval(Timer);
      }
    }, 50);
  }
}


// Background Heading Effect

function CreateHead(props) {
  return (
    <div className="HeadLine">
      <div className="headline--title"> {props.title} </div>
      <div
        className={"headline--head " + props.head}
        id={props.head}
        onMouseEnter={(e) => {
          SwitchCase(props.head);
        }}
      >
        {" "}
        {props.head}{" "}
      </div>
    </div>
  );
}

export default Index;

export {CreateHead, SwitchCase };

