import React, { useState} from "react";

import Card from "../cards/Card";
import image1 from "./react-native_large.png";
import image2 from "./reactimg.png";
import image3 from "./nodeimg.png";
import image4 from "./mongoimg.png";
import image5 from "./nextimg.jpg";
import "./courses.css";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    { id: 0, name: "React Native", image: image1 },
    { id: 1, name: "Reactjs", image: image2 },
    { id: 2, name: "Nodejs", image: image3 },
    { id: 3, name: "MongoDB", image: image4 },
    { id: 4, name: "Nextjs", image: image5 },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const containerClass = filteredCourses.length > 0 ? "all-card" : "no-scroll";

 

  return (
    <>
      <div id="course" className="courses">
        <div className="headline">
        What would you like to <span>Learn?</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a course..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className={containerClass}>{filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Card key={course.id} number={course.id} image={course.image} />
            ))
          ) : (
            <div className="no-courses">No courses found</div>
          )}
        </div>
      </div>
    </>
  );
}
