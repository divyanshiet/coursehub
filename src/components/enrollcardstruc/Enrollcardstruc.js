
import React, { useEffect, useState } from "react";
import "./enrollcardstruct.css";

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice';

export default function Enrollcardstruc(props) {
  const [completed, setCompleted] = useState(false);
   const dispatch = useDispatch();
      const { data, loading, error } = useSelector((state) => state.user);
  
      useEffect(() => {
          dispatch(fetchData());
      }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }
  else if (error) {
    return <div>Error: {error}</div>;
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
              <button onClick={()=>setCompleted(completed)} courseId = {props.number}  >Mark completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}