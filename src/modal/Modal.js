import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice';
import {
  BookOpen,
  User,
  Clock,
  Calendar,
  MapPin,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  AlertCircle,
  X
} from "lucide-react";
import "./modal.css";

function Modal({ courseId, onClose }) {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!data) {
      dispatch(fetchData());
    }
  }, [dispatch, data]);

  const courseData = data?.find((course) => course.id === courseId);
  console.log(courseData);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!courseData) {
    return <div>No course data found.</div>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-card">
          <div className="header">
            <div className="header-content">
              <h1>{courseData.name}</h1>
              <div className="instructor">
                <User size={16} />
                <span>{courseData.instructor}</span>
              </div>
            </div>
          </div>

          <div className="status-bar">
            <div className="status-indicator">
              <AlertCircle color="black" size={20} />
              <span>Status:</span>
              <span className={`status-badge ${courseData.enrollmentStatus?.toLowerCase() || "unknown"}`}>
                {courseData.enrollmentStatus || "Unknown"}
              </span>
            </div>
            <div className="duration">
              <Clock color="black" size={20} />
              <span>{courseData.duration}</span>
            </div>
          </div>

          <div className="modal-main-content">
            <div className="modal-section">
              <h2 className="section-title">
                <BookOpen color="black" size={20} /> Description
              </h2>
              <div className="modal-description">{courseData.description}</div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <h3><Calendar color="black" size={20} /> Schedule</h3>
                <p>{courseData.schedule}</p>
              </div>
              <div className="info-item">
                <h3><MapPin color="black" size={20} /> Location</h3>
                <p>{courseData.location}</p>
              </div>
            </div>

            <div className="modal-section">
              <h2 className="section-title">
                <GraduationCap color="black" size={20} /> Prerequisites
              </h2>
              <ul className="prerequisites-list">
                {courseData.prerequisites.map((prereq, index) => (
                  <li key={index}>
                    <CheckCircle color="black" size={16} />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <button className="syllabus-button" onClick={() => setIsSyllabusOpen(!isSyllabusOpen)}>
                <span>Syllabus</span>
                {isSyllabusOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isSyllabusOpen && (
                <div className="syllabus-content">
                  {courseData.syllabus.map((item, index) => (
                    <div key={index} className="syllabus-item">
                      <h3>Week {item.week}</h3>
                      <h4>{item.topic}</h4>
                      <p>{item.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={onClose}>
        <X size={24} />
      </button>
    </div>
  );
}

export default Modal;
