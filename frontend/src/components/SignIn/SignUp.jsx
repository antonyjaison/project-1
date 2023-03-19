import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import "./SignUp.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../features/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  console.log(user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    if (validator.isEmail(email) && password.length > 5 && name.length > 0) {
      const data = {
        name: name,
        email: email,
        password: password,
      };
      const res = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const json = await res.json();
        console.log(json);
        dispatch(setUser(json))
        setEmail("");
        setName("");
        setPassword("");
        navigate("/");
      }
    }
  };
  return (
    <div className="signin_wrapper">
      <div className="signin_section">
        <div className="signin_heading">
          <h1>User Signup</h1>
          <p>Signup for shopping</p>
        </div>
        <hr className="signin_line" />

        <form className="signin_form">
          <p>Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          />

          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />

          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <div className="signin_terms">
            <p>
              Already have an account?
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
            <p>
              <span className="terms">Terms of Service</span> &
              <span className="policy">Privacy Policy</span>
            </p>
          </div>

          <button onClick={(e) => signUp(e)} className="Signin_button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
