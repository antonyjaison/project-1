import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        dispatch(setUser(json));
        navigate("/");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="login_section">
        <div className="login_heading">
          <h1>User Login</h1>
          <p>Login to continue shopping</p>
        </div>
        <hr className="login_line" />

        <form className="login_form">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          />

          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />

          <div className="login_terms">
            <p>
              Don’t have an account?{" "}
              <span onClick={() => navigate("/sign-in")}>Sign up</span>
            </p>
            <p>
              <span className="terms">Terms of Service</span> &
              <span className="policy">Privacy Policy</span>
            </p>
          </div>

          <button onClick={(e) => login(e)} className="Signin_button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
