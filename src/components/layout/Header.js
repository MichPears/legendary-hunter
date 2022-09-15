import React, { useState } from "react";
import { GiOpenBook } from "react-icons/gi";
import { IoHelpOutline } from "react-icons/io5";
import HelpPopup from "./HelpPopup";

export default function Header() {
  const [showHelp, setShowHelp] = useState(false);

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
              {/* <li>Coalescence</li>
              <li>Materials</li> */}
            </ul>
          </nav>
        </div>
      </div>
      <IoHelpOutline className="help-icon" onClick={() => setShowHelp(true)} />
      <HelpPopup setShowHelp={setShowHelp} showHelp={showHelp} />
    </header>
  );
}
