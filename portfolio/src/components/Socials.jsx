import { CreateHead, SwitchCase } from "../pages";
import SocialsData from "../Data/Socials";


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



  export default Socials;