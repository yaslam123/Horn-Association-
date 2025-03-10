'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Default data for the component
const caseData = [
  {
    image: '/assets/img/project/case-v2-img1.jpg',
    category: 'Corporate / tax',
    title: 'Business consultancy',
    link: '/case-details',
  },
  {
    image: '/assets/img/project/case-v2-img2.jpg',
    category: 'Family / domestic',
    title: 'Family violence case',
    link: '/case-details',
  },
  {
    image: '/assets/img/project/case-v2-img3.jpg',
    category: 'Family / domestic',
    title: 'Marriage Agreement',
    link: '/case-details',
  },
  {
    image: '/assets/img/project/case-v2-img1.jpg',
    category: 'Corporate / tax',
    title: 'Business consultancy',
    link: '/case-details',
  },
  // Add more case objects as needed
];

export default function CaseTwo({ cases = caseData }) {
  return (
    <>
      {/* Start Case Two */}
      <section className="case-two">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: { spaceBetween: 0, slidesPerView: 1 },
              375: { spaceBetween: 30, slidesPerView: 1 },
              575: { spaceBetween: 0, slidesPerView: 1 },
              768: { spaceBetween: 30, slidesPerView: 2 },
              992: { spaceBetween: 30, slidesPerView: 2 },
              1200: { spaceBetween: 40, slidesPerView: 3 },
            }}
          >
            {cases.map((caseItem, index) => (
              <SwiperSlide key={index}>
                {/* Start Case Two Single */}
                <div className="case-two__single">
                  <div className="case-two__single-img">
                    <img src={caseItem.image} alt={caseItem.title} />
                  </div>

                  <div className="case-two__single-content">
                    <div className="content-box">
                      <p>{caseItem.category}</p>
                      <h2>
                        <Link href={caseItem.link}>{caseItem.title}</Link>
                      </h2>
                    </div>

                    <div className="btn-box">
                      <Link href={caseItem.link}>
                        <span className="icon-icon-8"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* End Case Two Single */}
              </SwiperSlide>
            ))}
            {/* Swiper navigation buttons */}
            {/* Swiper pagination */}
          </Swiper>
        </div>
      </section>
      {/* End Case Two */}
    </>
  );
}
