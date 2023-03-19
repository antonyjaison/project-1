import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = ({ isDark }) => {
  var color = isDark ? "#000" : "#fff";
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  // console.log(user)
  
  return (
    <div className="navbar container">
      <Logo fontSize={30} isDark={isDark} />
      <div style={{ color: color }} className="nav_links">
        <p>Collection</p>
        <p onClick={() => navigate(`/cart/${user.userData._id}`)}>Cart</p>
        <p>My Orders</p>
        <p onClick={() => {
          if (localStorage.getItem('userData') !== null) {
            localStorage.clear()
          }else{
            navigate('/login')
          }
        }}>
          {user ? "Logout" : "Login/Sign up"}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
