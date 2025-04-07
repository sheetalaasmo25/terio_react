import Link from "next/link";
import { useState } from "react";

const MobileHeader = ({ toggle, close }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) => (value === activeMenu ? "active" : "");

  return (
    <div className={`mobile-nav ${toggle ? "open" : "hmburger-menu"}`} style={{ display: toggle ? "block" : "none" }}>
      <div className="res-log">
        <Link href="/">
          <img src="assets/img/logo.png" alt="Responsive Logo" />
        </Link>
      </div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Services</Link>
        </li>
        <li>
          <Link href="/portfolio-grid">About</Link>
        </li>
        <li>
          <Link href="/task">Tasks</Link>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
      </ul>

      {/* ✅ Buttons Section (Apply Now & Login) */}
      <div className="mobile-buttons" style={{color:"white"}}>
        <Link href="/contacts" className="themebtu1">
          Apply Now
        </Link><br></br>
        <Link href="/login" className="themebtu1">
          Login / Signup
        </Link>
      </div>

      <button id="res-cross" onClick={close}>
        ✖
      </button>
    </div>
  );
};

export default MobileHeader;
