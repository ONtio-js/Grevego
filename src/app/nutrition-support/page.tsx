"use client";
import React, { useState } from "react";
import UserProfileForm from "../_components/forms/UserProfileForm";
import HealthProfileForm from "../_components/forms/HealthProfileForm";
import DietaryProfileForm from "../_components/forms/DietaryProfileForm";
import Button from "../_components/Button";
import { motion } from "framer-motion";
import Spinner from "../_components/Spinner";
import { nutritionContext, NutritionContextType } from "./NutritionContext";

const NutritionPage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [data, setData] = useState<NutritionContextType["data"]>({
    name: "",
    gender: "",
    age: "",
    occupation: "",
    height: "",
    weight: "",
    allergies: "",
    medicalConditions: "",
    medications: "",
    visited_nutritionist: "",
    health_goals: "",
    other_info: "",
  });
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    if (step === 3) {
      if (
        data.visited_nutritionist === "" ||
        data.health_goals === "" ||
        data.name === "" ||
        data.gender === "" ||
        data.age === "" ||
        data.occupation === "" ||
        data.height === "" ||
        data.weight === "" ||
        data.allergies === "" ||
        data.medicalConditions === "" ||
        data.medications === ""
      ) {
        setError("Please fill in all fields");
        return;
      }
    }
    const formDataToSend = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyIhIztp_yHKja6ODgZLuFznNGV-YH0VmNWz0q_lgnwIk_LJWPY9RGTk8JgenKwm6TqNA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formDataToSend.toString(),
        },
      );
      console.log(response);
      if (response.ok) {
        setSuccess(
          "You're on the list! We'll keep you updated with exclusive perks and launch details soon. 🚀",
        );
        setData({
          name: "",
          gender: "",
          age: "",
          occupation: "",
          height: "",
          weight: "",
          allergies: "",
          medicalConditions: "",
          medications: "",
          visited_nutritionist: "",
          health_goals: "",
          other_info: "",
        });
        setStep(1);
      } else {
        setError("Error submitting form");
      }
    } catch (error) {
      setError("Error submitting form");
      console.log(error);
    } finally {
      setSuccess(null);
      setError(null);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-6 py-10 lg:mt-0">
      <h2 className="max-w-[500px] text-center text-2xl font-semibold leading-[3rem] text-gray-800 md:text-5xl">
        Grevego Nutrition Support Intake Form
      </h2>
      <p className="max-w-[500px] text-center text-sm text-gray-500 md:text-base">
        Let&apos;s get to know you better so we can offer personalized and
        practical guidance tailored to your lifestyle and goals.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h4 className="max-w-[500px] text-center text-sm font-semibold text-gray-600 md:text-base">
          {" "}
          step {step} of 3
        </h4>
        <div className="flex items-center justify-center gap-10">
          <h4
            className={`text-center text-sm text-gray-600 md:text-lg ${step === 1 ? "border-b-2 border-gray-600 font-semibold" : "border-none font-thin"} capitalize transition-all duration-500`}
          >
            user profile
          </h4>
          <h4
            className={`text-center text-sm capitalize md:text-lg ${step === 2 ? "border-b-2 border-gray-600 font-semibold" : "border-none font-thin"} transition-all duration-500`}
          >
            Health Profile
          </h4>
          <h4
            className={`text-center text-sm capitalize md:text-lg ${step === 3 ? "border-b-2 border-gray-600 font-semibold" : "border-none font-thin"} transition-all duration-500`}
          >
            Dietary Preferences
          </h4>
        </div>
        <div className="w-full max-w-[600px]">
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
          {success && (
            <motion.div
              className="rounded-md bg-green-100 p-2 text-center text-green-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {success}
            </motion.div>
          )}
          {isLoading && error == null && <Spinner />}
          <nutritionContext.Provider value={{ data, setData }}>
            {step === 1 && <UserProfileForm />}
            {step === 2 && <HealthProfileForm />}
            {step === 3 && <DietaryProfileForm />}
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
            style={`w-[150px] ${step === 3 ? "hidden" : ""}`}
            onclick={() => {
              setStep(step + 1);
              setError(null);
              setSuccess(null);
            }}
          />
          <Button
            variant="primary"
            title="Submit"
            style={`w-[150px] ${step === 3 ? "" : "hidden"}`}
            onclick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
