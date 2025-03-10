"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Sample data for slider
const slides = [
  {
    imageUrl: '/assets/img/slider/slider-v1-img1.jpg',
    title: 'experienced \n& trusted \nlegal solutions',
    subtitle: 'since - 1990',
    buttonText: 'free evaluation',
    buttonLink: '#',
  },
  {
    imageUrl: '/assets/img/slider/slider-v1-img1.jpg',
    title: 'experienced \n& trusted \nlegal solutions',
    subtitle: 'since - 1990',
    buttonText: 'free evaluation',
    buttonLink: '#',
  },
];

export default function Banner() {
  return (
    <section className="main-slider main-slider-one" id="home">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        pagination={{
          el: '#main-slider-one__pagination',
          type: 'bullets',
          clickable: true,
        }}
        navigation={{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }}
        autoplay={{
          delay: 7000,
        }}
        className="thm-swiper__slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            ></div>
            <div className="banner-two__social-links">
              <ul>
                <li><a href="#"><span className="icon-icon-1"></span></a></li>
                <li><a href="#"><span className="icon-icon-2"></span></a></li>
                <li><a href="#"><span className="icon-icon-3"></span></a></li>
                <li><a href="#"><span className="icon-icon-4"></span></a></li>
              </ul>
              <div className="title-box">
                <p>follow us ----</p>
              </div>
            </div>
            <div className="container">
              <div className="main-slider-one__single">
                <div className="main-slider-one__content text-center">
                  <h3>{slide.subtitle}</h3>
                  <h2>{slide.title.split('\n').map((text, i) => (
                    <React.Fragment key={i}>
                      {text}
                      <br />
                    </React.Fragment>
                  ))}</h2>
                  <div className="btn-box">
                    <a className="thm-btn" href={slide.buttonLink}>
                      {slide.buttonText}
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
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
