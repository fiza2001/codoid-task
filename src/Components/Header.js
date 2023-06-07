import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "./x.svg"
import { ReactComponent as MenuIcon } from "./menu.svg";
import { Link } from "react-router-dom"
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="background-main">
    <div className="header">
        <div className="logo-container">
          <Link to="/"><h2>ALONG DUSTY ROADS</h2></Link>
          
        </div>
      <div className="logo-nav">
        
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/"><button className="nav-btn">HOME</button></Link>
            
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="About"> <button className="nav-btn">ABOUT US</button></Link>
           
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="Blog"><button className="nav-btn">BLOG</button></Link>
            
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="Travel"><button className="nav-btn">TRAVEL RESOURCES</button></Link>
            
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
