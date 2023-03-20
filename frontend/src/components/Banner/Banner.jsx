import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Banner.css";

const Banner = ({ bannerImg, heading }) => {
  return (
    <>
      <div className="banner_wrapper">
        <Navbar />
        <div className="container banner_heading">
          <h1>{heading}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
