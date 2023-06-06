import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg"
import { ReactComponent as MenuIcon } from "./menu.svg";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="background-main">
    <div className="header">
        <div className="logo-container">
          <h2>ALONG DUSTY ROADS</h2>
        </div>
      <div className="logo-nav">
        
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <button className="nav-btn">HOME</button>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <button className="nav-btn">ABOUT US</button>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <button className="nav-btn">BLOG</button>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <button className="nav-btn">TRAVEL RESOURCES</button>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
    </div>
  );
};

export default Header;
