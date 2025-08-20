"use client";
import { Utensils } from "lucide-react";
import React, { useContext } from "react";
import InputField from "../InputField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectLabel, SelectValue } from "@radix-ui/react-select";
import { nutritionContext } from "@/app/nutrition-support/NutritionContext";
import { motion } from "framer-motion";

const DietaryProfileForm = () => {
  const context = useContext(nutritionContext);
  if (!context)
    throw new Error(
      "DietaryProfileForm must be used within nutritionContext.Provider",
    );
  const { data, setData } = context;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSelectChange = (value: string, field: string) => {
    setData({ ...data, [field]: value });
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
        <Utensils size={40} className="text-primaryColor" /> Dietary Profile
      </h2>
      <div className="flex flex-col gap-6">
        <SelectGroup>
          <Select
            value={data.visited_nutritionist}
            onValueChange={(value) =>
              handleSelectChange(value, "visited_nutritionist")
            }
          >
            <SelectLabel className="pb-2 font-semibold text-gray-700">
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
        <SelectGroup>
          <Select
            value={data.health_goals}
            onValueChange={(value) => handleSelectChange(value, "health_goals")}
          >
            <SelectLabel className="pb-2 font-semibold text-gray-700">
              What health goal would you like to work on?
            </SelectLabel>
            <SelectTrigger style={{ height: "50px" }}>
              <SelectValue placeholder="select answer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weight_loss">Weight Loss</SelectItem>
              <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="health_improvement">
                Health Improvement
              </SelectItem>
            </SelectContent>
          </Select>
        </SelectGroup>
        <InputField
          label={
            <>
              <span className="text-gray-700">
                Anything you&apos;d like to share with your nutritionist?{"  "}
              </span>
              <span className="text-amber-400">(optional)</span>
            </>
          }
          type="text"
          placeholder="Type your anything to share"
          name="other_info"
          onchange={handleChange}
          value={data.other_info}
        />
      </div>
    </motion.div>
  );
};

export default DietaryProfileForm;
