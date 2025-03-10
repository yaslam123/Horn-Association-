"use client";

import React from 'react';
import CountUp from 'react-countup';

export default function AboutOne({ sectionClassName, content, imageSrc, counterData }) {
    return (
        <section className={sectionClassName}>
            <div className="container">
                <div className="row">
                    {/* Start About One Content */}
                    <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="about-one__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <div className="icon">
                                        <img src="/assets/img/icon/sec-title-img1.png" alt="Subtitle Icon" />
                                    </div>
                                    <div className="text">
                                        <p>{content.subtitle}</p>
                                    </div>
                                </div>
                                <h2>{content.title}</h2>
                            </div>
                            <div className="about-one__content-text">
                                <p>{content.text}</p>
                            </div>
                            <div className="about-one__content-bottom">
                                <div className="btn-box">
                                    <a className="thm-btn" href={content.buttonLink}>
                                        {content.buttonText}
                                        <span className="thm-btn__icon">
                                            <i className="icon-icon-8"></i>
                                        </span>
                                        <span className="thm-btn__hover-group">
                                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                                        </span>
                                    </a>
                                </div>
                                <div className="content-box">
                                    <div className="signature">
                                        <img src="/assets/img/about/signature1.png" alt="Signature" />
                                    </div>
                                    <p>{content.signature}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End About One Content */}

                    {/* Start About One Img */}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <div className="about-one__img">
                            <img src={imageSrc} alt="About" />
                        </div>
                    </div>
                    {/* End About One Img */}

                    {/* Start About One Counter */}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-one__counter">
                            {counterData.map((counter, index) => (
                                <div key={index} className={`counter-one__single ${counter.style || ''}`}>
                                    <div className="icon-box">
                                        <span className={counter.icon}></span>
                                    </div>
                                    <div className="text-box">
                                        <div className="text-box">
                                            <h2 className="count">
                                                <CountUp end={counter.count} /> <span className="suffix">{counter.suffix}</span>
                                            </h2>
                                            <p>{counter.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End About One Counter */}
                </div>
            </div>
        </section>
    );
}
