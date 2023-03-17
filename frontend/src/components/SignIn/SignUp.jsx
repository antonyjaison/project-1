import React from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="login_wrapper">
      <div className="login_section">
        <div className="login_heading">
          <h1>User Signup</h1>
          <p>Signup for shopping</p>
        </div>
        <hr className="login_line" />

        <form className="login_form">
          <p>Email</p>
          <input type="text" />

          <p>Password</p>
          <input type="password" />

          <div className="login_terms">
            <p>
              Already have an account? <span onClick={() => navigate('/login')}>Login</span>
            </p>
            <p>
              <span className="terms">Terms of Service</span> &{" "}
              <span className="policy">Privacy Policy</span>
            </p>
          </div>

          <button className="Signin_button">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
