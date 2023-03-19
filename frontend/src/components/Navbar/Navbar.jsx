import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Navbar = ({ isDark }) => {
  var color = isDark ? "#000" : "#fff";
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);

  const listIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill={isDark ? "#000" : "#fff"}
      class="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );

  return (
    <>
      <div className="navbar container">
        <Logo fontSize={30} isDark={isDark} />
        <div style={{ color: color }} className="nav_links">
          <p>Collection</p>
          <p onClick={() => navigate(`/cart/${user.userData._id}`)}>Cart</p>
          <p onClick={() => navigate(`/orders/${user.userData._id}`)}>
            My Orders
          </p>
          <p
            onClick={() => {
              if (localStorage.getItem("userData") !== null) {
                localStorage.clear();
              } else {
                navigate("/login");
              }
            }}
          >
            {user ? "Logout" : "Login/Sign up"}
          </p>
        </div>
        <div onClick={() => setMenu(true)} className="mobile_icon">
          {listIcon}
        </div>
      </div>
      {menu && <MobileMenu menu={menu} setMenu={setMenu} />}
    </>
  );
};

export default Navbar;
