import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle }) {
  return (
    <section className="page-header">
      {/* Background Image */}
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(/assets/img/background/page-header-bg.jpg)",
        }}
      ></div>

      {/* Shapes */}
      <div className="shape1 float-bob-y">
        <img src="/assets/img/shape/page-header-shape1.png" alt="Shape 1" />
      </div>
      <div className="shape2 float-bob-y">
        <img src="/assets/img/shape/page-header-shape2.png" alt="Shape 2" />
      </div>

      {/* Social Links */}
      <div className="banner-two__social-links">
        <ul>
          <li>
            <a href="#">
              <span className="icon-icon-1"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-icon-2"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-icon-3"></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-icon-4"></span>
            </a>
          </li>
        </ul>
        <div className="title-box">
          <p>follow us ----</p>
        </div>
      </div>

      {/* Breadcrumb and Header Title */}
      <div className="container">
        <div className="page-header__inner">
          <div className="thm-breadcrumb__outer">
            <div className="round-box"></div>
            <ul className="thm-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">{breadcrumbTitle}</li>
            </ul>
          </div>
          <h2>{breadcrumbTitle}</h2>
        </div>
      </div>
    </section>
  );
}
