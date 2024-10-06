import image from "../assets/profile.jpeg";

import Banner from "../assets/Banner2.png";
import Tilt from "react-parallax-tilt";
import { useState } from "react";

function Home() {
  const [magic, showMagic] = useState(0);

  const handleMagic = () => {
    showMagic(magic ? 0 : 1);
  };

  return (
    <>
      <div className={`magic-div ${magic ? "" : "hide"}`} onClick={handleMagic}>
        <Tilt
          className="background-stripes parallax-effect-glare-scale"
          perspective={500}
          glareEnable={true}
          glareMaxOpacity={1}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="20px"
          scale={1.02}
          gyroscope={true}>
          <img src={Banner} alt="profile" className="banner" />
        </Tilt>
      </div>
      <div className="home-flex">
        <div className="img-flex">
          <img className="Owasp-Bg" src={image} alt="logo" />
        </div>
        <div>
          <div className="wrapper">
            <div className="Owasp-Head2">Deep</div>
            <div className="Owasp-Head">Deep</div>
            <div className="hh">
              <div className="Owasp-Head2 pccoe" id="home">
                Dhakate
              </div>
              <div className="Owasp-Head pccoeHead">Dhakate</div>
            </div>
          </div>

          <div className="stdChap">Ethical Hacker | Web Developer</div>
          <div className="text">
            Hi👋, I’m Deep, a skilled Web Developer and Ethical Hacker with
            expertise in ReactJS and UI development. I excel in HTML, CSS3, and
            JavaScript to create exceptional user experiences, and I also have
            strong skills in MongoDB, Express, SQL, C++, and Networking.
            Currently, I’m expanding my knowledge in cloud computing and looking
            for a Red Team role. As a curious learner, I’m always eager to
            explore how things work.
            <div className="btnlearn">
              <button
                className="contact-us bottom-margin see-magic"
                onClick={handleMagic}>
                See magic?{" "}
              </button>
              <button
                className="contact-us bottom-margin margin-left"
                onClick={handleMagic}>
                Download CV
              </button>
            </div>
          </div>
          <div
            className="custom-shape-divider-top-1674489526 home-shape"
            style={{ zIndex: 1, marginTop: "40px" }}>
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
      </div>
    </>
  );
}

export default Home;
