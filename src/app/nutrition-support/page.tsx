"use client";
import React, { useState } from "react";
import UserProfileForm from "../_components/forms/UserProfileForm";
import HealthProfileForm from "../_components/forms/HealthProfileForm";
import NutritionGoal from "../_components/forms/NutritionGoal";
import Button from "../_components/Button";
import { motion } from "framer-motion";
import Spinner from "../_components/Spinner";
import { nutritionContext, NutritionContextType } from "./NutritionContext";
import EatingHabit from "../_components/forms/EatingHabit";
import Lifestyle from "../_components/forms/Lifestyle";
import Preference from "../_components/forms/Preference";
import FinalChek from "../_components/forms/FinalChek";
import Success from "../_components/status/Success";

const NutritionPage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [data, setData] = useState<NutritionContextType["data"]>({
    name: "",
    gender: "",
    age: "",
    location: "",
    visited_nutritionist: "",
    medications: "",
    allergies: "",
    medicalConditions: "",
    health_goals: "",
    other_info: "",
    commitment: "",
    challenge: "",
    regular_check_in: "",
    regular_check_in_other: "",
    dietary_restrictions: "",
    food_preference: "",
    support_type: "",
    support_type_other: "",
    number_of_meals: "",
    snack_frequency: "",
    meal_type: "",
    water_frequency: "",
    nutrition_goals: [],
    lifestyle: "",
  });
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    const formDataToSend = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formDataToSend.append(key, value as string);
    });
    console.log(data);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxaKWRDfohbWXOyee6SwCRrv3XIMrUot0nWGRK4ehRDk8L_kINah1CNVjY-YxNIWI7Slg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataToSend.toString(),
        },
      );
    
      setIsSuccess(true);
      if (response.ok) {
        setIsSuccess(true);
        setData({
          name: "",
          gender: "", 
          age: "",
          location: "",
          allergies: "",
          medicalConditions: "",
          medications: "",
          visited_nutritionist: "",
          health_goals: "",
          other_info: "",
          commitment: "",
          challenge: "",
          regular_check_in: "",
          regular_check_in_other: "",
          dietary_restrictions: "",
          food_preference: "",
          support_type: "",
          support_type_other: "",
          number_of_meals: "",
          snack_frequency: "",
          meal_type: "",
          water_frequency: "",
          nutrition_goals: [],
          lifestyle: "",
        });
        setStep(1);
      } else {
        setError("Error submitting form");
      }
    } catch (error) {
      setError("Error submitting form");
      console.log(error);
    } finally {
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6 py-10 lg:mt-0">
      <Success isOpen={isSuccess} onClose={() => setIsSuccess(false)} />
      <h2 className="max-w-[500px] text-center text-xl  font-semibold leading-[3rem] text-gray-800 md:text-5xl">
        Grevego Nutrition Support Intake Form
      </h2>
      <p className="max-w-[500px] text-center text-sm text-gray-500 md:text-base">
        Let&apos;s get to know you better so we can offer personalized and
        practical guidance tailored to your lifestyle and goals.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h4 className="max-w-[500px] text-center text-sm font-semibold text-gray-600 md:text-base">
          {" "}
          step {step} of 7
        </h4>
       
        <div className="w-full max-w-[600px] min-h-[500px]">
          {error && (
            <motion.div
              className="rounded-md bg-red-100 p-2 text-center text-red-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {error}
            </motion.div>
          )}
        
          {isLoading && error == null && <Spinner />}
          <nutritionContext.Provider value={{ data, setData }}>
            {step === 1 && <UserProfileForm />}
            {step === 2 && <HealthProfileForm />}
            {step === 3 && <NutritionGoal />}
            {step === 4 && <EatingHabit />}
            {step === 5 && <Lifestyle />}
            {step === 6 && <Preference />}
            {step === 7 && <FinalChek />}
          </nutritionContext.Provider>
        </div>
        <div className="mt-10 flex items-center justify-center gap-10">
          <Button
            variant="secondary"
            title="Previous"
            style={`w-[150px] ${step === 1 ? "hidden" : ""}`}
            onclick={() => {
              setStep(step - 1);
            }}
          />
          <Button
            variant="primary"
            title="Next"
            style={`w-[150px] ${step === 7 ? "hidden" : ""}`}
            onclick={() => {
              setStep(step + 1);
              setError(null);
              setIsSuccess(false);
            }}
          />
          <Button
            variant="primary"
            title="Submit"
            style={`w-[150px] ${step === 7 ? "" : "hidden"}`}
            onclick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
