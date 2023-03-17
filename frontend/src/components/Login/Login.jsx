import React from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
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
          <input type="text" />

          <p>Password</p>
          <input type="password" />

          <div className="login_terms">
            <p>
              Don’t have an account? <span onClick={() => navigate('/sign-in')}>Sign up</span>
            </p>
            <p>
              <span className="terms">Terms of Service</span> &{" "}
              <span className="policy">Privacy Policy</span>
            </p>
          </div>

          <button className="Signin_button">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
