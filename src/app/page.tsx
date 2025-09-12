"use client";
import { useRouter } from "next/navigation";
import Button from "./_components/Button";
import FeatureCard from "./_components/FeatureCard";
import Image from "next/image";
import { motion } from "framer-motion";
import HeaderCarousel from "./_components/HeaderCarousel";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default  function Home() {
  const features = [
    {
      id: 1,
      title: "Green and Cold Distribution",
      description:
        "We deliver organic produce and healthy meals from trusted vendors to your doorstep—fresh, cool, and sustainably.",
      imgUrl: "/home/features/feature1.jpg",
    },
    {
      id: 2,
      title: "Nutrition Support",
      description:
        "Personalized nutrition guidance to help you eat better, live healthier, and feel your best.",
      imgUrl: "/home/features/feature2.jpg",
    },
    {
      id: 3,
      title: "Circular Economy",
      description:
        "Turning food waste into green energy and organic fertilizer—closing the loop for a healthier planet.",
      imgUrl: "/home/features/feature3.jpg",
    },
  ];
  const howItWorks = [
    {
      id: 1,
      title: "Discover",
      description: " Identify nutrition needs and find products and vendors.",
    },
    {
      id: 2,
      title: "Plan",
      description: "Get smart nutrition advice and suggestions.",
    },
    {
      id: 3,
      title: "Shop",
      description:
        "Instantly order or schedule your salads and smoothies from your favorite vendors effortlessly.",
    },
    {
      id: 4,
      title: "Deliver",
      description:
        "Receive fresh product delivery at your doorstep, powered by cold last mile delivery.",
    },
  ];
  const router = useRouter();
  return (
    <>
      {/* begining of hero section */}
      <section className="w-full pb-10 pt-16 md:pt-10">
        <div className="lg:px-30 flex flex-col items-center gap-2 px-10 md:pt-10 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-[500px] pb-4 pt-10 text-center text-3xl font-bold text-gray-800 md:pt-4 md:text-5xl md:leading-snug"
          >
            Healthy Food, Sustainable Future
          </motion.h1>
          <p className="text-center text-sm text-gray-700">
            Revolutionizing food access through green retailing, smart delivery,
            and AI-powered nutrition guidance.
          </p>
        </div>
        <div className="no-scrollbar flex w-full items-center gap-2 overflow-x-scroll pl-5 pt-10 md:justify-center lg:gap-4">
          <FeatureCard title="Reduce Food Waste" />
          <FeatureCard title="Support Vendors" />
          <FeatureCard title="Smarter Nutrition" />
          <FeatureCard title="Greener Living" />
        </div>
        <div className="no-scrollbar relative my-16 w-full overflow-y-hidden">
          <div className="no-scrollbar hidden items-center gap-3 overflow-y-hidden overflow-x-scroll sm:flex md:gap-7 lg:justify-center">
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-1.png"
              }
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
              loading="lazy"
            />
            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-2.png"
              }
              alt="hero"
              width={600}
              height={100}
              className="w-[300px] md:w-full"
              priority
            />

            <Image
              src={
                "https://res.cloudinary.com/dm2pa4nll/grevego/hero/hero-3.png"
              }
              alt="hero"
              width={1000}
              height={200}
              className="w-[300px] md:w-full"
              priority
            />
          </div>
          <HeaderCarousel />
        </div>
      </section>
      {/* end of hero section */}
   
      {/* beginning of features section */}
      <section className="pt-10">
        <div className="flex flex-col items-center gap-5 py-5 md:py-10">
          <h2 className="text-2xl font-semibold capitalize text-gray-800 md:text-3xl">
            our smart solution
          </h2>
          <p className="max-w-[690px] px-2 text-center text-gray-700 md:px-10 lg:px-0">
            Grevego combines innovation and sustainability to make healthy
            living effortless , personalized nutrition, eco-friendly delivery,
            and zero-waste solutions, all in one place.
          </p>
        </div>
        <div className="grid gap-10 px-5 md:px-20 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div key={feature.id} className="rounded-xl p-5 shadow-lg" initial={{ opacity: 0, x: (feature.id + 1) % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (feature.id + 1) % 2 === 0 ? 0.2 : 0.4 }}>
              <Image
                src={feature.imgUrl}
                alt={feature.title}
                height={100}
                width={200}
                className="h-1/2 w-full rounded-lg"
              />
              <h3 className="py-2 pt-10 text-xl font-semibold capitalize">
                {feature.title}
              </h3>
              <p className="pt-2 text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* end of feature section   */}

      <section className="px-5 py-20 md:mt-10 md:px-20">
        <div className="flex flex-col items-start gap-4 pb-10">
          <h2 className="text-2xl font-semibold capitalize text-gray-800 md:text-3xl">
            sustainability and wellness made simple
          </h2>
          <p className="text-gray-700">
            Experience a seamless journey to healthier living with Grevego
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {howItWorks.map((how,index) => (
            <motion.div
              key={how.id}
              className="relative h-56 overflow-hidden rounded-2xl bg-primaryColor p-5 text-white"
              initial={{ opacity: 0, x: (index + 1) % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) % 2 === 0 ? 0.2 : 0.4 }}
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
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10 px-5 py-20 md:px-10 lg:flex-row lg:items-center lg:px-20">
        <motion.div
          className="flex max-w-[600px] flex-col items-start gap-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 md:text-3xl">
            Talk to a Nutrition Expert
          </h2>
          <p>
            Have questions about your diet or health goals? Our licensed
            nutritionists are here to help — no stress, no pressure.
          </p>
          <p>
            98% of users found clarity and direction after a 15-min nutrition
            chat.
          </p>
          <Button
            title="Get Free Consultation"
            variant="primary"
            onclick={() => router.push("/nutrition-support")}
            style="w-[250px] md:max-w-[300px] py-4 mt-5"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src={"/home/nutritionist.jpg"}
            alt="nutrition"
            width={800}
            height={800}
            className="my-10 rounded-2xl"
          />
        </motion.div>
      </section>
      <section className="py-20 text-gray-800">
        <div className="flex flex-col gap-5 px-5 md:px-10 lg:px-20">
          <h2 className="text-center text-3xl font-semibold">
            Nutrition On Our Minds
          </h2>
          <p className="mx-auto max-w-[900px] text-center text-muted-foreground">
            Explore insights, innovations, and voices shaping the Grevego
            movement.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-4">
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
                  Discover practical tips to reduce your environmental impact
                  and enhance your business’s sustainability.
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
            <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-4">
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
                  Discover practical tips to reduce your environmental impact
                  and enhance your business’s sustainability.
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
            </div>{" "}
            <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-4">
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
                  Discover practical tips to reduce your environmental impact
                  and enhance your business’s sustainability.
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
        </div>
      </section>
      <section className="px-5 py-32 pb-10 pt-0 md:px-20 md:pt-20">
        <div className="flex flex-col items-center gap-7">
          <h2 className="max-w-[1000px] text-center text-2xl font-semibold text-gray-800 md:text-3xl lg:text-3xl">
            Join the Movement for a Healthier, Greener World
          </h2>
          <p className="max-w-[900px] text-center text-gray-600">
            At Grevego, sustainability isn’t just a goal—it’s our promise.
            Through innovative practices and advanced green technology, we are
            redefining how businesses and individuals can contribute to a
            healthier planet.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="relative flex w-full flex-col items-center">
            <div className="flex w-full items-center justify-center gap-10">
              <Button
                title="Explore Marketplace"
                variant="primary"
                onclick={() => router.push("/marketplace")}
              />
              <Button
                title="Join as a Vendor"
                variant="secondary"
                onclick={() => router.push("/vendor")}
                style="py-3"
              />
            </div>
            <Image
              src={"/globe.gif"}
              width={800}
              height={800}
              alt="world globe"
              className="my-10"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
