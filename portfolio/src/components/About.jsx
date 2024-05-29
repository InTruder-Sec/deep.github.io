import { CreateHead } from "../pages";
import resume from "../Data/Resume.pdf";


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
          projects, I am currently dedicated to expand my knowledge in cloud
          computing.
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
          <a href={resume} target="_blank" rel="noreferrer">
            <button
              className="contact-us socials-button"
              style={{ width: "200px" }}
            >
              Download Resume
            </button>
          </a>
        </div>
      </div>
    );
  }


  export default AboutMe;