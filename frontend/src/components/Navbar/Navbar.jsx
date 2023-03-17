import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { useNavigate } from 'react-router-dom'

const Navbar = ({ isDark }) => {
  var color = isDark ? "#000" : "#fff";
  const navigate = useNavigate()
  return (
    <div className="navbar container">
      <Logo fontSize={30} isDark={isDark}/>
      <div style={{color:color}} className="nav_links">
        <p>Collection</p>
        <p>Store</p>
        <p>Contact us</p>
        <p onClick={() => navigate('/login')}>Login/Sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
