"use client";
import React, { useState } from 'react'
import Logo from './Logo';
import Link from 'next/link';
import Button from './Button';
import { usePathname, useRouter } from 'next/navigation';
import { RiMenu3Fill } from "react-icons/ri";
import {  RxCaretRight } from 'react-icons/rx';
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [menu,setMenu] = useState(false);
  const [orderMenu,setOrderMenu] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex  w-full  items-center justify-between px-5 py-4 lg:py-6 xl:px-20 bg-white  z-20 fixed lg:relative">
      <div className="lg:gap-x-13 flex items-center gap-x-5">
        <Logo width={100} height={100} />

        <ul
          className={`ml-5 hidden items-center gap-x-5 text-sm text-muted-foreground lg:flex lg:text-base xl:text-lg`}
        >
          <li
            className={`${pathname === "/" ? "font-medium text-primaryColor" : ""}`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`${pathname === "/about" ? "font-medium text-primaryColor" : ""}`}
          >
            <Link href={"/about"}>About Us</Link>
          </li>
          <li
            className={`${pathname === "/services" ? "font-medium text-primaryColor" : ""}`}
          >
            <Link href={"/services"}>Services</Link>
          </li>
          <li
            className={`${pathname === "/contact" ? "font-medium text-primaryColor" : ""}`}
          >
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="hidden items-center gap-6 lg:flex">
        <Button
          variant="secondary"
          secondary
          title="Become a Partner"
          onclick={() => setOpen(true)}
        />
        <Button
          variant="primary"
          secondary
          title="Try Grevego"
          onclick={() => {setOrderMenu(true);setOpen(true)}}
        />
      </div>
      <div
        className={`${menu ? "bg-primaryColor/60 p-2" : "bg-transparent"} rounded-lg transition-all duration-500 ease-in hover:cursor-pointer lg:hidden`}
        onClick={() => setMenu((prev) => !prev)}
      >
        <RiMenu3Fill size={28} className="text-primaryColor" />
      </div>
      <PartnerLink open={open} orderMenu={orderMenu} setOrderMenu={setOrderMenu} setOpen={setOpen} />
      <MobileNav menu={menu} onclick={() => setMenu((prev) => !prev)} setOrderMenu={setOrderMenu} setOpen={setOpen} orderMenu={orderMenu} />
    </nav>
  );
}
const PartnerLink = ({open,orderMenu,setOrderMenu,setOpen}:{open:boolean,orderMenu:boolean,setOrderMenu: (value: boolean) => void,setOpen: (value: boolean) => void}) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen bg-transparent transition-all delay-1000 ${open ? "block" : "hidden"}`}
      onClick={() => {setOrderMenu(false);setOpen(false)}}
    >
      <ul
        className={` ${open ? "translate-x-0" : "-translate-x-[100%]"} absolute right-40 top-24 rounded-xl bg-white p-10 text-muted-foreground shadow-lg drop-shadow-lg transition-all delay-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="border-b-2 border-muted pb-2">
          <Link onClick={() => {setOrderMenu(false);setOpen(false)}} href={orderMenu ? "/nutrition-support" : "/vendor"} className="flex items-center gap-2">
            {orderMenu ? "Get Nutrition Support" : "Join as a Vendor"} <RxCaretRight size={30} className="font-semibold" />
          </Link>
        </li>
        <li className="pt-2">
          <Link onClick={() => {setOrderMenu(false);setOpen(false)}} href={orderMenu ? "/whatsapp" : "/agent"} className="flex items-center gap-2">
            {orderMenu ? "Order on Whatsapp" : "Become a Delivery Agent"} <RxCaretRight size={30} className="font-semibold" />
          </Link>
        </li>
      </ul>
    </div>
  );

  
}
const MobileNav = ({ menu,onclick,setOrderMenu,setOpen,orderMenu }: { onclick: () => void; menu: boolean,setOrderMenu: (value: boolean) => void,setOpen: (value: boolean) => void,orderMenu: boolean }) => {
  const [drop, setDrop] = useState(false);
  const [drop2, setDrop2] = useState(false);
  const router = useRouter();
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen overflow-scroll bg-black/20 transition-all duration-300 ease-in-out ${menu ? "flex justify-center" : "translate-x-[110%]"}`}
      onClick={() => {
        onclick();
        setDrop(false);
      }}
    >
      <ul
        className={` ${menu ? "translate-x-0" : "translate-x-[110%]"} absolute top-24 flex w-[95%] flex-col items-center gap-5 rounded-xl bg-green-50 p-10 text-muted-foreground shadow-lg drop-shadow-lg transition-transform duration-500`}
        onClick={(e) => e.stopPropagation()}
      >
        <li className="text-center">
          <Link href={"/"} onClick={onclick}>
            Home
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/services"}>
            Services
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/about"}>
            About Us
          </Link>
        </li>
        <li className="text-center">
          <Link onClick={onclick} href={"/contact"}>
            Contact Us
          </Link>
        </li>
        <li className="flex w-full flex-col items-center justify-center">
          <Button
            title="Become a Partner"
            variant="secondary"
            secondary
            style={`pl-5 w-[100%] gap-5 py-2  hover:bg-none font-medium text-black`}
            onclick={() => setDrop((prev) => !prev)}
          />
          <ul
            className={`${drop ? "flex opacity-100" : "hidden opacity-0"} mt-4 w-[100%] flex-col gap-3 rounded-2xl bg-white p-5 shadow-2xl drop-shadow-xl transition-opacity duration-700 ease-in`}
          >
            <li className="flex items-center gap-3 text-[15px]">
              <Link onClick={onclick} href={"/vendor"}>
                Join as a vendor
              </Link>
              <RxCaretRight size={30} className="font-semibold" />
            </li>
            <li className="mt-3 flex items-center gap-1 border-t-2 py-3 text-[15px]">
              <Link onClick={onclick} href={"/agent"}>
                Become a Delivery Agent
              </Link>{" "}
              <RxCaretRight size={30} className="font-semibold" />
            </li>
          </ul>
        </li>
        <li className="flex w-full flex-col items-center justify-center">
          <Button
            title="Try Grevego"
            variant="primary"
            secondary
            style="w-[100%]  font-medium text-black hover:bg-none"
            onclick={() => {
              
              setDrop2((prev) => !prev);
            }}
          />
          <ul
            className={`${drop2 ? "flex opacity-100" : "hidden opacity-0"} mt-4 w-[100%] flex-col gap-3 rounded-2xl bg-white p-5 shadow-2xl drop-shadow-xl transition-opacity duration-700 ease-in`}
          >
            <li className="flex items-center gap-3 text-[15px]">
              <Link onClick={onclick} href={"/nutrition-support"}>
                Get Nutrition Support
              </Link>
              <RxCaretRight size={30} className="font-semibold" />
            </li>
            <li className="mt-3 flex items-center gap-1 border-t-2 py-3 text-[15px]">
              <Link onClick={onclick} href={"/whatsapp"}>
                Order on Whatsapp
              </Link>{" "}
              <RxCaretRight size={30} className="font-semibold" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default Header