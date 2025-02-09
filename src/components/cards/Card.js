import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slice';
import "./card.css";
import Modal from "../../modal/Modal";

export default function Card({ number, image }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
    const { data, loading,error} = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
  if (loading) {
    return <div>Loading...</div>;
  }

  const courseData = data[number];

  return (
    <>
      {/* Show Modal when expanded */}
      {isExpanded && (
        <Modal courseId={courseData.id} courseData={courseData} onClose={() => setIsExpanded(false)} />
      )}

      <div className="course-list">
        <div className="course-img">
          <img src={image} alt={courseData?.name || "Course"} />
        </div>

        <div className="remaining">
          <div className="name-enroll">
            <div className="course-name">{courseData?.name}</div>
            <div className={courseData?.enrollmentStatus === "Open" ? "yenroll" : "nenroll"}>
              {courseData?.enrollmentStatus}
            </div>
          </div>

          <div className="course-description">
            {courseData?.description}
          </div>

          <div className="know-more">
            <div className="instructor">{courseData?.instructor}</div>
            <div className="know-btn">
              <button onClick={() => setIsExpanded(true)}>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
