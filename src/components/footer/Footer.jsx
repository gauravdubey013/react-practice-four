import React from "react";
import "./Footer.scss";
import Github from "../../assets/github.png";
import Logo from "../../assets/logo.png";
import Insta from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <div className="footer-c">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Insta} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur b-f f-l" />
      <div className="blur b-f f-r" />
    </div>
  );
};

export default Footer;
