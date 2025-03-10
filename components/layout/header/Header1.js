import Link from "next/link";
import Menu from "../Menu"; // Assuming you have a separate Menu component for the navigation
import MobileMenu from "../MobileMenu"; // Assuming you have a MobileMenu component

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <header
      className={`main-header main-header-one ${scroll ? "fixed-header" : ""}`}
    >
      <div className={`sticky-header menu-area ${scroll ? "sticky-menu" : ""}`}>
        <div className="auto-container">
          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
              <i className="fas fa-bars" />
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-one__inner">
                  <div className="main-header-one__left">
                    <div className="logo-box-one">
                      <Link href="/">
                        <img src="assets/img/logo/WHITE.png" alt="Logo" />
                      </Link>
                    </div>

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
                    <div className="header-btn-box-style1">
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
                    <div className="btn-box">
                      <Link href="/contact" className="thm-btn">
                        Learn More
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
              </nav>
            </div>
          </div>

          <MobileMenu
            handleMobileMenu={handleMobileMenu}
            handleSidebar={handleSidebar}
            isSidebar={isSidebar}
          />
        </div>
      </div>
    </header>
  );
}
