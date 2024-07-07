import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div className="home-nav">
      <div className="nav-container d-flex align-items-center justify-content-between py-4">
        <div className="logo-and-links d-flex align-items-center gap-5">
          <div className="nav-logo">
            <Link to={"/"}>
              <h3 style={{ margin: "0px" }} className="logo-name">
                Course<span>Bundler</span>
              </h3>
            </Link>
          </div>
          <div className="nav-links d-flex align-items-center gap-4">
            <Link to={"/internships"}>Interships</Link>
            <Link to={"/jobs"}>Jobs</Link>
            <Link to={"/courses"}>Courses</Link>
          </div>
        </div>
        <div className="login-signup-btns d-flex align-items-center gap-4">
          <Link to={"/login"}>
            <button className="btn primary-btn">Login</button>
          </Link>
          <Link to={"/registration/student"}>
            <button className="btn secondary-btn">Candidate Sign-up</button>
          </Link>
          <Link to={"/hire-talent"}>
            <button className="btn secondary-btn">Employer Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
