import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, setUser } from "../../features/userSlice";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = ({ isDark }) => {
  var color = isDark ? "#000" : "#fff";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  const User = useSelector((state) => state.user.user);
  const [menu, setMenu] = useState(false);

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill={isDark ? "000" : "#fff"}
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );

  return (
    <div className="navbar container">
      <Logo fontSize={30} isDark={isDark} />
      <div style={{ color: color }} className="nav_links">
        {User && User.userData.userType === "ADMIN" && (
          <Link to="/admin">Admin</Link>
        )}
        <Link to="/">Collection</Link>
        {User && <Link to={`/cart/${User.userData._id}`}>Cart</Link>}
        {User && <Link to={`/orders/${User.userData._id}`}>My Orders</Link>}
        <p
          onClick={() => {
            if (User) {
              localStorage.clear();
              dispatch(setUser(null));
            }
            navigate("/login");
          }}
        >
          {user ? "Logout" : "Login/Sign up"}
        </p>
      </div>
      <div className="mobile_icon">
        {menu ? (
          <MobileMenu menu={menu} setMenu={() => setMenu(false)} />
        ) : (
          <button onClick={() => setMenu(true)}>{icon}</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
