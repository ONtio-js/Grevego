"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
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
      <section className="mt-20 pt-10 md:px-10 md:pt-10 lg:-mt-5 lg:px-0">
        <div className="relative mx-auto flex w-[90%] md:h-[500px] h-[350px] flex-col items-center gap-6 rounded-3xl bg-[url('https://res.cloudinary.com/dm2pa4nll/grevego/service/service-hero-4.png')] bg-cover bg-center pb-20 md:mt-10">
          <div className="absolute left-0 top-0 h-full w-full rounded-3xl bg-black/70 flex flex-col items-center justify-center gap-10 p-5 md:p-0">
            <h2 className="md:px-10 text-center text-2xl font-semibold text-white sm:px-20 md:text-5xl md:leading-[3rem] lg:max-w-[800px]">
              <span className="text-[#ffb84d]">Innovative solutions</span> for a
              Greener Future
            </h2>
            <p className="max-w-[800px] md:max-w-[500px]  text-center text-white md:px-0">
              At Grevego, we blend cutting-edge technology with sustainability
              to create a future where healthy living is effortless and
              eco-conscious choices are second nature.
            </p>
          </div>
        </div>
       
      </section>
      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div>
          <h2 className="text-center text-3xl font-bold capitalize text-gray-700">
            our services
          </h2>
          <p className="pt-5 text-center text-gray-700">
            Empowering a healthier world through innovation & eco-friendly
            solutions
          </p>
        </div>
        <div className="mt-20 flex flex-col items-center justify-between gap-10 rounded-3xl bg-primaryColor/10 p-5 py-10 md:flex-row lg:gap-40 lg:p-10">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl font-bold md:text-3xl">
              Cold Last-Mile Delivery
            </h3>
            <h6 className="text-lg font-medium">
              Freshness Delivered, Sustainably
            </h6>
            <p className="">
              Our solar-powered cold storage and eco-friendly logistics ensure
              that fresh produce reaches you in peak condition, reducing food
              waste and carbon emissions.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/service/service-1.png"
              }
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
        <div className="my-24 flex flex-col items-center gap-5 gap-y-10 rounded-3xl bg-primaryColor/10 px-5 py-10 transition-all delay-0 ease-linear hover:-translate-x-1 md:flex-row-reverse lg:gap-40 lg:p-10">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl font-bold md:text-3xl">
              Ai-Powered Personalized Nutrition
            </h3>
            <h6 className="text-lg font-medium">
              Smart Nutrition, Just for You
            </h6>
            <p>
              Our AI-driven nutrition planner tailors meal recommendations based
              on your health goals, ensuring that every bite supports your
              well-being.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/service/service-2.png"
              }
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center gap-y-10 rounded-3xl bg-primaryColor/10 px-5 py-10 transition-all delay-0 ease-linear hover:translate-x-1 md:flex-row lg:gap-40 lg:p-10">
          <div className="flex max-w-[550px] flex-col gap-3 text-gray-700">
            <h3 className="text-xl font-bold md:text-3xl">
              Organic Recycling & Waste Management
            </h3>
            <h6 className="text-lg font-medium">Turning Waste into Value</h6>
            <p>
              We transform organic waste into biofuel and compost, closing the
              loop on sustainability and minimizing environmental impact.
            </p>
          </div>
          <motion.div initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>

            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/service/service-3.png"
              }
              alt="delivery"
              width={700}
              height={100}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
        <div className="mt-32 flex flex-col items-center gap-7 text-gray-700">
          <h2 className="text-center text-3xl font-semibold md:max-w-[400px] lg:w-full">
            Guiding Principles That Define Grevego
          </h2>
          <p className="max-w-[950px] text-center">
            At Grevego, our values drive every decision we make. From
            eco-friendly solutions to cutting-edge technology, we are committed
            to creating a healthier, more sustainable future. We believe in
            transparency, collaboration, and real impact, ensuring that every
            product, partnership, and innovation contributes to a better world
          </p>
        </div>
        <div className="grid gap-4 pt-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
      </section>
    </>
  );
};

export default page;
