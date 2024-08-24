import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ notificationDropdownOpen, toggleNotificationDropdown }) => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const getUserName = () => {
    const emailParts = username.split("@");
    const name = emailParts[0];
    return name;
  };

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/");
  };

  useEffect(() => {
    const storedemail = sessionStorage.getItem("email");
    if (storedemail) {
      setIsLoggedIn(true);
      setUsername(storedemail);
    }
  }, []);

  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">StayHealthy </Link>
        </div>
        <div className="nav__icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav__links active" : "nav__links"}>
          <li className="link">
            <Link to="Home">Home</Link>
          </li>
          <li className="link">
            <Link to="BookingConsultation">Appointments</Link>
          </li>
          <li className="link">
            <Link to="ReviewForm">Reviews</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li
                className="link welcome-user"
                onClick={toggleNotificationDropdown}
              >
                {`Welcome, ${getUserName()}`}
                <ul
                  className={`dropdown-menu ${
                    notificationDropdownOpen ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="ProfileCard">Your Profile</Link>
                  </li>
                  <li>
                    <Link to="ReportsLayout">Your Reports</Link>
                  </li>
                </ul>
              </li>
              <li className="link">
                <button type="button" className="btn2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="link">
                <Link to="signup">
                  <button type="button" className="btn1">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li className="link">
                <Link to="login">
                  <button type="button" className="btn1">
                    Login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
