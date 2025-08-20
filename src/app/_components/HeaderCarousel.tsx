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
    <div
      className="relative min-w-[1400px] overflow-hidden sm:hidden "
 
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image src={slide.src} alt={slide.alt} width={300} height={200} className="w-[38%] h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;
