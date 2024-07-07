import React from "react";
import "./LatestInternships.css";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt, FaAngleRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
// import {} from "react-icons/fa6";

const LatestInternships = () => {
  console.log("Latest");
  return (
    <div className="latest-intern-section ">
      <div className="latest-intern-container d-flex flex-column gap-4">
        <div className="latest-heading text-center">
          <h3 className="title">Latest internships on CourseBundler</h3>
        </div>
        <div className="cards d-flex align-items-center justify-content-between gap-3">
          <div className="card" style={{ width: "350px" }}>
            <Link
              to={""}
              className="card-link d-flex flex-column justify-content-between h-100"
            >
              <div className="card-heading">
                <div className="card-content d-flex flex-column gap-1">
                  <p style={{ margin: "0px" }}>
                    Software development Engineering
                  </p>
                  <span>Internshala</span>
                </div>
              </div>
              <ul className="list-items d-flex flex-column gap-2">
                <li>
                  <IoLocationOutline /> Gurggaon
                </li>
                <li>
                  <FaRegMoneyBillAlt /> ₹ 18,000 /month
                </li>
                <li>
                  <SlCalender /> 6 Months
                </li>
              </ul>
              <div className="footer d-flex justify-content-between">
                <span className="job-label">Internship</span>
                <span className="view-details">
                  <Link style={{ color: "#4996fa" }} to={""}>
                    View details <FaAngleRight />
                  </Link>
                </span>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "350px" }}>
            <Link
              to={""}
              className="card-link d-flex flex-column justify-content-between h-100"
            >
              <div className="card-heading">
                <div className="card-content d-flex flex-column gap-1">
                  <p style={{ margin: "0px" }}>
                    Software development Engineering
                  </p>
                  <span>Internshala</span>
                </div>
              </div>
              <ul className="list-items d-flex flex-column gap-2">
                <li>
                  <IoLocationOutline /> Gurggaon
                </li>
                <li>
                  <FaRegMoneyBillAlt /> ₹ 18,000 /month
                </li>
                <li>
                  <SlCalender /> 6 Months
                </li>
              </ul>
              <div className="footer d-flex justify-content-between">
                <span className="job-label">Internship</span>
                <span className="view-details">
                  <Link style={{ color: "#4996fa" }} to={""}>
                    View details <FaAngleRight />
                  </Link>
                </span>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "350px" }}>
            <Link
              to={""}
              className="card-link d-flex flex-column justify-content-between h-100"
            >
              <div className="card-heading">
                <div className="card-content d-flex flex-column gap-1">
                  <p style={{ margin: "0px" }}>
                    Software development Engineering
                  </p>
                  <span>Internshala</span>
                </div>
              </div>
              <ul className="list-items d-flex flex-column gap-2">
                <li>
                  <IoLocationOutline /> Gurggaon
                </li>
                <li>
                  <FaRegMoneyBillAlt /> ₹ 18,000 /month
                </li>
                <li>
                  <SlCalender /> 6 Months
                </li>
              </ul>
              <div className="footer d-flex justify-content-between">
                <span className="job-label">Internship</span>
                <span className="view-details">
                  <Link style={{ color: "#4996fa" }} to={""}>
                    View details <FaAngleRight />
                  </Link>
                </span>
              </div>
            </Link>
          </div>
          <div className="card" style={{ width: "350px" }}>
            <Link
              to={""}
              className="card-link d-flex flex-column justify-content-between h-100"
            >
              <div className="card-heading">
                <div className="card-content d-flex flex-column gap-1">
                  <p style={{ margin: "0px" }}>
                    Software development Engineering
                  </p>
                  <span>Internshala</span>
                </div>
              </div>
              <ul className="list-items d-flex flex-column gap-2">
                <li>
                  <IoLocationOutline /> Gurggaon
                </li>
                <li>
                  <FaRegMoneyBillAlt /> ₹ 18,000 /month
                </li>
                <li>
                  <SlCalender /> 6 Months
                </li>
              </ul>
              <div className="footer d-flex justify-content-between">
                <span className="job-label">Internship</span>
                <span className="view-details">
                  <Link style={{ color: "#4996fa" }} to={""}>
                    View details <FaAngleRight />
                  </Link>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInternships;
