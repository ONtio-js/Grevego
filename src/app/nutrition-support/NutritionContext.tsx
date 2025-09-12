import React, { createContext } from "react";

export interface NutritionContextType {
  data: {
    name: string;
    gender: string;
    age: string;
    location: string;
    allergies: string;
    medicalConditions: string;
    medications: string;
    visited_nutritionist: string;
    health_goals: string;
    commitment: string;
    challenge: string;
    regular_check_in: string;
    regular_check_in_other: string;
    dietary_restrictions: string;
    food_preference: string;
    support_type: string;
    support_type_other: string;
    other_info: string;
    number_of_meals: string;
    snack_frequency: string;
    meal_type: string;
    nutrition_goals: string[];
    lifestyle: string;
    water_frequency: string;
  };
  setData: React.Dispatch<React.SetStateAction<NutritionContextType["data"]>>;
}

export const nutritionContext = createContext<NutritionContextType | null>(
  null,
);
