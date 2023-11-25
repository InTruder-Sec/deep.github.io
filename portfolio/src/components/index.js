import React from "react";
import "../App.css";
import heroImg from "../images/profile.png";
import expcardimg1 from "./../images/vtf-image.png";
import expcardimg2 from "./../images/owasp-img.png";
import expcardimg3 from "./../images/h1.jpg";
import GearImg from "./../images/gears.png";
import Mail from "./../images/mail.png";
import Linkedin from "./../images/linkedin.png";
import Youtube from "./../images/youtube.png";
import Github from "./../images/github.png";
import Instagram from "./../images/instagram.png";
import SkillData from "../Data/skills";

let isEnabled = [];
let isActive = false;

function Index() {
  return (
    <div className="index">
      <NavBar />
      <Hero />
      <AboutMe />
      <Experience />
      <ExpDetails />
      <Skills />
      <Projects />
      <Socials />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <div className="NavBar">
      <div className="Nav">
        <div className="Nav-place">
          <a href="/" rel="noreferrer">
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
      <div className="hamburger" id="hamburger">
        <div className="haburger--btn" onClick={OpenNav}>
          <div className="hamburger--dis dis1"></div>
          <div className="hamburger--dis dis2"></div>
          <div className="hamburger--dis dis3"></div>
        </div>
        <div className="cover-place cover-active">
          <a href="/" rel="noreferrer">
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

function OpenNav() {
  if (isActive) {
    isActive = false;
    document.getElementById("hamburger").classList.remove("cover");
    document.querySelector(".dis2").classList.remove("active2");
    document.querySelector(".dis3").classList.remove("active3");
    document.querySelector(".dis1").classList.remove("active1");
    document.querySelector(".cover-place").classList.add("cover-active");
  } else {
    isActive = true;
    document.getElementById("hamburger").classList.add("cover");
    document.querySelector(".dis1").classList.add("active1");
    document.querySelector(".dis2").classList.add("active2");
    document.querySelector(".dis3").classList.add("active3");
    document.querySelector(".cover-place").classList.remove("cover-active");
  }
}

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
            <div className="intro-content2">
              <u>HIRE</u> <u>NOW</u>
            </div>
          </a>
          <div className="intro-content3">
            <h2>Secure your products from hackers.</h2>
          </div>
          <div className="intro-content4">
            Hackers exploit everything. Is your website safe from Hackers?
            Contact Us and test your products now.
          </div>
          <a href="#Socials">
            <button className="contact-us">Contact-Us</button>
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="About-Me">
      <CreateHead head="ABOUT" title="ABOUT ME" />
      <div className="about--details">
        Hey there👋, my name is Deep. I am a Highly skilled Web Developer and
        Ethical Hacker with a strong expertise in ReactJS and UI development.
        Adept at creating innovatively designed websites, I bring a
        comprehensive understanding of HTML, CSS3, and JavaScript to deliver
        exceptional user experiences. With a passion for tackling diverse
        projects, I am currently dedicated to expand my knowledge in back end
        development.
        <br />
        <br />
        Additionally, I acquire a solid skill set in MongoDB, Express , SQL, C++
        for Data Structures and Algorithms, as well as Networking. This
        versatility enables me to approach projects from multiple angles,
        ensuring comprehensive and efficient solutions. Looking for a job in the
        Red Team of a company. Being a greedy learner, I love to explore how
        things work around me.
        <br />
        <br />
        Feel free to contact me for collaboration and to bring exciting ideas to
        life.
        <br />
        <a href="/#socials">
          <button className="contact-us socials-button">Socials</button>
        </a>
      </div>
    </div>
  );
}

function Experience() {
  const newCard = ExpData.map((item) => {
    return (
      <ExpCard
        id={item.id}
        classN={item.classDis}
        head={item.title}
        role={item.role}
        loc={item.loc}
        img={item.img}
        color={item.color}
        key={item.title}
      />
    );
  });

  return (
    <div className="experience">
      <CreateHead head="experience" title="MY EXPERIENCE" />
      <div className="exp-container">{newCard}</div>
    </div>
  );
}

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

function ExpCard(props) {
  return (
    <div
      className={props.classN}
      onClick={(e) => {
        OpenDetails(props.id);
      }}
    >
      <div className="expcard--img">
        <img className="expcard--img" alt="vtfImage" src={props.img}></img>
      </div>
      <div className="expcard--dis">
        <div
          className="expcard--dis--design"
          style={{ backgroundColor: props.color }}
        ></div>
        <div className="expcard--dis--head">{props.head}</div>
        <div className="expcard--dis--role">{props.role}</div>
        <div className="expcard--dis--loc">{props.loc}</div>
      </div>
    </div>
  );
}

