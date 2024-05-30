import ExpData from "../Data/Experience";
import { CreateHead } from "../pages";


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
  
  
  
  function ExpCard(props) {
    return (
      <div
        className={props.classN}
        onClick={(e) => {
          OpenDetails(props.id);
        }}
      >
        <div className="expcard--img pad">
          <img className="expcard--img exp-img-small" alt="vtfImage" src={props.img}></img>
        </div>
        <div className="expcard--dis">
          <div
            className="expcard--dis--design"
            style={{ background: props.color }}
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
          <div className={newIdImg} style={{ background: e.color }}>
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


//   Old Code No Changes
  
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

  
  export default Experience;
  export { ExpDetails}