"use client"
import React, { useContext, useState } from 'react'
import InputField from '../InputField'
import { nutritionContext } from '@/app/nutrition-support/NutritionContext'
import { motion } from 'framer-motion'
import { SelectGroup,Select,SelectLabel,SelectTrigger,SelectValue,SelectContent,SelectItem } from '@/components/ui/select'

const HealthProfileForm = () => {
    const context = useContext(nutritionContext);
    if (!context) throw new Error("HealthProfileForm must be used within nutritionContext.Provider");
    const { data, setData } = context;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(data);
    };
     const handleSelectChange = (value: string, field: string) => {
       setData({ ...data, [field]: value });
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
        Health & Lifestyle
      </h2>
      <div className="flex flex-col gap-6">
        <SelectGroup>
          <Select
            value={data.visited_nutritionist}
            onValueChange={(value) =>
              handleSelectChange(value, "visited_nutritionist")
            }
          >
            <SelectLabel className="pb-2 font-medium text-gray-600 capitalize">
              Have you ever visited a dietitian or nutritionist before?
            </SelectLabel>
            <SelectTrigger style={{ height: "50px" }}>
              <SelectValue placeholder="select answer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>

        <InputField
          label="Do you have medical conditions we should be aware of?"
          type="text"
          placeholder="e.g diabetes,heart disease,etc"
          name="medicalConditions"
          onchange={handleChange}
          value={data.medicalConditions}
        />
        <InputField
          label="Are you currently taking any medications? (if yes, please list them)"
          type="text"
          placeholder="yes/no - if yes, please specify"
          name="medications"
          onchange={handleChange}
          value={data.medications}
        />
        <InputField
          label="Any known food Allergies/intolerance"
          type="text"
          placeholder="e.g nuts,diary,gluten,etc"
          name="allergies"
          onchange={handleChange}
          value={data.allergies}
        />
      </div>
    </motion.div>
  );
};

export default HealthProfileForm;