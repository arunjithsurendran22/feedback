import React, { createContext, useContext, useState } from "react";

interface FormData {
  name: string;
  contact: string;
  email: string;
  comments: string;
  rating: string;
}

const FormContext = createContext<{
  formDataContext: FormData[];
  setFormDataContext: React.Dispatch<React.SetStateAction<FormData[]>>;
} | null>(null);

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

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
