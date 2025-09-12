import { motion } from 'framer-motion'
import React from 'react'
import InputField from '../InputField'
import { nutritionContext } from '@/app/nutrition-support/NutritionContext'
import { useContext } from 'react'

const EatingHabit = () => {
    const context = useContext(nutritionContext);
    if (!context) throw new Error("EatingHabit must be used within nutritionContext.Provider");
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
      <h2 className="my-5 mt-10 flex items-center justify-center gap-2 text-center text-2xl font-semibold text-gray-800">
        {" "}
        Eating Habit
      </h2>
      <div className="flex flex-col gap-6">
        <InputField
          label="How many meals do you eat per day?"
          type="text"
          placeholder="Type your number of meals"
          name="number_of_meals"
          onchange={handleChange}
          value={data.number_of_meals}
        />
        <InputField
          label="How often do you snack?"
          type="text"
          placeholder="Type your snack frequency"
          name="snack_frequency"
          onchange={handleChange}
          value={data.snack_frequency}
        />
        <InputField
          label="Do you usually eat more home-cooked meals or outside meals?"
          type="text"
          placeholder="Type your meal type"
          name="meal_type"
          onchange={handleChange}
          value={data.meal_type}
        />
        <InputField
          label="How often do you drink water daily?"
          type="text"
          placeholder="Type your water frequency"
          name="water_frequency"
          onchange={handleChange}
          value={data.water_frequency}
        />
      </div>
        
    </motion.div>
  )
}

export default EatingHabit