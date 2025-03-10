"use client";

import React from 'react';
import Link from 'next/link';

// Pass dynamic data as props
export default function ServicesTwo({ services, dynamicClassName }) {
    return (
        <section className={dynamicClassName}>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title center">
                        <div className="icon">
                            <img src="/assets/img/icon/sec-title-img1.png" alt="Subtitle Icon" />
                        </div>
                        <div className="text">
                            <p>Popular services</p>
                        </div>
                    </div>
                    <h2>our practices area</h2>
                </div>
                <div className="row">
                    {services.map(service => (
                        <div key={service.id} className="col-xl-4 col-lg-4 col-md-6">
                            <div className="services-two__single">
                                <div className="services-two__single-img">
                                    <div className="inner">
                                        <img src={service.imgSrc} alt={service.title} />
                                        <div className="overlay-icon">
                                            <span className={service.icon}></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="services-two__single-content">
                                    <div className="services-two__single-content-top">
                                        <div className="count-box">{service.id.toString().padStart(2, '0')}</div>
                                        <div className="btn-box">
                                            <Link href={service.link}>
                                                <span className="icon-icon-8"></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="services-two__single-content-bottom">
                                        <h2>
                                            <Link href={service.link}>
                                                {service.title}
                                            </Link>
                                        </h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
