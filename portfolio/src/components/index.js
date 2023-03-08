import React from "react";
import "../App.css";
import heroImg from "../images/v8_35.jpg";
import expcardimg1 from "./../images/vtf-image.png";
import expcardimg2 from './../images/owasp-img.png';
import expcardimg3 from './../images/h1.jpg';
import GearImg from "./../images/gears.png";
import Mail from './../images/mail.png';
import Linkedin from './../images/linkedin.png';
import Youtube from './../images/youtube.png';
import Github from './../images/github.png';
import Instagram from './../images/instagram.png'


let isEnabled = [];

function Index() {
    return (
      <div className='index'>
        <NavBar />
        <Hero />
        <AboutMe/>
        <Experience />
        <Skills />
        <Projects />
        <Socials />
        <Footer />
      </div>
    )
}


function NavBar() {
    return (
        <div className="Nav">
            
            <div className="Nav-place">
                <a href="#" rel="noreferrer"><div className="Nav-content Nav--about" id="Nav--about" onMouseEnter={e=> {SwitchCase("Nav--about")}} > ABOUT </div></a>
                <a href="#experience" rel="noreferrer"><div className="Nav-content Nav--exp" id="Nav--exp" onMouseEnter={e=> {SwitchCase("Nav--exp")}}>EXPERIENCE</div></a>
                <a href="#skills" rel="noreferrer"><div className="Nav-content Nav--skills" id="Nav--skills" onMouseEnter={e=> {SwitchCase("Nav--skills")}}>SKILLS</div></a>
                <a href="#projects" rel="noreferrer"><div className="Nav-content Nav--projects" id="Nav--projects" onMouseEnter={e=> {SwitchCase("Nav--projects")}}>PROJECTS</div></a>
                <a href="#Socials" rel="noreferrer"><div className="Nav-content Nav--socials" id="Nav--socials" onMouseEnter={e=> {SwitchCase("Nav--socials")}}>SOCIALS</div></a>
            </div>
        </div>
        
    )
}


