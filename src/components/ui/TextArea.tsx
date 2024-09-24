// src/components/TextArea.tsx
import React from 'react';

interface TextAreaProps {
  label?: string;
  name: string;
  value: string;
  placeHolder?:string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange ,placeHolder}) => {
  return (
    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        className="border-borderGray  shadow appearance-none border rounded-[9px] w-full py-2 px-3 text-gray-600 text-sm p-3 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        required
        rows={5}
      />
    </div>
  );
};

export default TextArea;
