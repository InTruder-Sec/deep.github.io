// import { CreateHead } from "../pages";
import SkillData from "../Data/skills";
import "../styles/skills.css";

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
      <div className="Owasp-Head2">Expertise</div>
      <div className="Owasp-Head">Expertise</div>
      {/* <CreateHead head="skills" title="My Skills" /> */}
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
      <div
        className="custom-shape-divider-top-1674489526 home-shape"
        style={{ zIndex: 1, marginTop: "0px" }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

function SkillCard(props) {
  return (
    <div className="skill--card">
      <div
        className="skill--card--color"
        style={{ backgroundColor: props.color }}></div>
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

export default Skills;
