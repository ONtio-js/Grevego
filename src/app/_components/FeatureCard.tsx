import React from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";

const FeatureCard = ({title,colored}:{title:string,colored?: boolean}) => {
  return (
    <div
      className={`flex items-center gap-2 justify-center text-xs lg:text-base min-w-[200px] md:w-[250px] rounded-xl ${colored ? "text-gray-700" : "bg-secondaryColor text-primaryColor"} px-3 py-1`}
    >
      <HiOutlineLightBulb size={24} className='' />
      {title}
    </div>
  );
}

export default FeatureCard