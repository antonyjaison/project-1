import React from "react";
import "./MobileMenu.css";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";
import Logo from "../Logo/Logo";

const MobileMenu = ({ menu, setMenu }) => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  const MenuFade = useSpring({
    from: { opacity: 0, position: "fixed", left: "-100%", top: "0" },
    to: {
      opacity: 1,
      left: "0",
      zIndex: 100,
    },
  });

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="#fff"
      class="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg>
  );

  return (
    <>
      <animated.div style={MenuFade} className="container mobile_menu_section">
        <div onClick={() => setMenu(false)} className="mobile_menu_header">
          <Logo />
          <div  onClick={() => setMenu(!menu)}>{closeIcon}</div>
        </div>

        <div className="mobile_menu_links">
          <p>Collections</p>
          <p onClick={() => navigate(`/cart/${user.userData._id}`)}>Cart</p>
          <p onClick={() => navigate(`/orders/${user.userData._id}`)}>
            My orders
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
      </animated.div>
    </>
  );
};

export default MobileMenu;
