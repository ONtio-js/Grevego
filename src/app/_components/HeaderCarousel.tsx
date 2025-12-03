"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const HeaderCarousel = () => {
  const slides = [
    {
      src: "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-1.png",
      alt: "hero-1",
    },
    {
      src: "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-2.png",
      alt: "hero-2",
    },
    {
      src: "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-3.png",
      alt: "hero-3",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1000}
        slidesPerView={1.33}
        spaceBetween={16}
        navigation={false}
        className="mySwiper"
        centeredSlides={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={600}
                className={`h-auto w-full object-contain ${index === 0 ? "translate-x-0" : index === 1 ? "translate-y-[22px]" : "translate-x-0"}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
