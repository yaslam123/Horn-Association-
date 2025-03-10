'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

// Default data for testimonials
const testimonialsData = [
    {
        image: '/assets/img/testimonial/testimonials-v2-img1.jpg',
        feedback: 'Have of third divide or foreign bring give void rise grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.',
        clientName: 'Richard Markram',
        caseType: 'family law case',
        rating: 5,
    },
    {
        image: '/assets/img/testimonial/testimonials-v2-img2.jpg',
        feedback: 'Have of third divide or foreign bring give void rise grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.',
        clientName: 'Richard Markram',
        caseType: 'family law case',
        rating: 5,
    },
    {
        image: '/assets/img/testimonial/testimonials-v2-img3.jpg',
        feedback: 'Have of third divide or foreign bring give void rise grass ton fowl forth morning gathering main also evening were intro the yielding spirit called be form grass face into begger you is.',
        clientName: 'Richard Markram',
        caseType: 'family law case',
        rating: 5,
    },
];

// Default title and pattern image
const defaultTitle = 'happy clients feedback';
const defaultSubTitle = 'our testimonials';
const defaultPatternImage = '/assets/img/pattern/testimonials-v2-pattern.png';

export default function Testimonial({ testimonials = testimonialsData, title = defaultTitle, subTitle = defaultSubTitle, patternImage = defaultPatternImage }) {
    return (
        <>
            {/* Start Testimonials Two */}
            <section className="testimonials-two">
                <div className="shape1"><img src={patternImage} alt="" /></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title center">
                            <div className="icon">
                                <img src="/assets/img/icon/sec-title-img1.png" alt="" />
                            </div>
                            <div className="text">
                                <p>{subTitle}</p>
                            </div>
                        </div>
                        <h2 className="">{title}</h2>
                    </div>

                    <div className="testimonials-two__inner">
                        {/* Start Testimonials Two Thumb */}
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                nextEl: '#testimonials-two__swiper-button-next',
                                prevEl: '#testimonials-two__swiper-button-prev',
                            }}
                            autoplay={{ delay: 5000 }}
                            className="swiper-container"
                            id="testimonials-two__thumb"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonials-two__thumb-single">
                                        <div className="testimonials-two__thumb-img">
                                            <div className="round-box"></div>
                                            <div className="inner">
                                                <img src={testimonial.image} alt={testimonial.clientName} />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        {/* End Testimonials Two Thumb */}

                        {/* Testimonials Content */}
                        <div className="testimonials-two__content text-center">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 5000 }}
                                navigation={{
                                    nextEl: '#testimonials-two__swiper-button-next',
                                    prevEl: '#testimonials-two__swiper-button-prev',
                                }}
                                className="swiper-container"
                                id="testimonials-two__carousel"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        {/* Start Testimonials Two Single */}
                                        <div className="testimonials-two__single">
                                            <div className="text-box">
                                                <h2>{testimonial.feedback}</h2>
                                            </div>
                                            <div className="client-info">
                                                <div className="rating-box">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <i key={i} className="icon-icon-21"></i>
                                                    ))}
                                                </div>
                                                <h3>{testimonial.clientName}</h3>
                                                <p>{testimonial.caseType}</p>
                                            </div>
                                        </div>
                                        {/* End Testimonials Two Single */}
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Navigation for the testimonials */}
                            <div className="testimonials-two__nav">
                                <div className="swiper-button-prev" id="testimonials-two__swiper-button-prev">
                                    <i className="icon-icon-52" aria-hidden="true"></i>
                                </div>
                                <div className="swiper-button-next" id="testimonials-two__swiper-button-next">
                                    <i className="icon-icon-8" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Testimonials Two */}
        </>
    );
}
