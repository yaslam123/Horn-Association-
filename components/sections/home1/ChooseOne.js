"use client"; // Ensure the component runs on the client side

import Link from "next/link";
import { useState } from "react";

export default function ChooseOne() {
  // State for dynamic data (e.g., dynamic images, text, links)
  const [chooseContent, setChooseContent] = useState({
    shapeImage: "/assets/img/shape/why-choose-v1-shape1.png",
    chooseImage: "/assets/img/resource/why-choose-v1-img1.jpg",
    sectionTitleIcon: "/assets/img/icon/sec-title-img1.png",
    sectionTitleText: "why choose us",
    sectionMainTitle: "best lawyer make better justice",
    chooseText:
      "At Horn Associates, we go beyond legal representation—we are your strategic partners in navigating complex legal landscapes. Our expertise, commitment, and client-focused approach set us apart.",
    features: ["Elite Legal Team", "Client-Centered Advocacy"],
    buttonText: "let’s work",
    buttonLink: "/contact",
  });

  return (
    <>
      {/* Start Why Choose One */}
      <section className="why-choose-one">
        <div className="container">
          <div className="why-choose-one__inner">
            <div className="shape1">
              <img src={chooseContent.shapeImage} alt="Shape" />
            </div>
            <div className="row">
              {/* Start Why Choose One Img */}
              <div
                className="col-xl-6 wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="why-choose-one__img">
                  <div className="inner">
                    <img src={chooseContent.chooseImage} alt="Choose Image" />
                  </div>
                </div>
              </div>
              {/* End Why Choose One Img */}

              {/* Start Why Choose One Content */}
              <div
                className="col-xl-6 wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="why-choose-one__content">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img
                          src={chooseContent.sectionTitleIcon}
                          alt="Section Icon"
                        />
                      </div>
                      <div className="text">
                        <p>{chooseContent.sectionTitleText}</p>
                      </div>
                    </div>
                    <h2>{chooseContent.sectionMainTitle}</h2>
                  </div>
                  <div className="why-choose-one__content-text">
                    <p>{chooseContent.chooseText}</p>
                  </div>
                  <div className="why-choose-one__content-bottom">
                    <ul>
                      {chooseContent.features.map((feature, index) => (
                        <li key={index}>
                          <p>
                            <span className="icon-icon-16"></span> {feature}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="btn-box">
                      <Link className="thm-btn" href={chooseContent.buttonLink}>
                        {chooseContent.buttonText}
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
              {/* End Why Choose One Content */}
            </div>
          </div>
        </div>
      </section>
      {/* End Why Choose One */}
    </>
  );
}