function ExpDetails() {
  const OpenDetailsDiv = ExpData.map((e) => {
    let newIdImg = "expdetails--img expdetails--img" + e.id;
    let newIdDetails = "expdetails--details expdetails--details" + e.id;
    return (
      <div className="expdetails">
        <div className={newIdImg} style={{ backgroundColor: e.color }}>
          <div className="exp--details--img">
            <img className="exp--details--img" alt={e.title} src={e.img}></img>
            <div className="exp--img--details">{e.title}</div>
          </div>
        </div>
        <div className={newIdDetails}>
          <div
            className="haburger--btn"
            onClick={(r) => {
              ExitExpDetails(e.id);
            }}
          >
            <div className="hamburger--dis dis4 exp-exit"></div>
            <div className="hamburger--dis dis5 exp-exit"></div>
          </div>
          <div className="exp--details--main">
            <div className="exp--main--role">
              <b>{e.role}</b>
            </div>
            <div className="exp--main--date">{e.date}</div>
            <div
              className="exp--main--dis"
              dangerouslySetInnerHTML={{ __html: e.details }}
            ></div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="ExpDetails>">{OpenDetailsDiv}</div>;
}

function OpenDetails(e) {
  let newIdImg = ".expdetails--img" + e;
  let newIdDetails = ".expdetails--details" + e;
  document.querySelector(newIdImg).style.height = "100%";
  document.querySelector(newIdDetails).style.height = "100%";
}

function ExitExpDetails(e) {
  let newIdImg = ".expdetails--img" + e;
  let newIdDetails = ".expdetails--details" + e;
  document.querySelector(newIdImg).style.height = "0%";
  document.querySelector(newIdDetails).style.height = "0%";
}

const ExpData = [
  {
    id: 1,
    title: "Virtual Testing Foundation",
    role: "CyberSecurity Intern",
    loc: "remote",
    date: "JAN 18 2021 - MAR 18 2021",
    img: expcardimg1,
    classDis: "expcard1 expcard",
    color: "red",
    details:
      "VTF is a California, USA based 501(c)3 nonprofit volunteer-run organization. Over the internship period I have completed,<br><br>● Kube Academy Courses<br><br>● Hands-on lab learning<br/><br/>● Digital and social media marketing<br/><br/>● Captured minutes of meeting and had team collaborations",
  },
  {
    id: 2,
    title: "OWASP Chapter PCCOE",
    role: "Security Team Lead",
    loc: "PCCOE",
    date: "JULY 25 2021 - CURRENT",
    img: expcardimg2,
    classDis: "expcard2 expcard",
    color: "blue",
    details:
      "The Open Web Application Security Project® (OWASP) is a nonprofit foundation that works to improve the security of software. Being a part of Security & CTF Team, my responsibilities are,<br/><br/>● Organize Tech-talks<br/><br/>● Lead University CTF Team<br/><br/>● Organize Security Workshops & Bootcamps<br/><br/>● Create Awareness Regarding Security Domain",
  },
  {
    id: 3,
    title: "Hacktivitycon Rank 45",
    role: "CTF Team Lead",
    loc: "REMOTE",
    date: "SEPT 17 2021 - SEPT 19 2021",
    img: expcardimg3,
    classDis: "expcard1 expcard",
    color: "purple",
    details:
      "H@ctivitycon is a HackerOne hosted hacker conference built by the community for the community. We scored 5527 points and stood 45th all over world. We PWNed the following categories,<br/><br/>● Forensics, OSINT<br/><br/>● Web Vulnerabilities<br/><br/>● Cryptography, Reverse Engineering<br/><br/>● Mobile App Vulnerabilities.",
  },
];

function Skills() {
  const listSkill = SkillData.map((item) => {
    return (
      <SkillList
        key={item.id}
        count={item.count}
        date={item.date}
        sl={item.sl}
      />
    );
  });
  return (
    <div className="skills">
      <CreateHead head="skills" title="My Skills" />
      <div className="skills-exp-col">
        Experience Color
        <SkillCard color="red" level="P1 - [10] critical" />
        <SkillCard color="blue" level="P2 - [7-9] High" />
        <SkillCard color="yellow" level="P3 - [4-7] Medium" />
        <SkillCard color="greenyellow" level="P4 - [1-4] Low" />
      </div>
      <div className="skills-list">
        <div className="skill--list--Jor">My Journey</div>
        {listSkill}
        <div className="skill--end">
          <div className="skill--end--hr" />
          <div className="skill--end--hr2" />
          <div className="skill--end--hr3" />
        </div>
      </div>
    </div>
  );
}

function SkillCard(props) {
  return (
    <div className="skill--card">
      <div
        className="skill--card--color"
        style={{ backgroundColor: props.color }}
      ></div>
      <div className="skill--card--dis">{props.level}</div>
    </div>
  );
}

function SkillList(props) {
  const newList = props.sl.map((item) => {
    return <SkillCard color={item.color} level={item.level} key={item.level} />;
  });
  return (
    <div className="skill--list--card">
      <div className="skill--list--date">{props.date}</div>
      <div className="skill--list--hr" style={{ height: props.count * 100 }} />
      <div className="skill--li--card">{newList}</div>
    </div>
  );
}

function Projects() {
  const ProjectCardDetails = ProjectData.map((item) => {
    return (
      <ProjectCard
        id={item.id}
        title={item.title}
        link={item.link}
        details={item.details}
        tools={item.tools}
        key={item.key}
      />
    );
  });
  return (
    <div className="projects">
      <CreateHead head="projects" title="My Projects" />
      {ProjectCardDetails}
    </div>
  );
}

function ProjectCard(props) {
  const toolsDetails = props.tools.map((item) => {
    return <div className="project--tool">{item}</div>;
  });
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
            <a href={"https://" + props.link} rel="noreferrer" target="_blank">
              {props.link}{" "}
            </a>
          </div>
        </div>
        <div className="project--link project--tech">
          <div className="project--link--head">Tech Used</div>
          <div className="project--link--a">{toolsDetails}</div>
        </div>
      </div>
    </div>
  );
}

const ProjectData = [
  {
    id: "01",
    key: "1",
    title: "FullStack Web Development Projects",
    details:
      "I am currently working on full stack web development projects. Almost all of the websites created under this project are built with MERN Stack. Project contails multiple games, E-commerce website, normal website and much more.",
    link: "github.com/InTruder-Sec/Full-StackDev-Projects",
    tools: ["HTML5", "CSS", "JavaScript", "React", "Canva"],
  },
  {
    id: "02",
    key: "2",
    title: "Iconic Hashing Algorithm",
    details:
      "IH is a unique hashing algorithm which works on base 10 digits for hashing. This hashing algorithm works on each of these digits to convert them into an unpredictable number format. This tool hashes any given string into its iconic hash.",
    link: "github.com/InTruder-Sec/IHA",
    tools: ["Python3"],
  },
  {
    id: "03",
    key: "3",
    title: "Cesar Encrypter & Decrypter",
    details:
      "In cryptography, a Caesar cipher is categorized as a substitution cipher in which the alphabet in the plain text is shifted by a fixed number down the alphabet. I have created a python tool which encrypts and decrypts strings with all posible set of keys.",
    link: "github.com/InTruder-Sec/caesar-cipher",
    tools: ["Python3"],
  },
  {
    id: "04",
    key: "4",
    title: "Tech-Fest 2022 Website",
    details:
      "Techfest - 2K22 is the technical tvent of PCET's Pimpri Chinchwad College of Engineering, Pune. Website for Tech-Fest 2k22 was created and maintained by me. Almost 2000+ event registrations were done on the site.",
    link: "techfest2k22.web.app/",
    tools: ["HTML5", "CSS", "JavaScript", "Firebase"],
  },
];

function Socials() {
  const GetSocailCard = SocialsData.map((e) => {
    return (
      <SocialCard
        title={e.title}
        color={e.color}
        link={e.link}
        img={e.img}
        width={e.width}
        key={e.title}
      />
    );
  });

  return (
    <div className="socials">
      <CreateHead head="Socials" title="Socials" />
      <div className="socials--head">
        <ul>
          <li>Reach Me Out</li>
        </ul>
      </div>
      <div className="socials--list">{GetSocailCard}</div>
    </div>
  );
}

function SocialCard(props) {
  return (
    <div className="socias--card--main">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div
          className="socials--card"
          onMouseEnter={(e) => {
            SwitchCase(props.title);
          }}
        >
          <div className="socials--design">
            <div
              className="socials--design--div"
              style={{ backgroundColor: props.color }}
            ></div>
          </div>
          <div className="socials--dis">
            <img
              className="socials-img"
              src={props.img}
              width={props.width}
              alt="mail"
            ></img>
            <div id={props.title} className="socials--dis--main">
              {" "}
              {props.title}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

const SocialsData = [
  {
    id: 1,
    title: "EMAIL",
    color: "blue",
    link: "mailto:dhakatedeep909@gmail.com",
    img: Mail,
    width: "30px",
  },
  {
    id: 2,
    title: "LINKEDIN",
    color: "#0072B1",
    link: "https://www.linkedin.com/in/deep-dhakate-6ba5b7214/",
    img: Linkedin,
    width: "25px",
  },
  {
    id: 3,

    title: "GITHUB",
    color: "#9d9d9d44",
    link: "https://github.com/InTruder-Sec",
    img: Github,
    width: "30px",
  },
  {
    id: 3,
    title: "YOUTUBE",
    color: "red",
    link: "https://www.youtube.com/@InTruderSecurity",
    img: Youtube,
    width: "30px",
  },
  {
    id: 4,
    title: "INSTAGRAM",
    color: "#dd2a7b",
    link: "https://instagram.com/deep__dhakate",
    img: Instagram,
    width: "30px",
  },
];

function Footer() {
  return (
    <div className="footer">
      ©{new Date().getFullYear()} Made with ❤️ by Deep Dhakate. All Rights
      Reserved.
    </div>
  );
}

export default Index;

export { Footer, NavBar, CreateHead };
