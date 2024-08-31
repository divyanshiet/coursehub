import headerimg from './headerimage.png';
import './section1.css'

import { useState, useEffect } from "react";

export default function Section1()
{
    
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
    return(
        <>
           <div className="section">
            <div className="sec1">
                <div className="name">
                 Hello <span>{isLoggedIn ? localStorage.getItem("username") : "learners"}</span>
                </div>
                <div className="description">
                <b>Unlock Your Learning</b> Potential: Budget-friendly Courses, Interactive Content, Expert Instructors, Real Projects & Assignments!
                </div>
                <div className="explore-btn">
                <button>
                  <a href='#course'>
              Explore Courses
                </a>
                </button>
                </div>
            </div>
            <div className="sec2">
                <img src={headerimg}></img>
            </div>
           </div>
        </>
    )
}