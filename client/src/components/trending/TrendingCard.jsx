import React from "react";
import "./TrendingCard.css";
import cardImage1 from "../../assets/employers_choice_launch_july24-student.png.webp";
import cardImage2 from "../../assets/pgc_homepage_banner_new.png";
import cardImage3 from "../../assets/mahindra_logistics-student.png.webp";

const TrendingCard = () => {
  return (
    <div className="trending-section">
      <div className="trending-container">
        <div className="trending-heading text-center py-3">
          <h3 className="title">Trending on CourseBundler 🔥</h3>
        </div>
        <div className="trending-cards d-flex align-items-center justify-content-between my-3">
          <img src={cardImage1} alt="" />
          <img src={cardImage2} alt="" />
          <img src={cardImage3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
