// src/components/InputBox.tsx
import React from "react";

interface InputBoxProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-lightBlue text-[14px] font-[700] mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="border-[1px]  border-borderGray   rounded-[9px] w-full py-[10px] px-[13px] shadow-md leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputBox;
