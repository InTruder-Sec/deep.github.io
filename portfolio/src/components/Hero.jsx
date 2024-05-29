import heroImg from "../images/profile.png";


function Hero() {
    return (
      <div className="Hero" id="hero">
        <div className="hero--dis">
          <img className="hero--img" src={heroImg} alt="ProfileImage"></img>
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


  export default Hero;