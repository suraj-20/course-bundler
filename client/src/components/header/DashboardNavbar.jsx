import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [isHovered1, setIsHovered1] = useState(false);

  return (
    <>
      <div className="home-nav dashboard-nav">
        <div className="nav-container d-flex align-items-center justify-content-between py-4">
          <div className="logo-and-links d-flex align-items-center">
            <div className="nav-logo">
              <Link to={"/"}>
                <h3 style={{ margin: "0px" }} className="logo-name">
                  Course<span>Bundler</span>
                </h3>
              </Link>
            </div>
          </div>
          <div className="nav-links d-flex align-items-center gap-4">
            <Link to={"/internships"}>Interships</Link>
            <Link to={"/jobs"}>Jobs</Link>
            <Link to={"/courses"}>Courses</Link>
            <div
              className="dropdown"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <Link to={""} className="dropbtn d-flex gap-2 align-items-center">
                Login / Register
              </Link>
              {isHovered1 && (
                <div className="dropdown-content">
                  <Link to={"/registration/student"}>Candidate Sign-up</Link>
                  <Link to={"/hire-talent"}>Employer Sign-up</Link>
                  <Link to={"/login"}>Login</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
