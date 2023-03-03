import React from "react";
import "../App.css";
import heroImg from "../images/v8_35.jpg";
import expcardimg1 from "./../images/vtf-image.png";
import expcardimg2 from './../images/owasp-img.png';
import expcardimg3 from './../images/h1.jpg';
let isEnabled = "";

export default function Index() {
    return (
      <div className='index'>
        <NavBar />
        <Hero />
        <AboutMe/>
        <Experience />
        <Skills />
        <Projects />
      </div>
    )
}


function NavBar() {
    return (
        <div className="Nav">
            
            <div className="Nav-place">
            <div className="Nav-content Nav--about" id="Nav--about" onMouseEnter={e=> {SwitchCase("Nav--about")}} ><a href="#"> ABOUT </a></div>
                <div className="Nav-content Nav--exp" id="Nav--exp" onMouseEnter={e=> {SwitchCase("Nav--exp")}}>EXPERIENCE</div>
                <div className="Nav-content Nav--skills" id="Nav--skills" onMouseEnter={e=> {SwitchCase("Nav--skills")}}>SKILLS</div>
                <div className="Nav-content Nav--projects" id="Nav--projects" onMouseEnter={e=> {SwitchCase("Nav--projects")}}>PROJECTS</div>
                <div className="Nav-content Nav--socials" id="Nav--socials" onMouseEnter={e=> {SwitchCase("Nav--socials")}}>SOCIALS</div>
            </div>
        </div>
        
    )
}


function SwitchCase(x) {
    if (isEnabled !== x) {
        isEnabled = x;
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        let t =document.getElementById(x)
        let word = t.innerText
        let loop = (word.length-1)*4
        let subCount = 1
        let newWord ="";
        let random;
        let crCount
        let Timer = setInterval(() => {
            for (let r=0; r<word.length; r++) {
                crCount = r*4 - subCount;
                if (crCount<=0) {
                    newWord = newWord + word[r];
                } else {
                    random = Math.floor(Math.random()*26)
                    newWord = newWord + alphabet[random]
                }

            }
            subCount ++;
            t.innerText = newWord
            newWord = ""
            if (loop-subCount === 0) {
                t.innerText = word;
                isEnabled = "";
                clearInterval(Timer);
            }
        }, 50);
    }
    
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
                <a href="/#socials"><button className="contact-us socials-button">Socials</button></a>
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
                key={item.title}
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
    const listSkill = SkillData.map(item => {
        return (
            <SkillList
                key={item.id}
                count={item.count}
                date={item.date}
                sl={item.sl}
              />
        )
    })
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
            <div className="skills-list">
                <div className="skill--list--Jor">My Journey</div>
                {listSkill}
                <div className="skill--end">
                    <div className="skill--end--hr"/>
                    <div className="skill--end--hr2"/>
                    <div className="skill--end--hr3"/>
                </div>
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

function SkillList(props) {
    const newList = props.sl.map(item => {
        return (
            <SkillCard 
                color={item.color}
                level={item.level}
                key={item.level}
            />
        )
    })
    return (
        <div className="skill--list--card">
            <div className="skill--list--date">{props.date}</div>
            <div className="skill--list--hr" style={{height: props.count*100}} />
            <div className="skill--li--card">
                {newList}
            </div>
            
        </div>
    )
}


const SkillData = [
    {
        id: 0,
        count: 2,
        date: "Mar 2019",
        sl: [
            {
                color: "red",
                level: "HTML5 & CSS",
            },
            {
                color: "blue",
                level: "JAVASCRIPT"
            }
        ]
    },
    {
        id: 1,
        count: 2,
        date: "JAN 2020",
        sl: [
            {
                color: "blue",
                level: "LINUX",
            },
            {
                color: "blue",
                level: "C++"
            }
        ]
    },
    {
        id: 2,
        count: 1,
        date: "MAR 2020",
        sl: [
            {
                color: "red",
                level: "BURPSUITE",
            }
        ]
    },
    {
        id: 3,
        count: 1,
        date: "OCT 2020",
        sl: [
            {
                color: "red",
                level: "OWASP TOP 10 WEB VULNERABILITIES",
            }
        ]
    },
    {
        id: 4,
        count: 1,
        date: "JAN 2021",
        sl: [
            {
                color: "blue",
                level: "ETHICAL HACKING",
            }
        ]
    },
    {
        id: 5,
        count: 3,
        date: "APRIL 2021",
        sl: [
            {
                color: "yellow",
                level: "MY-SQL",
            },
            {
                color: "greenyellow",
                level: "NETWORK SECURITY"
            },
            {
                color: "red",
                level: "PYTHON"
            }
        ]
    },
    {
        id: 6,
        count: 1,
        date: "MAR 2022",
        sl: [
            {
                color: "blue",
                level: "FIREBASE",
            }
        ]
    },
    {
        id: 7,
        count: 1,
        date: "MAY 2022",
        sl: [
            {
                color: "blue",
                level: "REACT",
            }
        ]
    },
    {
        id: 8,
        count: 2,
        date: "AUG 2022",
        sl: [
            {
                color: "yellow",
                level: "DJANGO FRAMEWORK",
            },
            {
                color: "greenyellow",
                level: "FIGMA"
            }
        ]
    },
]


function Projects() {
    return (
        <div className="projects">
            <CreateHead head="projects" title="My Projects" />
        </div>
    )
}