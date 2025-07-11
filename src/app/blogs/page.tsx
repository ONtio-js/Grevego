import React from "react";
import Image from "next/image";
import {  ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, Search } from "lucide-react";
import Link from "next/link";
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";

const BlogsPage = () => {
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
          className="absolute -bottom-2 -right-10 right-0 object-cover"
        />
      </div>
      <section className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-semibold capitalize text-gray-700">
            features
          </h3>
          <div className="rounded-full border border-gray-300 px-4 py-2">
            1 of 4
          </div>
        </div>

        <div className="mt-10 max-w-[200px]">
          <div className="h-2.5 w-[200px] rounded-full bg-gray-200">
            <div
              className={"h-full w-[25%] rounded-full bg-primaryColor"}
            ></div>
          </div>
          <div className="mt-5 flex w-full items-center justify-between gap-2 pr-10">
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primaryColor/10 transition-all duration-300 hover:bg-primaryColor/50">
              <ChevronLeftIcon className="w-6 text-primaryColor" />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-primaryColor/30 transition-all duration-300 hover:bg-primaryColor/50">
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
          <div className="flex flex-col gap-5 rounded-lg bg-gray-50 p-4 hover:bg-primaryColor/30 transition-all duration-300">
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
            <div className="hidden cursor-pointer hover:bg-primaryColor transition-all duration-300 rounded-full px-10 py-3  bg-primaryColor/90 text-white w-[130px] flex items-center justify-center">
                <p>Previous</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="cursor-pointer w-10 h-10 rounded-full border border-primaryColor flex items-center justify-center text-primaryColor">1</p>
                <p className="cursor-pointer w-10 h-10 rounded-full  border-primaryColor flex items-center justify-center text-primaryColor">2</p>
                <p className="cursor-pointer w-10 h-10 rounded-full  border-primaryColor flex items-center justify-center text-primaryColor">3</p>
                <p className="cursor-pointer w-10 h-10 rounded-full  border-primaryColor flex items-center justify-center text-primaryColor">4</p>
                <p className="mx-5">of</p>
                <p className="cursor-pointer w-10 h-10 rounded-full  border-primaryColor flex items-center justify-center text-primaryColor">10</p>
            </div>
            <div className="cursor-pointer hover:bg-primaryColor transition-all duration-300 rounded-full px-10 py-3  bg-primaryColor/90 text-white w-[130px] flex items-center justify-center">
                <p>Next</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;