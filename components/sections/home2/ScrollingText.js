// components/ScrollingText.js

"use client"; // Ensures the component runs on the client side

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function ScrollingText() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = [
        { text: "family*" },
        { text: "violence*" },
        { text: "justice*" },
        { text: "business*" },
      ];
      setBrands(data);
    };

    fetchBrands();
  }, []);

  return (
    <div className="scrolling-text-one">
      <div className="container-fluid">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { spaceBetween: 0, slidesPerView: 1 },
            375: { spaceBetween: 0, slidesPerView: 1 },
            575: { spaceBetween: 10, slidesPerView: 2 },
            768: { spaceBetween: 10, slidesPerView: 3 },
            992: { spaceBetween: 10, slidesPerView: 3 },
            1200: { spaceBetween: 10, slidesPerView: 4 },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="scrolling-text-one__title">
                <h2>{brand.text}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
