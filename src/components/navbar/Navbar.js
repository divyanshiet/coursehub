import logo from "./logo.png";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(true);
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

  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="toggle" onClick={() => setActive(!active)}>
          {active ? <GiHamburgerMenu /> : <RiCloseLargeLine />}
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
          {isLoggedIn ? (
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
          ) : (
            <li>
              <button>
                <NavLink to="/login">Login/Signup</NavLink>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
