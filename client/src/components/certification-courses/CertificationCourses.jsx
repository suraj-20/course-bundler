import React from "react";
import "./CertificationCourses.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import courseImage1 from "../../assets/web_development.png";
import courseImage2 from "../../assets/python.png";
import courseImage3 from "../../assets/digital_marketing.png";
import courseImage4 from "../../assets/machine_learning.png";

const CertificationCourses = () => {
  return (
    <div className="course-section ">
      <div className="latest-intern-container d-flex flex-column gap-4">
        <div className="latest-heading text-center">
          <h3 className="title">Certification Course</h3>
          <p className="sub-title">Fastest way to build your CV</p>
        </div>
        <div className="cards d-flex align-items-center justify-content-center gap-3">
          <div className="card course-card p-0">
            <Link
              to={""}
              className="course-card-link d-flex flex-column justify-content-between h-100"
            >
              <img
                class="card-img-top"
                src={courseImage1}
                alt="Card image cap"
              ></img>
              <div className="content p-3 d-flex flex-column gap-2">
                <span className="duration">8 weeks</span>
                <h3>Web Development</h3>
                <div className="extra-info d-flex gap-3 align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span className="rating">4.2</span>
                  <span className="learners">28,102</span>
                </div>
                <span className="know-more" style={{ color: "#4996fa" }}>
                  Know More <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="card course-card p-0">
            <Link
              to={""}
              className="course-card-link d-flex flex-column justify-content-between h-100"
            >
              <img
                class="card-img-top"
                src={courseImage2}
                alt="Card image cap"
              ></img>
              <div className="content p-3 d-flex flex-column gap-2">
                <span className="duration">8 weeks</span>
                <h3>Programming with Python</h3>
                <div className="extra-info d-flex gap-3 align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span className="rating">4.2</span>
                  <span className="learners">28,102</span>
                </div>
                <span className="know-more" style={{ color: "#4996fa" }}>
                  Know More <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="card course-card p-0">
            <Link
              to={""}
              className="course-card-link d-flex flex-column justify-content-between h-100"
            >
              <img
                class="card-img-top"
                src={courseImage3}
                alt="Card image cap"
              ></img>
              <div className="content p-3 d-flex flex-column gap-2">
                <span className="duration">8 weeks</span>
                <h3>Digital Marketing</h3>
                <div className="extra-info d-flex gap-3 align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span className="rating">4.2</span>
                  <span className="learners">28,102</span>
                </div>
                <span className="know-more" style={{ color: "#4996fa" }}>
                  Know More <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="card course-card p-0">
            <Link
              to={""}
              className="course-card-link d-flex flex-column justify-content-between h-100"
            >
              <img
                class="card-img-top"
                src={courseImage4}
                alt="Card image cap"
              ></img>
              <div className="content p-3 d-flex flex-column gap-2">
                <span className="duration">8 weeks</span>
                <h3>Machine Learning</h3>
                <div className="extra-info d-flex gap-3 align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span className="rating">4.2</span>
                  <span className="learners">28,102</span>
                </div>
                <span className="know-more" style={{ color: "#4996fa" }}>
                  Know More <FaAngleRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCourses;
