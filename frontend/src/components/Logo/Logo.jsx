import React from "react";
import "./Logo.css";
import { useNavigate } from "react-router-dom";

const Logo = ({ fontSize, isDark }) => {
  const navigate = useNavigate();
  const color = isDark ? "#000" : "#fff";
  return (
    <div className="logo">
      <h1 onClick={() => navigate('/')} style={{ fontSize: fontSize, color: color }}>
        Bare<span>Basics</span>
      </h1>
  </div>
  );
};

export default Logo;
