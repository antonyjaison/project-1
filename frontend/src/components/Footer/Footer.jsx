import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer_logo">
              <Logo fontSize={44} />
              <p>
                Selling chairs <br /> since 1990
              </p>
            </div>
            <div className="col-lg-9 footer_link_section">
              <div className="footer_link">
                <h2>Social media</h2>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>YouTube</p>
              </div>
              <div className="footer_link">
                <h2>Contact Us</h2>
                <p>Mail us</p>
                <p>Call us</p>
              </div>
            </div>

            <div className="container">
              <hr className="footer_line" />
            </div>
            <div className="footer_bottom_section">
              <p>Privacy policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
