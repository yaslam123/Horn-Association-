import Link from "next/link";

export default function Footer2() {
  const socialLinks = [
    { iconClass: "icon-icon-4", href: "#" },
    { iconClass: "icon-icon-3", href: "#" },
    { iconClass: "icon-icon-2", href: "#" },
  ];

  const services = [
    { name: "Corporate Legal", href: "/corporate-legal" },
    { name: "Foreign Investment Advisory", href: "/foreign-investment" },
    { name: "Energy & Natural Resources Law", href: "/energy-law" },
    { name: "Maritime Law & Shipping Regulations", href: "/maritime-law" },
    { name: "Mining Law & Mineral Rights", href: "/mining-lawl" },
    { name: "Public Sector & Government Advisory", href: "/public-sector" },
  ];

  const instagramImages = [
    "assets/img/footer/footer-v2-img1.jpg",
    "assets/img/footer/footer-v2-img2.jpg",
    "assets/img/footer/footer-v2-img3.jpg",
    "assets/img/footer/footer-v2-img4.jpg",
  ];

  const footerLinks = [
    { name: "Career", href: "/contact" },
    { name: "privacy & policy", href: "/contact" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <>
      <footer className="footer-two">
        <div className="shape1 float-bob-x">
          <img src="assets/img/shape/footer-v2-shape1.png" alt="Shape 1" />
        </div>
        <div className="shape2 float-bob-y">
          <img src="assets/img/shape/footer-v2-shape2.png" alt="Shape 2" />
        </div>
        <div className="footer-main">
          <div className="footer-two__top">
            <div className="container">
              <div className="footer-two__top-inner">
                <div className="logo-box">
                  <Link href="/">
                    <img src="assets/img/logo/BLACK.png" alt="Logo" />
                  </Link>
                </div>

                <div className="footer-two__top-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/corporate-legal">Services</Link>
                    </li>

                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="social-link">
                  <ul>
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>
                          <span className={link.iconClass}></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-one__bottom">
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="single-footer-widget footer-widget__contact">
                    <div className="title">
                      <h2>Contact Us</h2>
                    </div>

                    <div className="footer-widget__contact-list">
                      <ul>
                        <li>
                          <p className="text1">
                            <span className="icon-icon-24"></span> Location
                          </p>
                          <p className="text2">
                            Adden Adde <br /> Internatuonal Airport
                          </p>
                        </li>

                        <li>
                          <p className="text1">
                            <span className="icon-icon-25"></span> Email Us
                          </p>
                          <p className="text2">
                            <a href="mailto:lavale@example.com">
                              info@horn.com
                            </a>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="single-footer-widget footer-widget__service">
                    <div className="title">
                      <h2>Service Area</h2>
                    </div>

                    <div className="footer-widget__service-box">
                      <ul>
                        {services.map((service, index) => (
                          <li key={index}>
                            <Link href={service.href}>
                              <span className="icon-icon-501"></span>{" "}
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="single-footer-widget footer-widget__subscribe">
                    <div className="title">
                      <h2>Subscribe</h2>
                    </div>
                    <div className="footer-widget__subscribe-box">
                      <form className="footer-widget__subscribe-form">
                        <div className="input-box">
                          <input
                            type="email"
                            placeholder="YOUR EMAIL*"
                            name="email"
                          />
                          <button
                            type="submit"
                            className="footer-widget__subscribe-form-btn"
                          >
                            <i className="icon-icon-26"></i>
                          </button>
                        </div>
                        <div className="footer-one__checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox1"
                          />
                          <label htmlFor="checkbox1">
                            <span></span>I Agree to terms & Condition
                          </label>
                        </div>
                      </form>

                      <div className="text-box">
                        <h3>Open Hours</h3>
                        <p>Sat To Thursday: 9:30AM - 5:30PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom__inner">
              <div className="footer-bottom__text">
                <p>Copyright © 2024 | All rights reserved by Horn Associates</p>
              </div>

              <div className="footer-bottom__menu">
                <ul>
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
