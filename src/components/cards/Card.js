import React, { useState, useContext } from "react";
import apiContext from "../../context/apiContext";
import "./card.css";

export default function Card(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSyllabusExpanded, setIsSyllabusExpanded] = useState(false);
  const [showhidesyllabus, setIsshowhidesyllabus] = useState("Click to Expand");
  const { data } = useContext(apiContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSyllabusExpand = () => {
    setIsSyllabusExpanded(!isSyllabusExpanded);
    if (showhidesyllabus === "Click to Expand") {
      setIsshowhidesyllabus("Click to show less");
    } else {
      setIsshowhidesyllabus("Click to Expand");
    }
  };

  return (
    <>
      <div className={isExpanded ? "expanded" : "course-list"}>
        <div className="course-img">
          <img src={props.image} alt={data[props.number].name} />
        </div>
        <div className="remaining">
          <div className="name-enroll">
            <div className="course-name">{data[props.number].name}</div>
            <div
              className={
                data[props.number].enrollmentStatus === "Open"
                  ? "yenroll"
                  : "nenroll"
              }
            >
              {data[props.number].enrollmentStatus}
            </div>
          </div>
          <div className="course-description">
            {data[props.number].description}
          </div>
          <div className="know-more">
            <div className="instructor">{data[props.number].instructor}</div>
            <div className="know-btn">
              <button onClick={toggleExpand}>
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
          {isExpanded && (
            <div className="expanded-details">
              <p>
                <strong>Duration:</strong> {data[props.number].duration}
              </p>
              <p>
                <strong>Schedule:</strong> {data[props.number].schedule}
              </p>
              <p>
                <strong>Location:</strong> {data[props.number].location}
              </p>
              <div className="prerequisites">
                <strong>Prerequisites:</strong>
                <ul>
                  {data[props.number].prerequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="syllabus">
                <strong>Syllabus:</strong>
                <div className="syllabus-title" onClick={toggleSyllabusExpand}>
                  {showhidesyllabus}
                </div>
                {isSyllabusExpanded && (
                  <div className="syllabus-content">
                    {data[props.number].syllabus.map((week, index) => (
                      <div key={index}>
                        <p>
                          <strong>Week {week.week}:</strong> {week.topic}
                        </p>
                        <p>{week.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
