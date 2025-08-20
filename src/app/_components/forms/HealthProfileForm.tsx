"use client"
import { Heart } from 'lucide-react'
import React, { useContext, useState } from 'react'
import InputField from '../InputField'
import { nutritionContext } from '@/app/nutrition-support/NutritionContext'
import { motion } from 'framer-motion'

const HealthProfileForm = () => {
    const context = useContext(nutritionContext);
    if (!context) throw new Error("HealthProfileForm must be used within nutritionContext.Provider");
    const { data, setData } = context;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        console.log(data);
    };
  return (
    <motion.div className='px-5 md:px-0'    
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='flex items-center justify-center gap-2 text-2xl font-semibold text-gray-800 text-center my-5 mt-10'> <Heart size={40} className='text-red-500'/> Health Profile</h2>
        <div className='flex flex-col gap-6'>
            <InputField
            label="Current Weight(kg)"
            type="text"
            placeholder="Type your Current Weight"
            name="weight"
            onchange={handleChange}
            value={data.weight}
            />
            <InputField
            label="Height(cm)"
            type="text"
            placeholder="Type your Height"
            name="height"
            onchange={handleChange}
            value={data.height}
            />
            <InputField
            label="Allergies"
            type="text"
            placeholder="Type your Allergies"
            name="allergies"
            onchange={handleChange}
            value={data.allergies}
            />
            <InputField
            label="Pre-existing medical conditions"
            type="text"
            placeholder="Type your Pre-existing medical conditions"
            name="medicalConditions"
            onchange={handleChange}
            value={data.medicalConditions}
            />
            <InputField
            label="Are you currently taking any medications? (if yes, please list them)"
            type="text"
            placeholder="Type your Medications"
            name="medications"
            onchange={handleChange}
            value={data.medications}
            />
      </div>
    </motion.div>
  );
};

export default HealthProfileForm;