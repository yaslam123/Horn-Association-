"use client";

import Link from 'next/link';

// Dynamic data for CTA section
const ctaData = {
  backgroundImage: "/assets/img/background/cta-v1-bg.jpg",
  iconSrc: "/assets/img/icon/cta-icon.png",
  buttonText: "contact with us",
  buttonLink: "/contact", // Use Next.js Link for internal routing
};

export default function Cta() {
  return (
    <>
      {/* Start Cta One */}
      <section className="cta-one">
        <div
          className="cta-one__bg"
          style={{ backgroundImage: `url(${ctaData.backgroundImage})` }}
        ></div>
        <div className="container">
          <div className="cta-one__inner text-center">
            <div className="cta-one__icon">
              <img
                src={ctaData.iconSrc}
                alt="CTA Icon"
              />
            </div>
            <h2>
              have any query <br />
              contact us
            </h2>
            <div className="btn-box">
              <Link href={ctaData.buttonLink} className="thm-btn">
                {ctaData.buttonText}
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
      </section>
      {/* End Cta One */}
    </>
  );
}
