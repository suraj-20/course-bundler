import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-column about_internshala_left d-grid gap-3">
          <div className="footer-lists d-flex flex-column gap-3">
            <div className="nav-logo">
              <Link to={"/"}>
                <h3 style={{ margin: "0px" }} className="logo-name">
                  Course<span>Bundler</span>
                </h3>
              </Link>
            </div>
            <ul
              style={{ margin: "0" }}
              className="footer-list-links d-flex gap-4"
            >
              <a href="">
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </a>
              <a href="">
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
              </a>
              <a href="">
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
              </a>
              <a href="">
                <li>
                  <i class="fa-brands fa-linkedin"></i>
                </li>
              </a>
            </ul>
          </div>
          <div className="footer-lists">
            <ul
              style={{ margin: "0" }}
              className="footer-list-links d-flex gap-3 flex-column"
            >
              <a href="">
                <li>About Us</li>
              </a>
              <a href="">
                <li>We're hiring</li>
              </a>
              <a href="">
                <li>Hire interns for our company</li>
              </a>
              <a href="">
                <li>Post a job</li>
              </a>
            </ul>
          </div>
          <div className="footer-lists">
            <ul
              style={{ margin: "0" }}
              className="footer-list-links d-flex gap-3 flex-column"
            >
              <a href="">
                <li>Team Dairy</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Our Services</li>
              </a>
            </ul>
          </div>
          <div className="footer-lists">
            <ul
              style={{ margin: "0" }}
              className="footer-list-links d-flex gap-3 flex-column"
            >
              <a href="">
                <li>Terms & conditions</li>
              </a>
              <a href="">
                <li>Privacy</li>
              </a>
              <a href="">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
          <div className="footer-lists">
            <ul
              style={{ margin: "0" }}
              className="footer-list-links d-flex gap-3 flex-column"
            >
              <a href="">
                <li>Sitemap</li>
              </a>
              <a href="">
                <li>Collage TPO registration</li>
              </a>
              <a href="">
                <li>List of company</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="sub-footer-description text-center">
          <p style={{ margin: "0", color: "#fff", fontSize: "1.2rem" }}>
            Developed By{" "}
            <span
              style={{ color: "red", fontWeight: "700", cursor: "pointer" }}
            >
              Suraj
            </span>{" "}
            ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
