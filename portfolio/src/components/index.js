import React from "react";
import "../App.css";
import heroImg from "../images/v8_35.jpg";
import expcardimg1 from "./../images/vtf-image.png";
import expcardimg2 from './../images/owasp-img.png';
import expcardimg3 from './../images/h1.jpg';


export default function Index() {
    return (
      <div className='index'>
        <NavBar />
        <Hero />
        <AboutMe/>
        <Experience />
        <Skills />
      </div>
    )
}


function NavBar() {
    return (
        <div className="Nav">
            
            <div className="Nav-place">
            <div className="Nav-content Nav--about">ABOUT</div>
                <div className="Nav-content Nav--exp">EXPERIENCE</div>
                <div className="Nav-content Nav--socials">SOCIALS</div>
                <div className="Nav-content Nav--skills">SKILLS</div>
                <div className="Nav-content Nav--projects">PROJECTS</div>
            </div>
        </div>
    )
}

function Hero() {
    return (
        <div className="Hero">
            <div className="hero--dis">
                <img className="hero--img" src={heroImg} alt="hero"></img>
                <div className="hero--details">
                    <div className="intro-content">
                        <h3>ETHICAL HACKER | FULL STACK DEVELOPER | CODER</h3>
                    </div>
                    <a href="#contact-us">
                        <div className="intro-content2"><u>HIRE</u> <u>NOW</u></div>
                    </a>
                    <div className="intro-content3">
                        <h2>Secure your products from hackers.</h2>
                    </div>
                    <div className="intro-content4">Hackers exploit everything. Is your website safe from Hackers? Contact Us and
                        test your products now.</div>
                    <a href="/#socials"><button className="contact-us">Contact-Us</button></a>
                </div>
            </div>
            
        </div>
    )
}

function AboutMe() {
    return (
        <div className="About-Me">
            <CreateHead head="ABOUT" title="ABOUT ME"  />
            <div className="about--details">
                Hey there, my name is Deep and I am an Ethical Hacker based in Pune. Currently, I am pursuing a B.Tech degree in Mechanical Engineering at Pimpri Chinchwad College of Engineering, Pune.<br/><br/>
                I am a part of the Security Team at OWASP Chapter PCCoE. Looking for a job in the Red Team of a company. Being a greedy learner, I love to explore how things work around me.<br/><br/>
                To find out more about me check out my socials.<br/>
                <a href="/#socials"><button class="contact-us socials-button">Socials</button></a>
            </div>
        </div>
    )
}

function Experience() {

    const newCard = ExpData.map(item => {
        return(
            <ExpCard
                classN={item.classDis}
                head={item.title}
                role={item.role}
                loc={item.loc}
                img={item.img}
                color={item.color}
            />
        )
    })

    return (
        <div className="experience">
            <CreateHead head="EXPERIENCE" title="MY EXPERIENCE"  />
            <div className="exp-container">
                {newCard}
            </div>
        </div>
    )
}


function CreateHead(props) {
    return (
        <div className="HeadLine">
            <div className="headline--title"> {props.title} </div>
            <div className="headline--head"> {props.head} </div>
        </div>
    )
}

function ExpCard(props) {
    return (
        <div className={props.classN} >
            <div className="expcard--img"><img className="expcard--img" alt="vtfImage" src={props.img}></img></div>
            <div className="expcard--dis">
                <div className="expcard--dis--design" style={{backgroundColor: props.color}}></div>
                <div className="expcard--dis--head">{props.head}</div>
                <div className="expcard--dis--role">{props.role}</div>
                <div className="expcard--dis--loc">{props.loc}</div>
            </div>
        </div>
    )
}


const ExpData = [
    {
        title: "Virtual Testing Foundation",
        role: "CyberSecurity Intern",
        loc: "remote",
        img: expcardimg1,
        classDis: "expcard1",
        color: "red"
    },
    {
        title: "OWASP Chapter PCCOE",
        role: "Security Team Lead",
        loc: "PCCOE",
        img: expcardimg2,
        classDis: "expcard2",
        color: "blue"
    },
    {
        title: "Hacktivitycon Rank 45",
        role: "CTF Team Lead",
        loc: "REMOTE",
        img: expcardimg3,
        classDis: "expcard1",
        color: "purple"
    }
]


function Skills() {
    return (
        <div className="skills">
            <CreateHead head="skills" title="My Skills" />
            <div className="skills-exp-col">
                Experience Color
                <SkillCard color="red" level="P1 - [10] critical" />
                <SkillCard color="blue" level="P2 - [7-9] High" />
                <SkillCard color="yellow" level="P3 - [4-7] Medium"/>
                <SkillCard color="greenyellow" level="P4 - [1-4] Low" />
            </div>
        </div>
    )
}

function SkillCard(props) {
    return(
        <div className="skill--card">
            <div className="skill--card--color" style={{backgroundColor: props.color }} ></div>
            <div className="skill--card--dis">{props.level}</div>
        </div>
    )
}