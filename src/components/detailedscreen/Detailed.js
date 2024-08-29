export default function Detailed() {
  return (
    <>
      <div className="detailed-card">
        <div className="course-img">
          <img src={course1}></img>
        </div>
        <div className="name-enroll">
          <div className="course-name">Intro to React Native</div>
          <div className="enroll-status">Open</div>
        </div>
        <div className="course-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. random
          sbakdbaksjakcj cknckajscnakjcn
        </div>
        <div className="know-more">
          <div className="instructor">nlsdvdnlvlnk</div>
          <div className="know-btn">
            <button onClick={toggleExpand}>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
