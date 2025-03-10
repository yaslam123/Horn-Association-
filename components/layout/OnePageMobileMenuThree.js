"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/img/resource/logo-3.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
          <ul className="navigation one-page-scroll-menu">
      {/* Home */}
      <li className="scrollToLink">
        <Link href="#home" onClick={handleMobileMenu}>Home</Link>
      </li>
      {/* Services */}
      <li className="scrollToLink">
        <Link href="#service" onClick={handleMobileMenu}>Service</Link>
      </li>
      {/* Team */}
      <li className="scrollToLink">
        <Link href="#team" onClick={handleMobileMenu}>Team</Link>
      </li>
      {/* Blog */}
      <li className="scrollToLink">
        <Link href="#blog" onClick={handleMobileMenu}>Blog</Link>
      </li>
      {/* Contact */}
      <li className="scrollToLink">
          <Link href="#contact" onClick={handleMobileMenu}>Contact</Link>
      </li>

      {/* Pages with sub-menu */}
      <li className={isActive.key === 1 ? "menu-item-has-children active" : "menu-item-has-children"}>
        <Link href="#" onClick={() => handleToggle(1)}>Pages</Link>
        <ul className="sub-menu" style={{ display: isActive.key === 1 ? "block" : "none" }}>
          <li>
            <Link href="/" onClick={handleMobileMenu}>Home One</Link>
          </li>
          <li>
            <Link href="/index-2" onClick={handleMobileMenu}>Home Two</Link>
          </li>
          <li>
            <Link href="/index-3" onClick={handleMobileMenu}>Home Three</Link>
          </li>
        </ul>
          <div className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}>
              <span className="fa fa-angle-right"></span>
            </div>
      </li>
    </ul>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-icon-48"></span>
            </div>
            <p><a href="tel:123456789">(629) 555-0129</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Backdrop */}
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    </>
  );
};

export default MobileMenu;
