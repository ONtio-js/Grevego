"use client";
import React, { useContext } from "react";
import InputField from "../InputField";
import { User } from "lucide-react";
import { nutritionContext } from "@/app/nutrition-support/NutritionContext";
import { motion } from "framer-motion";

const UserProfileForm = () => {
  const context = useContext(nutritionContext);
  if (!context)
    throw new Error(
      "UserProfileForm must be used within nutritionContext.Provider",
    );
  const { data, setData } = context;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <motion.div
      className="px-5 md:px-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="my-5 mt-10 flex items-center justify-center gap-2 text-center text-2xl font-semibold text-gray-800">
        {" "}
         Basic Information
      </h2>
      <div className="flex flex-col gap-6">
        <InputField
          label="Name"
          type="text"
          placeholder="Type your Name"
          name="name"
          onchange={handleChange}
          value={data.name}
        />
        <InputField
          label="age"
          type="text"
          placeholder="Type your Age"
          name="age"
          onchange={handleChange}
          value={data.age}
        />
        <InputField
          label="gender"
          type="text"
          placeholder="Type your Gender"
          name="gender"
          onchange={handleChange}
          value={data.gender}
        />
        <InputField
          label="location"
          type="text"
          placeholder="Type your city/Area"
          name="location"
          onchange={handleChange}
          value={data.location}
        />
      </div>
    </motion.div>
  );
};

export default UserProfileForm;
