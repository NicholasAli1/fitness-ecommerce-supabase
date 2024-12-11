"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FitnessPlanForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: "",
    weight: "",
    height: "",
    fitness_level: 1,
    goals: [],
    available_equipment: [],
    medical_conditions: [],
    weekly_availability: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/fitness-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to generate plan");

      const plan = await response.json();
      router.push(`/fitness-plan/${plan.id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="max-w-2xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">
          Create Your Personalized Fitness Plan
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields following the style from About page */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add form fields here */}
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
          >
            Generate My Fitness Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default FitnessPlanForm;
