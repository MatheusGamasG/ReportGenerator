import { createContext, useContext, ReactNode, useState } from 'react';
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister, useForm } from 'react-hook-form';
import React = require('react');

interface FormData {
    km: string;
    line: string;
    city: string;
    state: string;
    length: number;
    height: number;
    width: number;
    hold: string;
    gauge: string;
    fastening: string;
    [key: string]: string | number;
}

type ContextType = {
  register: UseFormRegister<FormData>;
  formData: FormData;
  handleSubmit: UseFormHandleSubmit<FormData>;
}

const FormContext = createContext<ContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {


  const [replacements, setReplacements] = useState<FormData>();

  const { register, handleSubmit, getValues } = useForm<FormData>();

  const contextValue: ContextType = {
    register: register,
    formData: getValues(),
    handleSubmit,
  };


  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};


export const useReplacementsForm = () => {
  const context = useContext(FormContext);
  if(context === undefined) {
      throw new Error("useForm used outside provider");
  }
  return context;
}