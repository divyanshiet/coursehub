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
          <img src={logo} alt="Logo" />
        </div>
        <div
          className="toggle"
          onClick={() => setActive(!active)}
        >
          {active ? <IoMenu /> : <AiOutlineClose />}
        </div>
        <ul id="sidebar" className={active ? "menu" : "mobmenu active"}>
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
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#course">Courses</a>
          </li>
          <li className="contact">
            <a href="#contact">Contact us</a>
          </li>
          <li>
            <button>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </button>
          </li>
          <li>
            <button>
              <a href="#login">Login/Signup</a>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
