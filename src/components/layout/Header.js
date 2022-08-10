import React from "react";
import { GiOpenBook } from "react-icons/gi";

export default function Header() {
  return (
    <header>
      <div className="header-container mw">
        {/* mobile */}
        <div className="nav-mobile">
          <p className="logo">
            Legendary<span style={{ fontWeight: 400 }}>Hunter</span>
          </p>
          <GiOpenBook className="menu-icon" />
        </div>
        {/* desktop */}
        <div className="nav-desk">
          <p className="logo">
            Legendary<span style={{ fontWeight: 400 }}>Hunter</span>
          </p>
          <nav>
            <ul className="header-nav">
              <li>Coalescence</li>
              <li>Materials</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
