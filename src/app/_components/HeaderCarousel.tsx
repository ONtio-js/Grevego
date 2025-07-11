"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HeaderCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      // When we reach the end of original slides, jump to the duplicate set
      if (next >= slides.length) {
        return 0; // Reset to beginning seamlessly
      }
      return next;
    });
  }, [slides.length]);

  // Auto-play functionality with slower speed
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Create a seamless loop by repeating slides multiple times
  const infiniteSlides = [...slides, ...slides, ...slides];

  return (
    <div
      className="relative min-w-[1400px] overflow-hidden sm:hidden lg:h-[650px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container with infinite loop */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${infiniteSlides.length * 100}%`,
        }}
      >
        {/* Multiple sets of slides for truly seamless loop */}
        {infiniteSlides.map((slide, index) => (
          <div
            key={index}
            className="flex h-full w-full flex-shrink-0 items-center justify-center"
            style={{ width: `${100 / infiniteSlides.length}%` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={600}
              height={200}
              className="w-[300px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;
