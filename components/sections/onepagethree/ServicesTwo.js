'use client';

import React from 'react';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

// Default data for the component
const servicesData = [
    {
        image: '/assets/img/service/services-v2-img1.jpg',
        icon: 'icon-icon-30',
        link: '/criminal-case',
        title: 'Family Violence',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
    },
    {
        image: '/assets/img/service/services-v2-img2.jpg',
        icon: 'icon-icon-31',
        link: '/criminal-case',
        title: 'Criminal Case',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
    },
    {
        image: '/assets/img/service/services-v2-img3.jpg',
        icon: 'icon-icon-32',
        link: '/criminal-case',
        title: 'Business Law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
    },
    {
        image: '/assets/img/service/services-v2-img4.jpg',
        icon: 'icon-icon-33',
        link: '/criminal-case',
        title: 'Insurance Law',
        description: 'Likeness had fruit moved herb earth sea drying creature own',
    },
    // Add more service objects as needed
];

const defaultTitle = 'Personal service from expert attorneys';
const defaultSubTitle = 'success numbers';
const defaultPatternImage = '/assets/img/pattern/services-v2-pattern.png';

export default function ServicesTwo({ services = servicesData, title = defaultTitle, subTitle = defaultSubTitle, patternImage = defaultPatternImage }) {
    return (
        <>
            {/* Start Services Two */}
            <section className="services-two style3" id="service">
                <div
                    className="services-two__pattern"
                    style={{ backgroundImage: `url(${patternImage})` }}
                ></div>
                <div className="container">
                    <div className="services-two__top">
                        <div className="sec-title">
                            <div className="sub-title">
                                <div className="icon">
                                    <img src="/assets/img/icon/sec-title-img1.png" alt="" />
                                </div>
                                <div className="text">
                                    <p>{subTitle}</p>
                                </div>
                            </div>
                            <h2 className="">{title}</h2>
                        </div>

                        <div className="services-two__nav">
                            <div className="swiper-button-prev" id="services-two__swiper-button-prev">
                                <i className="icon-icon-52 right"></i>
                            </div>
                            <div className="swiper-button-next" id="services-two__swiper-button-next">
                                <i className="icon-icon-8 left"></i>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        navigation={{
                            nextEl: '#services-two__swiper-button-next',
                            prevEl: '#services-two__swiper-button-prev',
                        }}
                        autoplay={{ delay: 5000 }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 0 },
                            375: { slidesPerView: 1, spaceBetween: 30 },
                            575: { slidesPerView: 1, spaceBetween: 30 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            992: { slidesPerView: 3, spaceBetween: 30 },
                            1200: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                {/* Start Services Two Single */}
                                <div className="services-two__single">
                                    <div className="services-two__single-img">
                                        <div className="inner">
                                            <img src={service.image} alt={service.title} />
                                            <div className="overlay-icon">
                                                <span className={service.icon}></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="services-two__single-content">
                                        <div className="services-two__single-content-top">
                                            <div className="count-box">{`0${index + 1}`}</div>
                                            <div className="btn-box">
                                                <Link href={service.link}><span className="icon-icon-8"></span></Link>
                                            </div>
                                        </div>

                                        <div className="services-two__single-content-bottom">
                                            <h2><Link href={service.link}>{service.title}</Link></h2>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Services Two Single */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            {/* End Services Two */}
        </>
    );
}
