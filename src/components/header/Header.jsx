import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpeended] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div>
          <img
            src={Bars}
            style={{ margin: "0.5rem 0", width: "1.5rem", height: "1.5rem" }}
            onClick={() => setMenuOpeended(true)}
          />
        </div>
      ) : (
        <ul className="h-menu">
          <li onClick={() => setMenuOpeended(false)}>Home</li>
          <li onClick={() => setMenuOpeended(false)}>Programs</li>
          <li onClick={() => setMenuOpeended(false)}>Why us</li>
          <li onClick={() => setMenuOpeended(false)}>Plans</li>
          <li onClick={() => setMenuOpeended(false)}>Testimonials</li>
          {/* <li>
            <Link     
              to="home"
              activeClass="active"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpeended(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpeended(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpeended(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpeended(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testi"
              spy={true}
              smooth={true}
              onClick={() => setMenuOpeended(false)}
            >
              Testimonials
            </Link>
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default Header;
