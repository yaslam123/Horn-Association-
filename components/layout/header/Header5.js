import Link from "next/link";
import Menu from "../OnePageMenuTwo"; // Assuming you have a separate Menu component for the navigation
import MobileMenu from "../OnePageMobileMenuTwo"; // Assuming you have a MobileMenu component

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <header className={`main-header main-header-two ${scroll ? "fixed-header" : ""}`}>
      <div className={`sticky-header menu-area ${scroll ? "sticky-menu" : ""}`}>
        {/* Start Main Header Two Top */}
        <div className="main-header-two__top">
          <div className="auto-container">
            <div className="main-header-two__top-inner">
              <div className="logo-box-two">
                <Link href="/">
                  <img src="/assets/img/resource/logo-1.png" alt="Logo" />
                </Link>
              </div>
              <div className="main-header-two__top-left">
                <div className="header-contact-info-style1">
                  <ul>
                    <li>
                      <p>
                        <span className="icon-icon-18"></span>
                        <a href="mailto:example@lavale.com">example@lavale.com</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="icon-icon-24"></span>
                        4206 Rockwell Lane, NC 27820
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="main-header-two__top-right">
                <div className="header-contact-info-style2">
                  <ul>
                    <li>
                      <p>
                        <span className="icon-icon-27"></span>
                        Sunday To Thursday: 9PM - 5PM
                      </p>
                    </li>
                    <li>
                      <div className="language-switcher-style1">
                        <div className="icon">
                          <span className="icon-icon-28"></span>
                        </div>
                        <div className="select-box clearfix">
                          <select className="wide">
                            <option data-display="English">English</option>
                            <option value="1">French</option>
                            <option value="2">German</option>
                            <option value="3">Italian</option>
                          </select>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="header-btn-box-style2">
                <Link href="/contact" className="thm-btn">
                  Contact Us
                  <span className="thm-btn__icon">
                    <i className="icon-icon-8"></i>
                  </span>
                  <span className="thm-btn__hover-group">
                    <span className="thm-btn__hover thm-btn__hover--1"></span>
                    <span className="thm-btn__hover thm-btn__hover--2"></span>
                    <span className="thm-btn__hover thm-btn__hover--3"></span>
                    <span className="thm-btn__hover thm-btn__hover--4"></span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Header Two Top */}

        {/* Start Main Header Two Bottom */}
        <div className="main-header-two__bottom">
          <div className="container">
            <div className="menu-area__inner">
              <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                <i className="fas fa-bars"></i>
              </div>
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="main-header-one__inner">
                    <div className="main-header-one__left">
                      <div className="navbar-wrap main-menu">
                        <Menu />
                      </div>
                    </div>

                    <div className="main-header-one__right">
                      <div className="header-contact-box">
                        <p>
                          <span className="icon-icon-6"></span>
                          <a href="tel:123456789">+2 854 3605 86</a>
                        </p>
                      </div>
                      <div className="header-search-box" onClick={handlePopup}>
                        <div className="main-menu__search search-toggler icon-icon-7"></div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* End Main Header Two Bottom */}

        <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
      </div>
    </header>
  );
}
