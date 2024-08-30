import headerimg from './headerimage.png';
import './section1.css'

export default function Section1()
{
    return(
        <>
           <div className="section">
            <div className="sec1">
                <div className="name">
                 Hello <span>learners</span>
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