import { motion } from "framer-motion";
import React, { useContext } from "react";
import InputField from "../InputField";
import { nutritionContext } from "@/app/nutrition-support/NutritionContext";
import { Checkbox } from "@/components/ui/checkbox";

const Lifestyle = () => {
  const context = useContext(nutritionContext);
  if (!context)
    throw new Error("Lifestyle must be used within nutritionContext.Provider");
  const { data, setData } = context;

  const handleLifestyleChange = (lifestyleValue: string) => {
    setData({ ...data, lifestyle: lifestyleValue });
  };

  const lifestyleOptions = [
    "Mostly sedentary (office/remote work, little exercise, etc)",
    "Moderately active (moderate exercise, daily movement, etc)",
    "Very active (intense exercise, daily movement, etc)",
  ];
  return (
    <motion.div
      className="px-5 md:px-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="my-5 mt-10 flex items-center justify-center gap-2 text-center text-2xl font-semibold text-gray-800">
        {" "}
        Lifestyle
      </h2>
      <div className="flex flex-col gap-6 rounded-lg border border-gray-200 p-5 text-gray-600 md:p-10">
        {lifestyleOptions.map((option) => (
          <div key={option} className="flex cursor-pointer items-center gap-2">
            <Checkbox
              checked={data.lifestyle === option}
              onCheckedChange={(checked) => {
                if (checked) {
                  handleLifestyleChange(option);
                }
              }}
              className="size-5"
            />
            <p onClick={() => handleLifestyleChange(option)}>{option}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Lifestyle;
