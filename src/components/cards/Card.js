import React, { useState, useContext } from "react";
import apiContext from "../../context/apiContext";
import "./card.css";


export default function Card(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {data} = useContext(apiContext);
  if(!data) {
    return <div>Loading...</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {/* old approach


       <div className={isExpanded ? "expanded" : "course-list"}>
        <div className="course-img">
          <img src={props.image} alt={data[props.number].name} />
        </div>
        <div className="remaining">
        <div className="name-enroll">
          <div className="course-name">{data[props.number].name}</div>
          <div className={data[props.number].enrollmentStatus==="Open" ? "yenroll":"nenroll" }>{data[props.number].enrollmentStatus}</div>
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
           
          </div>
        )}
        </div>
      </div> */}
      <div className={isExpanded ? "expanded" : "course-list"}>
        <div className="course-img">
          <img src={props.image} alt={data[props.number].name} />
        </div>
        <div className="remaining">
        <div className="name-enroll">
          <div className="course-name">{data[props.number].name}</div>
          <div className={data[props.number].enrollmentStatus==="Open" ? "yenroll":"nenroll" }>{data[props.number].enrollmentStatus}</div>
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
           
          </div>
        )}
        </div>
      </div>
    </>
  );
}
