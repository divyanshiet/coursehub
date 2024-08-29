import logo from "./logo.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(true);
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div
          className="toggle"
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? <IoMenu /> : <AiOutlineClose />}
        </div>
        <ul id="sidebar" className={active ? "menu" : "mobmenu"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#course">Courses</a>
          </li>
          <li className="contact">
            <a href="#">Contact us</a>
          </li>
          <li>
            <button>
              <a href="#">Dashboard</a>
            </button>
          </li>
          <li>
            <button>
              <a href="#">Login/signup</a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
