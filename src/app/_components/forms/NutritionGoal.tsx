"use client";
import { Utensils } from "lucide-react";
import React, { useContext, useState } from "react";
import InputField from "../InputField";

import { nutritionContext } from "@/app/nutrition-support/NutritionContext";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

const NutritionGoal = () => {
  const context = useContext(nutritionContext);
  if (!context)
    throw new Error(
      "NutritionGoal must be used within nutritionContext.Provider",
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

  const handleCheckboxChange = (goal: string, checked: boolean) => {
    if (checked) {
      setData({
        ...data,
        nutrition_goals: [...data.nutrition_goals, goal],
      });
    } else {
      setData({
        ...data,
        nutrition_goals: data.nutrition_goals.filter((g) => g !== goal),
      });
    }
  };

  const [showOther, setShowOther] = useState(false);

  return (
    <motion.div
      className="px-5 md:px-0"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="my-5 mt-10 flex items-center justify-center gap-2 text-center text-2xl font-semibold text-gray-800">
        {" "}
        Nutrition Goals (Choose one or more)
      </h2>
      <div className="flex flex-col gap-6 rounded-lg border border-gray-200 p-5 text-gray-600 md:p-10">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes("Manage diabetes")}
            onCheckedChange={(checked) =>
              handleCheckboxChange("Manage diabetes", checked as boolean)
            }
            className="size-5 accent-primaryColor"
          />
          <p> Manage diabetes</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes("Weight loss")}
            onCheckedChange={(checked) =>
              handleCheckboxChange("Weight loss", checked as boolean)
            }
            className="size-5 accent-primaryColor"
          />
          <p> Weight loss</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes(
              "Weight gain/ muscle building",
            )}
            onCheckedChange={(checked) =>
              handleCheckboxChange(
                "Weight gain/ muscle building",
                checked as boolean,
              )
            }
            className="size-5 accent-primaryColor"
          />
          <p> Weight gain/ muscle building</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes("General fitness & energy")}
            onCheckedChange={(checked) =>
              handleCheckboxChange(
                "General fitness & energy",
                checked as boolean,
              )
            }
            className="size-5 accent-primaryColor"
          />
          <p> General fitness & energy</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes(
              "Post-natal/nursing mother support",
            )}
            onCheckedChange={(checked) =>
              handleCheckboxChange(
                "Post-natal/nursing mother support",
                checked as boolean,
              )
            }
            className="size-5 accent-primaryColor"
          />
          <p> Post-natal/nursing mother support</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes(
              "Heart health & blood pressure management",
            )}
            onCheckedChange={(checked) =>
              handleCheckboxChange(
                "Heart health & blood pressure management",
                checked as boolean,
              )
            }
            className="size-5 accent-primaryColor"
          />
          <p> Heart health & blood pressure management</p>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={data.nutrition_goals.includes("Other")}
            onCheckedChange={(checked) => {
              handleCheckboxChange("Other", checked as boolean);
              setShowOther(checked as boolean);
            }}
            className="size-5 accent-primaryColor"
          />
          <p> Other (please specify)</p>
        </div>
        {showOther && (
          <motion.div
            className="mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InputField
              type="textarea"
              placeholder="Please specify"
              name="nutrition_goals"
              onchange={handleChange}
              value={data.nutrition_goals.join(", ")}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default NutritionGoal;
