"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Truck from "@/components/icons/truck";
import Phone from "@/components/icons/Phone";
import Users from "@/components/icons/Users";
import Cart from "@/components/icons/Cart";
import Recycle from "@/components/icons/Recycle";
import Button from "../_components/Button";
const howItWorks = [
  {
    id: 1,
    title: "Discover & order",
    description: [
      "Start with our simple Whatsapp-based marketplace.",
      "Browse healthy meals, fresh produce and eco-friendly products from trusted vendors.",
      "place your order in just a few taps - no complicated apps required.",
    ],
    imgUrl: "/how-it-works/discover-order.jpg",
    imgAlt: "Discover & order",
    icon: <Phone />,
  },

  {
    id: 2,
    title: "Cold last-mile delivery",
    description: [
      "Your order is assigned to the nearest eco-friendly rider using bicycles or e-bikes.",
      "We use cold storage to keep meals and produce fresh in transit.",
      "This prevents spoilage, reduces food waste, and ensures you get products in peak condition.",
    ],
    imgUrl: "/how-it-works/cold-lastmile.jpg",
    imgAlt: "Cold last-mile delivery",
    icon: <Truck />,
  },

  {
    id: 3,
    title: "Nutrition Support",
    description: [
      "Have specific health goals or dietary needs?",
      "Send us your questions through our platform.",
      "Our Nutrition Associates provide personalized guidance today, while we train our AI Nutrition Assistant to deliver smart, tailored recommendations, just for you.",
    ],
    imgUrl: "/how-it-works/nutrition-support.jpg",
    imgAlt: "Nutrition Support",
    icon: <Users />,
  },
  {
    id: 4,
    title: "Green Marketplace & Lifestyle",
    subTitle: "Beyond food, Grevego connects you with vendors of :",
    description: [
      "🍎 Fresh & Organic Produce",
      "🥗 Healthy Meals & Drinks",
      "🌿 DIY Kits & Green Lifestyle Products",
      "💚 Wellness & Nutrition Services",
      "🌍 Eco-Friendly Products",
    ],
    imgUrl: "/how-it-works/green-marketplace.jpg",
    imgAlt: "Green Marketplace & Lifestyle",
    slogan: "One ecosystem for healthier choices and greener living.",
    icon: <Cart />,
  },
  {
    id: 5,
    title: "Circular Impact",
    description: [
      "Partner vendors get smart waste solutions , turning organic waste into resource materials.",
      "Together, we cut greenhouse gas emissions , reduce costs for vendors, and unlock future opportunities like carbon credits .",
      "Every order you place helps build a healthier community and a more sustainable planet .",
    ],
    imgUrl: "/how-it-works/circular-impact.jpg",
    imgAlt: "Circular Impact",
    icon: <Recycle />,
  },
];
const HowItWorksPage = () => {
  return (
    <div className="space-y-10 px-5 py-10 md:px-20">
      <div className="flex flex-col items-center gap-8 pt-10">
        <div className="flex w-fit items-center gap-2 rounded-lg bg-primaryColor/30 p-4 py-2 text-lg text-gray-600">
          <p>🌱 How Grevego Works</p>
        </div>
        <h3 className="max-w-[760px] text-center text-4xl font-semibold leading-tight text-gray-700">
          Making healthy living effortless, <br /> sustainable and personalized.
        </h3>
        <p className="max-w-[800px] text-center text-gray-600">
          Discover how we're transforming the way Africa eats through innovative
          technology, green logistics and personalized nutrition support.
        </p>
      </div>

      <section className="flex w-full flex-col items-center gap-24 py-20">
        {howItWorks.map((how) => (
          <div
            key={how.id}
            className={`flex w-full items-center gap-x-20 ${how.id % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}`}
          >
            <motion.div initial={{ opacity: 0, x: (how.id + 1) % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (how.id + 1) % 2 === 0 ? 0.2 : 0.4 }} className="w-full md:w-[48%]">
              <Image
                src={how.imgUrl}
                alt={how.imgAlt}
                width={1000}
                height={100}
                className="h-96 w-full rounded-3xl object-cover"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: (how.id + 1) % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (how.id + 1) % 2 === 0 ? 0.2 : 0.4 }} className="w-full md:w-[48%]">
              <div className="mb-4 flex items-center gap-2">
                <div className="rounded-lg bg-primaryColor/30 p-2.5 px-4 text-xl">
                  {how.icon}
                </div>
                <div className="w-fit rounded-full border border-amber-500 px-4 py-1 text-gray-700">
                  Step {how.id}
                </div>
              </div>
              <h3 className="text-3xl font-semibold capitalize">{how.title}</h3>
              <p className="text-gray-700">{how.subTitle}</p>
              <ul className="text-gray-700">
                {how.description.map((item) => (
                  <li
                    key={item}
                    className="list-inside list-[square] marker:text-2xl marker:text-yellow-500"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {how.slogan && (
                <p className="mt-5 w-fit rounded-lg bg-amber-500/20 p-2 pr-10 text-gray-700">
                  {how.slogan}
                </p>
              )}
            </motion.div>
          </div>
        ))}

        <div className="flex flex-col items-center gap-10 bg-primaryColor/30 max-w-[1000px] p-10 rounded-3xl text-gray-700 py-16">
          <h2 className="text-3xl font-semibold">🌍 Why It Matters</h2>
          <p className="text-center">
            At Grevego, we believe healthy eating should be accessible,
            reliable, and sustainable . By blending technology, nutrition, and
            green logistics, we’re transforming how Africa eats — one delivery,
            one plan, and one community at a time.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Button variant="secondary" title="Become a Partner" url="/vendor" style="" secondary />
            <Button variant="primary" secondary title="Try Grevego" url="/" style="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
