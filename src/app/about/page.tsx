"use client";
import React from "react";
import Image from "next/image";
import Carousel from "../_components/Carousel";

import { motion } from "framer-motion";


const AboutPage = () => {
  const ourDefinition = [
    {
      id: 1,
      title: "Sustainability",
      description: "We champion green practices to protect our planet.",
    },
    {
      id: 2,
      title: "Innovation",
      description: "AI and IoT power our smart, future-forward solutions.",
    },
    {
      id: 3,
      title: "Integrity",
      description: "We build trust through honesty and responsible business.",
    },
    {
      id: 4,
      title: "Collaboration",
      description:
        "Working with vendors, farmers, and communities to grow together.",
    },
  ];

  return (
    <>
      <section className="mt-28 px-8 md:pt-10 lg:-mt-10">
        <div className="relative mx-auto mt-16 flex md:h-[500px] h-[320px] md:w-[90%] w-full items-center justify-center rounded-3xl bg-[url('https://res.cloudinary.com/dm2pa4nll/grevego/about/about-hero.png')] bg-cover bg-center">
          <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black/70 flex flex-col items-center justify-center gap-10 p-5 md:p-0">
            <h1 className="mx-auto mt-10 pb-5 text-center text-xl font-semibold leading-snug text-white md:px-28 md:text-5xl lg:max-w-[750px] lg:px-0">
              Sustainable Living, one Fresh Product at a Time
            </h1>
            <p className="mx-auto text-sm md:text-base text-center text-white md:px-28 lg:max-w-[700px] lg:px-0 ">
              At Grevego, we are building a future where sustainability meets
              convenience. Our mission is to empower communities with
              eco-friendly shopping, smarter nutrition, and green technology.
            </p>
            {/* <ButtonComponent /> */}
          </div>
        </div>
      </section>
      <section className="mt-20 bg-primaryColor py-20">
        <div className="flex flex-col items-center gap-7 px-10 text-white">
          <h2 className="text-center text-2xl font-semibold md:max-w-[400px] md:text-3xl lg:w-full">
            The Grevego Journey: From Vision to Impact
          </h2>
          <p className="max-w-[620px] text-center lg:max-w-[950px]">
            Grevego was founded with a simple yet powerful idea—bridging the gap
            between healthy food, sustainability, and technology. Our goal is to
            create a smarter, greener way to access fresh produce while
            minimizing waste and empowering vendors
          </p>
          <div className="mx-auto mt-16 flex md:w-[75%] w-full flex-col gap-16 md:flex-row">
            <div className="flex md:w-1/2 w-full flex-col gap-5">
              <h2 className="text-2xl font-semibold text-white text-center md:text-left">
                The Grevego Story
              </h2>
              <p className="text-white text-center md:text-left">
                It all started with a simple truth, everyone deserves access to
                fresh, healthy food, and no good produce should go to waste.
              </p>
              <p className="max-w-[1200px] text-white text-center md:text-left">
                At Grevego, we saw two problems: while many people struggle to
                eat well, tons of fresh fruits and vegetables go unsold and
                uneaten every day. Farmers and local vendors lose income, while
                communities lose access to nutrition. On top of that, food waste
                harms the planet.
              </p>
            </div>
            <div className="flex md:w-1/2 w-full flex-col gap-5">
              <h2 className="text-xl font-semibold text-white text-center md:text-left">
                So we asked: What if we could fix both?
              </h2>
              <p className="text-white text-center md:text-left">
                That’s why we connect health-conscious customers to local
                vendors of fresh, organic and healthy meal options, freshly and
                efficiently delivered. We make healthy eating easier with
                nutrition support and close the circular economy loop with
                collecting and repurposing organic waste.
              </p>
              <p className="max-w-[1200px] text-white">
                Grevego isn’t just a marketplace—it’s a movement for better
                nutrition and a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-32">
          <Carousel />
        </div>
        
      </section>
      <section className="px-5 py-20 pt-10 md:pt-20 md:px-10 mt-20">
      
        <div className="flex flex-col items-center py-10 text-gray-700">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Our Mission & Vision</h2>
          <div className="grid max-w-[1000px] gap-10 pt-6 md:grid-cols-2">
            <motion.div className="group rounded-3xl bg-gray-100/70 p-10 py-14 transition-all duration-300 ease-in-out hover:bg-primaryColor h-[300px] flex flex-col items-center justify-center" initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}>
              <h3 className="py-2 text-center text-lg font-semibold group-hover:text-white">
                Mission Statement
              </h3>
              <p className="text-center text-gray-600 group-hover:text-white">
                To reduce malnutrition and food waste by connecting consumers to
                fresh hygienic products while improving market access linkage.
              </p>
            </motion.div>
            <motion.div className="group rounded-3xl bg-gray-100/70 p-10 py-14 transition-all duration-300 ease-in-out hover:bg-primaryColor h-[300px] flex flex-col items-center justify-center" initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}>
              <h3 className="py-2 text-center text-lg font-semibold group-hover:text-white">
                Vision Statement
              </h3>
              <p className="text-center text-gray-600 group-hover:text-white">
                To create a healthier, greener world by empowering communities
                to embrace innovation and a sustainable lifestyle.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center gap-7 text-gray-700">
          <h2 className="text-center text-2xl font-semibold md:text-3xl max-w-[400px]">
            Guiding Principles That Define Grevego
          </h2>
          <p className="max-w-[1300px] text-center">
            At Grevego, our values drive every decision we make. From
            eco-friendly solutions to cutting-edge technology, we are committed
            to creating a healthier, more sustainable future. We believe in
            transparency, collaboration, and real impact, ensuring that every
            product, partnership, and innovation contributes to a better world.
          </p>
        </div>
        <div className="grid gap-4 pt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-20">
          {ourDefinition.map(
            (how: { id: number; title: string; description: string }) => (
              <motion.div
                key={how.id}
                className="relative h-56 overflow-hidden rounded-2xl bg-primaryColor p-5 text-white"
                initial={{ opacity: 0, x: (how.id + 1) % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (how.id + 1) % 2 === 0 ? 0.2 : 0.4 }}
              >
                <h3 className="text-2xl font-medium">{how.title}</h3>
                <p className="py-2 text-sm">{how.description}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="80"
                  viewBox="0 0 107 108"
                  fill="none"
                  className="absolute -right-2 bottom-0"
                >
                  <path
                    d="M31.5644 31.9999L129.627 158.957"
                    stroke="#CEDDD0"
                    stroke-width="62.6795"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="80"
                  viewBox="0 0 107 108"
                  fill="none"
                  className="absolute -right-14 top-24"
                >
                  <path
                    d="M31.5644 31.9999L129.627 158.957"
                    stroke="#CEDDD0"
                    stroke-width="62.6795"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="80"
                  viewBox="0 0 107 108"
                  fill="none"
                  className="absolute -bottom-10 right-12"
                >
                  <path
                    d="M31.5644 31.9999L129.627 158.957"
                    stroke="#CEDDD0"
                    stroke-width="62.6795"
                    stroke-linecap="round"
                  />
                </svg>
              </motion.div>
            ),
          )}
        </div>
        <div className="mt-24 flex flex-col items-center gap-7 px-5 text-gray-700">
          <h2 className="text-center text-xl font-semibold md:text-3xl">
            The People behind The Mission
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, we are more than a team—we are a movement dedicated to
            reshaping the future of eco-friendly living. Our diverse group of
            industry leaders, technology pioneers, and sustainability advocates
            brings together expertise from across the globe to drive impactful
            change.
          </p>
          <Image
            src={
              "https://res.cloudinary.com/dm2pa4nll/grevego/about/teamall.png"
            }
            width={1000}
            height={200}
            alt="our team"
            className="mt-10 w-full rounded-3xl"
          />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
