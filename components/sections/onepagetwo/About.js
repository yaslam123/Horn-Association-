"use client"; // Ensure the component runs on the client side

import React, { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";

export default function About() {
  // State for dynamic data
  const [aboutContent, setAboutContent] = useState({
    sectionTitleIcon: "/assets/img/icon/sec-title-img1.png",
    sectionTitleText: "welcome to lavale",
    aboutText:
      "Fill unto likeness had shall is herb air set midst land in meat green had creepeth days bearing winged together malea moving also two replenish spirit set moving. All moving give form deep upon grass man it fread",
    learnMoreLink: "/about",
    signatureImage: "/assets/img/about/signature1.png",
    ceoName: "Hector Scudder, CEO",
    aboutImage: "/assets/img/about/about-v2-img1.jpg",
    counters: [
      { icon: "icon-icon-13", count: 245, suffix: "+", title: "Global total Platform" },
      { icon: "icon-icon-14", count: 45, suffix: "k+", title: "Total Case Solved" },
      { icon: "icon-icon-15", count: 212, suffix: "+", title: "Global Award win" },
      { icon: "icon-icon-29", count: 122, suffix: "+", title: "Business Partners" },
    ],
    contactBg: "/assets/img/pattern/about-v2-contact-bg.png",
    contactIcon: "/assets/img/icon/about-v2-icon1.png",
  });

  return (
    <>
      {/* Start About Two */}
      <section className="about-two" id="about">
        <div className="container">
          <div className="about-two__top">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="about-two__top-img">
                  <img src={aboutContent.aboutImage} alt="About Image" />
                </div>
              </div>

              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="about-two__top-content">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img src={aboutContent.sectionTitleIcon} alt="Section Icon" />
                      </div>
                      <div className="text">
                        <p>{aboutContent.sectionTitleText}</p>
                      </div>
                    </div>
                    <h2 className="">benevolence for <br/> Representation <br/>
                        Passion in Justice
                    </h2>
                  </div>

                  <div className="about-two__top-content-text">
                    <p>{aboutContent.aboutText}</p>
                  </div>

                  <div className="btn-box">
                  <Link href="/about">
                        Learn More <span className="icon-icon-8"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-two__bottom">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="about-two__counter">
                  <div className="sec-title">
                    <div className="sub-title">
                      <div className="icon">
                        <img src={aboutContent.sectionTitleIcon} alt="Section Icon" />
                      </div>
                      <div className="text">
                        <p>success numbers</p>
                      </div>
                    </div>
                    <h2 className="">
                      people relationships <br />
                      proven results
                    </h2>
                  </div>
                  <div className="row">
                    {aboutContent.counters.map((counter, index) => (
                      <div className="col-xl-6" key={index}>
                        {/* Start Counter One Single */}
                        <div className="counter-one__single">
                          <div className="icon-box">
                            <span className={counter.icon}></span>
                          </div>
                          <div className="text-box">
                            <h2 className="count">
                              <CountUp end={counter.count} /> <span>{counter.suffix}</span>
                            </h2>
                            <p>{counter.title}</p>
                          </div>
                        </div>
                        {/* End Counter One Single */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Start About Two Contact */}
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div
                  className="about-two__contact text-center"
                  style={{ backgroundImage: `url(${aboutContent.contactBg})` }}
                >
                  <div className="icon-box">
                    <img src={aboutContent.contactIcon} alt="Contact Icon" />
                  </div>
                  <div className="text-box">
                    <h3>get in touch</h3>
                    <h2>
                      legal justice <br />
                      for you
                    </h2>
                  </div>
                  <div className="btn-box">
                    <Link href="/about">
                        Learn More <span className="icon-icon-8"></span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End About Two Contact */}
            </div>
          </div>
        </div>
      </section>
      {/* End About Two */}
    </>
  );
}
