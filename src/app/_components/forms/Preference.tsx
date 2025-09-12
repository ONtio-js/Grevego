import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import InputField from '../InputField'
import { nutritionContext } from '@/app/nutrition-support/NutritionContext'

const Preference = () => {
    const context = useContext(nutritionContext);
    if (!context) throw new Error("Preference must be used within nutritionContext.Provider");
    const { data, setData } = context;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };
  return (
    <motion.div
      className="px-5 md:px-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="my-5 capitalize mt-10 flex items-center justify-center gap-2 text-center text-2xl font-semibold text-gray-800">
        {" "}
        Preference & support
      </h2>
      <div className="flex flex-col gap-6">
        <InputField
          label="Are there any foods you’d like to eat more of or avoid?"
          type="text"
          placeholder="Type your dietary restrictions or preferences"
          name="dietary_restrictions"
          onchange={handleChange}
          value={data.dietary_restrictions}
        />
        <InputField
          label="Do you prefer local meals in your plan or a mix of regular options?"
          type="text"
          placeholder="Type your food preference"
          name="food_preference"
          onchange={handleChange}
          value={data.food_preference}
        />
        <InputField
          label="How would you like Grevego to support you?"
          type="text"
          placeholder="e.g food recommendations, meal planning, etc"
          name="support_type"
          onchange={handleChange}
          value={data.support_type}
        />
      </div>
    </motion.div>
  );
}

export default Preference