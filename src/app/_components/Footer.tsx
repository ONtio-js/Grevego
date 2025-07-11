"use client";
import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { TbMailFilled } from "react-icons/tb";
import { PiTrademarkLight } from "react-icons/pi";

import FeatureCard from "./FeatureCard";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
const Footer = () => {
  const router = useRouter();
  return (
    <>
      <section className="bg-primaryColor py-32">
        <div className="flex flex-col items-center gap-5 px-5 md:px-10 lg:px-20">
          <h2 className="text-center text-3xl font-semibold text-white">
            Grow Your Business & Earn with Grevego
          </h2>
          <p className="max-w-[900px] text-center text-white">
            Join our network of eco-friendly vendors and delivery partners.
            Whether you sell healthy products or want to deliver with purpose,
            we’ve got a place for you!
          </p>
          <Button
            title="Become a Partner"
            variant="secondary"
            style="text-white border-white mt-10"
            secondary={false}
            onclick={() => router.push("/agent")}
          />
        </div>
        <div className="no-scrollbar flex items-center gap-2 overflow-x-scroll pl-5 pt-10 md:justify-center lg:gap-4">
          <FeatureCard title="Reduce Food Waste" />
          <FeatureCard title="Support Vendors" />
          <FeatureCard title="Personalized Nutrition" />
          <FeatureCard title="Clean Energy Solutions" />
        </div>
        <div className="relative my-20 overflow-y-hidden">
          <div className="no-scrollbar flex items-center gap-4 overflow-x-scroll lg:justify-center">
            <Image
              src={"https://res.cloudinary.com/dm2pa4nll/grevego/footer-1.png"}
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
            />
            <Image
              src={"https://res.cloudinary.com/dm2pa4nll/grevego/footer-2.png"}
              alt="hero"
              width={500}
              height={200}
              className="w-[300px] md:w-full"
            />
            <Image
              src={"https://res.cloudinary.com/dm2pa4nll/grevego/footer-3.png"}
              alt="hero"
              width={600}
              height={200}
              className="w-[300px] md:w-full"
            />
          </div>
        </div>
        <div>
          <div className="mx-auto mb-10 flex max-w-[900px] flex-col items-center gap-5 px-5 md:px-20">
            <h2 className="text-3xl font-semibold capitalize text-white">
              success story
            </h2>
            <p className="text-center text-white">
              At Grevego, sustainability isn’t just a goal—it’s our promise.
              Through innovative practices and advanced green technology, we are
              redefining how businesses and individuals can contribute to a
              healthier planet.
            </p>
          </div>
          <div className="mx-5 flex max-w-[900px] flex-col items-center border-2 border-dashed border-white p-10 md:mx-20 md:p-20 lg:mx-auto">
            <p className="text-center text-white">
              “Grevego is committed to strengthening Africa’s fresh produce
              supply chain through responsible, technical solutions that support
              communities and economics.”
            </p>
            <div className="mt-20 flex flex-col items-center gap-2">
              <Image
                src={"/home/user.svg"}
                alt="hero"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl font-semibold text-white">
                  Samuel Efosa-Austin
                </h3>
                <p className="text-white">President, TECH4GOOD Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <footer className="flex flex-col px-5 py-20 text-muted-foreground md:items-center lg:px-20">
        <div className="grid items-start gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:max-w-[300px]">
            <Logo width={100} height={100} />
            <p className="py-4">
              Revolutionizing food system through technology and sustainability
            </p>
            <p>
              <a href="grevegohq@gmail.com" target="_blankk">
                grevegohq@gmail.com
              </a>
            </p>
            <p className="py-3">
              <a href="tel:+2349053306268">+2349053306268 </a>
            </p>
            <p>1 Muba Abiru, Lagos Nigeria</p>
          </div>
          <div className="col-span-3 grid gap-5 md:grid-cols-5 md:pl-3 lg:pl-0">
            <ul className="flex flex-col gap-y-3">
              <h3 className="text-lg font-semibold capitalize">discover</h3>
              <li>
                <Link href={"/about"}>About us</Link>
              </li>
              <li>
                <Link href={"/blogs"}>Blog</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact us</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3">
              <h3 className="text-lg font-semibold capitalize">Services</h3>
              <li>
                <Link href={"/market"}>Explore market place</Link>
              </li>
              <li>
                <Link href={"/vendor"}>Join as a vendor</Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold capitalize">Legal</h3>
              <li>
                <Link href={"/privacy"}>Privacy policy</Link>
              </li>
              <li>
                <Link href={"/terms"}>Terms of use</Link>
              </li>
            </ul>
            <div className="mt-10 flex flex-col gap-y-3 md:col-span-2 md:mt-0">
              <h3 className="text-lg font-semibold capitalize">
                Sustainable Digest
              </h3>
              <p>
                Be the first to know. Get the latest on healthy living and
                sustainability
              </p>
              <div className="mt-10 flex w-full items-center justify-evenly rounded-[32px] bg-gray-100 px-4">
                <TbMailFilled className="size-6" />
                <input
                  className="ml-2 w-2/3 border-none bg-transparent py-[14px] text-lg text-muted-foreground focus:border-none focus:outline-none"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button className="rounded-full bg-primaryColor px-3 py-[6px] text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 mt-20 h-[1px] w-full bg-gray-300"></div>
        <div className="flex w-full flex-col justify-between gap-y-5 pb-10 md:flex-row md:items-center">
          <p>© Grevego {new Date().getFullYear()}. All rights reserved</p>
          <p className="mditems-center hidden gap-1 md:flex">
            powered by
            <span className="flex font-semibold">
              webMekanic
              <sub>
                <PiTrademarkLight />
              </sub>
            </span>
          </p>
          <div className="flex items-center gap-3">
            follow us:{" "}
            <div className="flex items-center gap-3">
              <a href="#" target="_blank">
                <Image
                  src={"/home/icons/facebook.svg"}
                  width={24}
                  height={100}
                  alt="x"
                />
              </a>
              <a href="https://x.com/grevego_hq?s=21" target="_blank">
                <Image
                  src={"/home/icons/x.svg"}
                  width={20}
                  height={100}
                  alt="x"
                />
              </a>
              <a
                href="https://www.instagram.com/grevego.hq?igsh=bmprb2plNHltN2tj&utm_source=qr"
                target="_blank"
              >
                <Image
                  src={"/home/icons/instagram.svg"}
                  width={24}
                  height={100}
                  alt="x"
                />
              </a>
              <a href="https://x.com/grevego_hq?s=21" target="_blank">
                <Image
                  src={"/home/icons/whatsapp.svg"}
                  width={24}
                  height={100}
                  alt="x"
                />
              </a>
            </div>
          </div>
        </div>
        <Image
          src={"https://res.cloudinary.com/dm2pa4nll/grevego/logo.svg"}
          width={600}
          height={600}
          alt="grevego"
        />
      </footer>
    </>
  );
};
export default Footer;
