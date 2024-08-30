import React, { useContext } from "react";
import apiContext from "../../context/apiContext";
import "./enrollcardstruct.css";

export default function Enrollcardstruc(props) {
  const { data } = useContext(apiContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="enroll-course">
      <div className="enrollcourse-list">
        <div className="course-img">
          <img src={props.image} alt={data[props.number].name} />
        </div>
        <div className="remaining">
          <div className="name-enroll">{data[props.number].name}</div>
          <div className="know-more">{data[props.number].instructor}</div>
          <div className="duedate">
            <div className="title">Due Date:</div>
            <div className="date">27 Dec 2024</div>
          </div>
          <div className="bar-done">
            <div className="progressbar">
              <progress value={75} max={100} />
            </div>
            <div className="done-btn">
              <button>Mark completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
