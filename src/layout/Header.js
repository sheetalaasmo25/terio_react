import Link from "next/link";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Login from "@/pages/login";
const Header = ({ headerExtraClass, noHeaderBg, blackLogo }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={headerExtraClass ? headerExtraClass : ""}
      style={
        !noHeaderBg
          ? { backgroundImage: `url(assets/img/header.jpg)` }
          : { background: "transparent" }
      }
    >
      <div className="container">
        <div className="nav">
          <div className="d-flex align-items-center">
            <div className="logo">
              <Link legacyBehavior href="/">
                <a>
                  {blackLogo ? (
                    <img alt="logo" src="assets/img/logo-black.png" width="100px" height="100px" />
                    // <h2 style={{color:"white"}}>NIT</h2>
                  ) : (
                    // <h4>NIT</h4>
                    <img alt="logo" src="assets/img/logo.png"  width="43px" height="43px"  />
                  )}
                </a>
              </Link>
            </div>
            <ul className="menu">
              <li>
                <Link legacyBehavior href="/">
                  Home
                </Link>
              
              </li>
              <li>
                <Link legacyBehavior href="about">
                  Services
                </Link>
             
              </li>
              <li>
                <Link legacyBehavior href="portfolio-grid">
                  About
                </Link>
              
              </li>
             
              <li>
                <Link legacyBehavior href="task">
                Tasks
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="testimonials">
                Testimonials 
                </Link>
              </li>
            </ul>
          </div>
          <div>
          
            <Link legacyBehavior href="/contacts">
              <a className="themebtu">Apply Now</a>
            </Link>
            &nbsp;
            &nbsp;
            <Link legacyBehavior href="/login" >
              <a className="themebtu">Login / Singup</a>
              
            </Link>
          </div>
          <div className="bar-menu" onClick={() => setToggle(true)}>
            <i className="fa-solid fa-bars" />
          </div>
        </div>
      </div>
      <MobileHeader toggle={toggle} close={() => setToggle(false)} />
    </header>
  );
};
export default Header;
