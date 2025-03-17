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
              <img src="/assets/img/logo/BLACK.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              {/* Home Menu */}
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  The Firm
                </Link>
              </li>
              {/* About Menu */}
              <li>
                <Link href="/about" onClick={handleMobileMenu}>
                  Culture
                </Link>
              </li>

              {/* Services Menu */}
              <li
                className={
                  isActive.key === 2
                    ? "menu-item-has-children active"
                    : "menu-item-has-children"
                }
              >
                <Link href="#" onClick={handleMobileMenu}>
                  Practices
                </Link>
                <ul
                  className="sub-menu"
                  style={{ display: isActive.key === 2 ? "block" : "none" }}
                >
                  <li>
                    <Link href="/corporate-legal">
                      Corporate Legal Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/foreign-investment">
                      Foreign Investment Advisory
                    </Link>
                  </li>
                  <li>
                    <Link href="/energy-law">
                      Energy & Natural Resources Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/maritime-law">
                      Maritime Law & Shipping Regulations
                    </Link>
                  </li>
                  <li>
                    <Link href="/mining-law">Mining Law & Mineral Rights</Link>
                  </li>
                  <li>
                    <Link href="/public-sector">Public Sector Advisory</Link>
                  </li>
                  <li>
                    <Link href="/infrastructure-law">
                      Infrastructure & Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/financial-law">
                      Financial & Regulatory Compliance
                    </Link>
                  </li>
                  <li>
                    <Link href="/risk-management">
                      Risk Management & Dispute Resolution
                    </Link>
                  </li>
                </ul>
                <div
                  className={
                    isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(2)}
                >
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Blog Menu */}
              <li>
                <Link href="/blog" onClick={handleMobileMenu}>
                  Insights
                </Link>
              </li>

              {/* Contact Menu */}
              <li>
                <Link href="/contact" onClick={handleMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li> */}
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
