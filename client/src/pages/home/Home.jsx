import React from "react";
import "./Home.css";
import HomeNavbar from "../../components/header/HomeNavbar";
import TrendingCard from "../../components/trending/TrendingCard";
import LatestInternships from "../../components/latest-internships/LatestInternships";
import LatestJobs from "../../components/latest-jobs/LatestJobs";
import CertificationCourses from "../../components/certification-courses/CertificationCourses";
import HiringPartners from "../../components/hiring-partner/HiringPartners";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <HomeNavbar />
      <div className="home-heading text-center">
        <h2>Make your dream career a reality</h2>
        <span className="underline"></span>
      </div>
      <TrendingCard />
      <LatestInternships />
      <LatestJobs />
      <CertificationCourses />
      <HiringPartners />
      <Footer />
    </div>
  );
};

export default Home;
