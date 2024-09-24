// FormContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the shape of the form data
interface FormData {
  name: string;
  contact: string;
  email: string;
  comments: string;
  rating: string;
}

// Create the context
const FormContext = createContext<{
  formDataContext: FormData[];
  setFormDataContext: React.Dispatch<React.SetStateAction<FormData[]>>;
} | null>(null);

// Create a provider component
export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formDataContext, setFormDataContext] = useState<FormData[]>([]);

  return (
    <FormContext.Provider value={{ formDataContext, setFormDataContext }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the FormContext
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
