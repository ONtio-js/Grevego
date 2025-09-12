import { nutritionContext } from '@/app/nutrition-support/NutritionContext';
import { motion } from 'framer-motion';
import React, { useContext } from 'react'
import InputField from '../InputField';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from '@/components/ui/select';

const FinalChek = () => {
    const context = useContext(nutritionContext);
    if (!context) throw new Error("FinalChek must be used within nutritionContext.Provider");
    const { data, setData } = context;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
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
        Final Check
      </h2>
      <div className="flex flex-col gap-6">
        <InputField
          label="What’s the biggest challenge you face right now with food/nutrition?"
          type="text"
          name="challenge"
          placeholder="Type your challenge"
          value={data.challenge}
          onchange={handleChange}
        />
        <InputField
          label="On a scale of 1–5, how committed are you to making a change?"
          type="text"
          name="commitment"
          placeholder="Type your commitment"
          value={data.commitment}
          onchange={handleChange}
        />
        <SelectGroup>
            <SelectLabel className="pb-2 font-medium text-gray-600 capitalize text-base">Would you require a regular check-in on your nutrition support project</SelectLabel>
        <Select value={data.regular_check_in} onValueChange={(value) => handleSelectChange(value, "regular_check_in")}>
          <SelectTrigger className="w-full h-12" style={{ height: "50px" }}>
            <SelectValue placeholder="Type your answer" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
        </SelectGroup>
        <InputField
          label="Anything else you’ll like to share with your nutritionist?"
          type="text"
          name="other_info"
          placeholder="Type your other info"
          value={data.other_info}
          onchange={handleChange}
        />
      </div>
    </motion.div>
  );
}

export default FinalChek