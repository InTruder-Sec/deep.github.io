function ExpCards({ image, newclass, subColor }) {
  return (
    <div
      className={`${newclass}`}
      // onmouseover="eventDesignC()"
      // onmouseout="eventDesignCout()"
    >
      <div className="eventImg1">
        <img className="eventImg" src={image} alt="event-2" />
      </div>
      <div className="eventDis2">
        <div
          className="design1"
          id="dsgCI"
          style={{ backgroundColor: `${subColor}` }}></div>
        <div className="discription2">
          <div className="disHead2">CESA INDUCTION</div>
          <div className="eventDate2">12 DEC 22</div>
          <div className="location2">Comp Department</div>
        </div>
      </div>
    </div>
  );
}

export default ExpCards;
