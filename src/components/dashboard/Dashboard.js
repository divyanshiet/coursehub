import "./dashboard.css";
import logo from "./logo.png";

import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import Enrolled_cards from "../enrolled-cards/Enrolled_cards";
import Completed from "../completed/Completed";

export default function Dashboard() {
  

  return (
    <div className="container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="dash">Dashboard</div>
        <div className="link">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </div>
        <div className="link">
          <a href="/" className="logout">
            Log out
          </a>
        </div>
      </div>
      <section className="main">
        <h1>My courses</h1>
        <div className="course-box">
          <div className="enrolled-btn">
            <NavLink to="enrolled" className={({ isActive }) => (isActive ? "active" : "")}>
              Enrolled
            </NavLink>
          </div>
          <div className="completed-btn">
            <NavLink to="completed" className={({ isActive }) => (isActive ? "active" : "")}>
              Completed
            </NavLink>
          </div>
        </div>
        <div className="course-content">
          <Routes>
          <Route path="/" element={<Navigate to="enrolled" />} />
            <Route path="enrolled" element={<Enrolled_cards />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}