function SwitchCase(x) {
    if (isEnabled.indexOf(x) === -1) {
        isEnabled.push(x);
        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        let t = document.getElementById(x)
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
                let m = isEnabled.indexOf(x)
                isEnabled.splice(m, 1)
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
                    <a href="#Socials">
                        <div className="intro-content2"><u>HIRE</u> <u>NOW</u></div>
                    </a>
                    <div className="intro-content3">
                        <h2>Secure your products from hackers.</h2>
                    </div>
                    <div className="intro-content4">Hackers exploit everything. Is your website safe from Hackers? Contact Us and
                        test your products now.</div>
                    <a href="#Socials"><button className="contact-us">Contact-Us</button></a>
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
            <CreateHead head="experience" title="MY EXPERIENCE"  />
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
            <div className={"headline--head " + props.head} id={props.head} onMouseEnter={e => {SwitchCase(props.head)}} > {props.head} </div>
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
                level: "OWASP TOP 10",
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
    const ProjectCardDetails = ProjectData.map(item => {
        return (
            <ProjectCard 
                id={item.id}
                title={item.title}
                link={item.link}
                details={item.details}
                tools={item.tools}
                key={item.id}
            />
        )
    })
    return (
        <div className="projects">
            <CreateHead head="projects" title="My Projects" />
            {ProjectCardDetails}
        </div>
    )
}

function ProjectCard(props) {
    const toolsDetails = props.tools.map(item => {
        return(
            <div className="project--tool">
                {item}
            </div>
        )
    })
    return (
        <div className="project--card">
            <div className="project--card--svg">
                <img src={GearImg} className="project--card--svg" alt="gears"></img>
            </div>
            <div className="project--card-no"> {props.id} </div>
            <div className="project--card--head"> {props.title} </div>
            <div className="project--card--details">
                <div className="project--details">
                    <div className="project--details--head"> Project Details </div>
                    <div className="project--details--contains"> {props.details} </div>
                </div>
                <div className="project--link">
                    <div className="project--link--head">Project Link</div>
                    <div className="project--link--a"> 
                    <a href={"https://" + props.link} rel="noreferrer" target="_blank" >{props.link} </a></div>
                </div>
                <div className="project--link project--tech">
                    <div className="project--link--head">Tech Used</div>
                    <div className="project--link--a">
                        {toolsDetails}
                    </div>
                </div>
            </div>
            
        </div>
    )
}


const ProjectData = [
    {
        id: "01",
        title: "FullStack Web Development Projects",
        details: "I am currently working on full stack web development projects. Almost all of the websites created under this project are built with MERN Stack. Project contails multiple games, E-commerce website, normal website and much more.",
        link: "github.com/InTruder-Sec/Full-StackDev-Projects",
        tools: ["HTML5", "CSS", "JavaScript", "React", "Canva"]
    },
    {
        id: "02",
        title: "Iconic Hashing Algorithm",
        details: "IH is a unique hashing algorithm which works on base 10 digits for hashing. This hashing algorithm works on each of these digits to convert them into an unpredictable number format. This tool hashes any given string into its iconic hash.",
        link: "github.com/InTruder-Sec/IHA",
        tools: ["Python3"]
    },
    {
        id: "03",
        title: "Cesar Encrypter & Decrypter",
        details: "In cryptography, a Caesar cipher is categorized as a substitution cipher in which the alphabet in the plain text is shifted by a fixed number down the alphabet. I have created a python tool which encrypts and decrypts strings with all posible set of keys.",
        link: "github.com/InTruder-Sec/caesar-cipher",
        tools: ["Python3"]
    },
    {
        id: "04",
        title: "Tech-Fest 2022 Website",
        details: "Techfest - 2K22 is the technical tvent of PCET's Pimpri Chinchwad College of Engineering, Pune. Website for Tech-Fest 2k22 was created and maintained by me. Almost 2000+ event registrations were done on the site.",
        link: "techfest2k22.web.app/",
        tools: ["HTML5", "CSS", "JavaScript", "Firebase"]
    }
    
]


function Socials() {

    const GetSocailCard = SocialsData.map(e => {
        return(
            <SocialCard
                title={e.title}
                color={e.color}
                link={e.link}
                img={e.img}
                width={e.width}
            />
        )
    })

    return (
        <div className="socials">
            <CreateHead head="Socials" title="Socials" />
            <div className="socials--head">
                <ul>
                    <li>Reach Me Out</li>
                </ul>
            </div>
            <div className="socials--list"  >
                {GetSocailCard}
            </div>
        </div>
    )
}

function SocialCard(props) {
    return (
        <div className="socias--card--main">
            <a href={props.link} target="_blank" rel="noreferrer" >
                <div className="socials--card" onMouseEnter={e => {SwitchCase(props.title)}}>
                    <div className="socials--design"><div className="socials--design--div" style={{backgroundColor: props.color}}></div></div>
                    <div className="socials--dis" ><img className="socials-img" src={props.img} width={props.width} alt="mail"></img><div id={props.title} className="socials--dis--main"> {props.title}</div></div>
                </div>
            </a>
        </div>
    )
}


const SocialsData = [
    {
        title: "EMAIL",
        color: "blue",
        link: "mailto:dhakatedeep909@gmail.com",
        img: Mail,
        width: "30px"
    },
    {
        title: "LINKEDIN",
        color: "#0072B1",
        link: "https://www.linkedin.com/in/deep-dhakate-6ba5b7214/",
        img: Linkedin,
        width: "25px"

    },
    {
        title: "GITHUB",
        color: "#9d9d9d44",
        link: "https://github.com/InTruder-Sec",
        img: Github,
        width: "30px"

    },
    {
        title: "YOUTUBE",
        color: "red",
        link: "https://www.youtube.com/@InTruderSecurity",
        img: Youtube,
        width: "30px"

    },
    {
        title: "INSTAGRAM",
        color: "#dd2a7b",
        link: "https://instagram.com/deep__dhakate",
        img: Instagram,
        width: "30px"

    }
]

function Footer() {
    return (
        <div className="footer">
            ©2022 Made with ❤️ by Deep Dhakate. All Rights Reserved.
        </div>
    )
}


export default Index;

export {Footer, NavBar, CreateHead};