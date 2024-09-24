// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';  // Button types
  disabled?: boolean;
  className?: string;  // Optional className for custom styles
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      className={`bg-lightGreen  text-white font-bold w-[350px]  h-[45px] rounded focus:outline-none focus:shadow-outline ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
