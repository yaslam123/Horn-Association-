"use client"; // Ensures the component runs on the client side

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles

export default function Brand() {
  // State for dynamic data (e.g., dynamic images)
  const [brands, setBrands] = useState([
    {
      img1: "/assets/img/brand/brand-v1-img1.png",
      img2: "/assets/img/brand/brand-v1-img1.png",
    },
    {
      img1: "/assets/img/brand/brand-v1-img3.png",
      img2: "/assets/img/brand/brand-v1-img3.png",
    },
    {
      img1: "/assets/img/brand/brand-v1-img5.png",
      img2: "/assets/img/brand/brand-v1-img5.png",
    },
    {
      img1: "/assets/img/brand/brand-v1-img2.png",
      img2: "/assets/img/brand/brand-v1-img2.png",
    },

    {
      img1: "/assets/img/brand/brand-v1-img4.png",
      img2: "/assets/img/brand/brand-v1-img4.png",
    },

    {
      img1: "/assets/img/brand/brand-v1-img6.png",
      img2: "/assets/img/brand/brand-v1-img6.png",
    },
  ]);

  return (
    <>
      {/* Start Brand One */}
      <div className="brand-one">
        <div className="container">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              0: { spaceBetween: 30, slidesPerView: 1 },
              375: { spaceBetween: 30, slidesPerView: 1 },
              575: { spaceBetween: 30, slidesPerView: 2 },
              768: { spaceBetween: 30, slidesPerView: 3 },
              992: { spaceBetween: 30, slidesPerView: 4 },
              1200: { spaceBetween: 30, slidesPerView: 5 },
            }}
          >
            {brands.map((brand, index) => (
              <SwiperSlide key={index}>
                <div className="img-box">
                  <img src={brand.img1} alt={`Brand ${index + 1} Image 1`} />
                </div>
                <div className="img-box2">
                  <img src={brand.img2} alt={`Brand ${index + 1} Image 2`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* End Brand One */}
    </>
  );
}
