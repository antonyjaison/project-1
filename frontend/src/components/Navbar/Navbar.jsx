import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser, setUser } from "../../features/userSlice";

const Navbar = ({ isDark }) => {
    var color = isDark ? "#000" : "#fff";
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userData = localStorage.getItem("userData");
    const user = JSON.parse(userData);
    const User = useSelector((state) => state.user.user);

    return (
        <div className="navbar container">
            <Logo fontSize={30} isDark={isDark} />
            <div style={{ color: color }} className="nav_links">
                {User && User.userData.userType === "ADMIN" && (
                    <Link to="/admin">Admin</Link>
                )}
                <Link>Collection</Link>
                {User && <Link to={`/cart/${user.userData._id}`}>Cart</Link>}
                <Link>My Orders</Link>
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
        </div>
    );
};

export default Navbar;
