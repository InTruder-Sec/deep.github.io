import { CreateHead } from "../pages";
import GearImg from "./../images/gears.png";
import ProjectData from "../Data/Projects";



function Projects() {
    const ProjectCardDetails = ProjectData.map((item) => {
      return (
        <ProjectCard
          id={item.id}
          title={item.title}
          link={item.link}
          linkText={item.linkText}
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
                {props.linkText}{" "}
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

  export default Projects;