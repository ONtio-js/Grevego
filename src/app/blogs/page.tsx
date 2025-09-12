"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Search,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const BlogsPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/home/blog.jpg",
      alt: "Grevego Journal",
      title: "How to Make Your Business More Sustainable: 5 Easy Steps",
      subtitle:
        "Sustainable Freshness, delivered with Care at your doorstep via cold last mile delivery network",
      description:
        "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
      date: "July 11, 2025",
    },
    {
      src: "/home/blog.jpg",
      alt: "Grevego Journal",
      title: "Eco-Friendly Solutions for a Sustainable Future",
      subtitle:
        "Sustainable Freshness, delivered with Care at your doorstep via cold last mile delivery network",
      description:
        "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
      date: "July 11, 2025",
    },
    {
      src: "/home/blog.jpg",
      alt: "Grevego Journal",
      title: "How to Make Your Business More Sustainable: 5 Easy Steps",
      subtitle:
        "Sustainable Freshness, delivered with Care at your doorstep via cold last mile delivery network",
      description:
        "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
      date: "July 11, 2025",
    },
    {
      src: "/home/blog.jpg",
      alt: "Grevego Journal",
      title: "How to Make Your Business More Sustainable: 5 Easy Steps",
      subtitle:
        "Sustainable Freshness, delivered with Care at your doorstep via cold last mile delivery network",
      description:
        "Discover practical tips to reduce your environmental impact and enhance your business’s sustainability. With our solar-powered cold storage and sustainable logistics, we guarantee that your fresh produce arrives at its best. This not only minimizes food waste but also cuts down on carbon emissions, making a positive impact on the environment.",
      date: "July 11, 2025",
    },
  ];

  const handleSlide = (direction: "next" | "prev" | number) => {
    if (typeof direction === "number") {
      setCurrentSlide(direction);
    } else if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (direction === "prev") {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="px-5 py-10 md:px-20">
      <div className="relative overflow-hidden rounded-lg bg-primaryColor/20 p-10 py-20">
        <h1 className="text-4xl font-semibold text-gray-700">
          The Grevego <span className="text-amber-500">Journal</span>
        </h1>
        <p className="mt-5 text-gray-700">
          Stay updated with the latest news and insights from the Grevego team.
        </p>
        <Image
          src="/blogbg.png"
          alt="Grevego Journal"
          width={300}
          height={200}
          className="absolute -bottom-2 -right-10 object-cover"
        />
      </div>
      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold capitalize text-gray-700">
            features
          </h3>
          <div className="flex items-center gap-4">
            
            <div className="rounded-full border border-gray-300 px-4 py-2">
              {currentSlide + 1} of {slides.length}
            </div>
          </div>
        </div>
        <div className="justify- no-scrollbar mt-10 flex md:min-w-[1200px] min-w-full gap-6 overflow-x-scroll">
          {slides[currentSlide] && (
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex md:w-[1200px] w-full md:min-w-[1200px] flex-col items-start justify-between md:gap-10 gap-5 rounded-3xl bg-gray-100 p-5 md:p-10 transition-all duration-500 ease-in-out">
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                width={300}
                height={100}
                className="h-[300px] w-full rounded-lg object-cover md:h-[400px]"
              />
              <div className="flex flex-col md:gap-5 gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold capitalize text-gray-700">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-700 text-xs hidden md:block md:text-base">{slides[currentSlide].date}</p>
                </div>

                <p className="text-base md:text-lg text-gray-700">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="hidden md:block text-sm md:text-base text-gray-700">
                  {slides[currentSlide].description}
                </p>

                <Link
                  href={"/blogs/" + slides[currentSlide].title}
                  className="mt-10 flex max-w-[150px] items-center gap-2 rounded-full border border-gray-300 bg-primaryColor px-4 py-3 md:max-w-[150px]"
                >
                  <p className="text-white">Read More</p>
                  <ArrowRightIcon className="w-4 text-white" />
                </Link>
              </div>
              </motion.div>
          )}

          {slides[(currentSlide + 1) % slides.length] && (
            <div
              onClick={() => handleSlide("next")}
              className="hidden md:flex w-[1200px] min-w-[1200px] cursor-pointer flex-col items-start justify-between gap-10 rounded-3xl bg-gray-100 p-10 opacity-70 transition-all duration-500 ease-in-out hover:bg-gray-200 hover:opacity-100"
            >
              {(() => {
                const nextSlide = slides[(currentSlide + 1) % slides.length];
                return nextSlide ? (
                  <>
                    <Image
                      src={nextSlide.src}
                      alt={nextSlide.alt}
                      width={300}
                      height={100}
                      className="h-[300px] w-full rounded-lg object-cover md:h-[400px]"
                    />
                    <div className="flex flex-col gap-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold capitalize text-gray-700">
                          {nextSlide.title}
                        </h3>
                        <p className="text-gray-700">{nextSlide.date}</p>
                      </div>

                      <p className="text-lg text-gray-700">
                        {nextSlide.subtitle}
                      </p>
                      <p className="text-gray-700">{nextSlide.description}</p>

                      <div className="mt-10 flex max-w-[200px] items-center gap-2 rounded-full border border-gray-300 bg-primaryColor px-4 py-3">
                        <p className="text-white">Click to view next</p>
                        <ArrowRightIcon className="w-4 text-white" />
                      </div>
                    </div>
                  </>
                ) : null;
              })()}
            </div>
          )}
        </div>
        <div className="mt-10 max-w-[200px]">
          <div className="h-2.5 w-[200px] rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-primaryColor transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="mt-5 flex w-full items-center justify-between gap-2 pr-10">
            <div
              onClick={() => handleSlide("prev")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primaryColor/10 transition-all duration-300 hover:bg-primaryColor/50"
            >
              <ChevronLeftIcon className="w-6 text-primaryColor" />
            </div>
            <div
              onClick={() => handleSlide("next")}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primaryColor/30 transition-all duration-300 hover:bg-primaryColor/50"
            >
              <ChevronRightIcon className="w-6 text-primaryColor" />
            </div>
          </div>
        
        </div>
      </section>

      <section className="mt-16">
        <div>
          <h4 className="text-2xl font-semibold capitalize text-gray-700">
            Recent Blogs
          </h4>
          <div className="mt-5 flex items-center gap-10">
            <div
              className="flex w-full items-center gap-2 rounded-md border border-gray-300 px-4 py-2"
              style={{ height: "50px" }}
            >
              <Search className="w-5 text-gray-700" />
              <input
                type="text"
                placeholder="Search post"
                className="outline-none"
              />
            </div>
            <Select>
              <SelectTrigger
                className="max-w-[360px]"
                style={{ height: "50px" }}
              >
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="lifestyle">Lifestyle</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:bg-primaryColor/30">
            <Image
              src={"/home/blog.jpg"}
              width={300}
              height={100}
              alt="x"
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">
                How to Make Your Business More Sustainable: 5 Easy Steps
              </h3>
              <p>
                Discover practical tips to reduce your environmental impact and
                enhance your business’s sustainability.
              </p>
              <p className="text-sm text-muted-foreground">July 11, 2025</p>
            </div>
            <Link
              href={"/blog"}
              className="mt-10 flex max-w-[150px] items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2"
            >
              <p className="text-gray-800">Read More</p>
              <ArrowRightIcon className="w-4 text-gray-800" />
            </Link>
          </div>
        </div>
        <div className="my-10 flex items-center justify-center gap-10">
          <div className="hidden w-[130px] cursor-pointer items-center justify-center rounded-full bg-primaryColor/90 px-10 py-3 text-white transition-all duration-300 hover:bg-primaryColor">
            <p>Previous</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-primaryColor text-primaryColor">
              1
            </p>
            <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-primaryColor text-primaryColor">
              2
            </p>
            <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-primaryColor text-primaryColor">
              3
            </p>
            <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-primaryColor text-primaryColor">
              4
            </p>
            <p className="mx-5">of</p>
            <p className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-primaryColor text-primaryColor">
              10
            </p>
          </div>
          <div className="flex w-[130px] cursor-pointer items-center justify-center rounded-full bg-primaryColor/90 px-10 py-3 text-white transition-all duration-300 hover:bg-primaryColor">
            <p>Next</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
