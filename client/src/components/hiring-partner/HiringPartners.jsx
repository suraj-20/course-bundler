import React from "react";
import "./HiringPartners.css";
import Marquee from "react-fast-marquee";
import marqueeImage1 from "../../assets/dell.09332c44.png";
import marqueeImage2 from "../../assets/download (1).png";
import marqueeImage3 from "../../assets/download (2).png";
import marqueeImage4 from "../../assets/download.png";
import marqueeImage5 from "../../assets/ibm.bcec6b9a.png";
import marqueeImage6 from "../../assets/microsoft.4a9a93f0.png";
import marqueeImage7 from "../../assets/nasa.3bf5af29.png";
// import marqueeImage8 from "../../assets/pgc_homepage_banner_new.png";

const HiringPartners = () => {
  return (
    <div className="hiring-section ">
      <div className="latest-intern-container d-flex flex-column gap-4">
        <div className="latest-heading text-center">
          <h3 className="title">Top companies trust us</h3>
        </div>
        <div className="marquee py-3">
          <Marquee>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage1}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage2}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage3}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage4}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage5}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage6}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
            <div className="initial-child-container">
              <div className="child">
                <img
                  src={marqueeImage7}
                  alt=""
                  height={50}
                  style={{ margin: "0px 40px" }}
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="stats-container">
        <div className="stats-grid">
          <div className="stats d-flex flex-column text-center">
            <p className="stat-value">300K+</p>
            <p className="caption">companies hiring</p>
          </div>
          <div className="stats d-flex flex-column text-center">
            <p className="stat-value">10K+</p>
            <p className="caption">new opening everymonths</p>
          </div>
          <div className="stats d-flex flex-column text-center">
            <p className="stat-value">21Mn+</p>
            <p className="caption">active students</p>
          </div>
          <div className="stats d-flex flex-column text-center">
            <p className="stat-value">600K+</p>
            <p className="caption">lerners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringPartners;
