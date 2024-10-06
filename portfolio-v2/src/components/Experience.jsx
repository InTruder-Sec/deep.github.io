import ExpCards from "./ExpCards";
import h1 from "../assets/h1.jpg";
import wave from "../assets/waveauth.png";
import turning from "../assets/turninglabs.png";

function Experience() {
  return (
    <div>
      <div className="events">
        <div className="eventsHead2">Experience</div>
        <div className="eventsHead1">Experience</div>

        <div className="eventsDiv">
          <ExpCards image={h1} newclass={"event1"} subColor={"#dd3737"} />
          <ExpCards image={wave} newclass={"event2"} subColor={"purple"} />
          <ExpCards image={turning} newclass={"event1"} subColor={"blue"} />
        </div>
      </div>

      <div className="custom-shape-divider-top-1674489526 flip">
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

export default Experience;
