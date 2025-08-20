import React, { createContext } from "react";

export interface NutritionContextType {
  data: {
    name: string;
    gender: string;
    age: string;
    occupation: string;
    height: string;
    weight: string;
    allergies: string;
    medicalConditions: string;
    medications: string;
    visited_nutritionist: string;
    health_goals: string;
    other_info: string;
  };
  setData: React.Dispatch<React.SetStateAction<NutritionContextType["data"]>>;
}

export const nutritionContext = createContext<NutritionContextType | null>(
  null,
);
