import React from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  error = false,
  className = '',
  ...props
}) => {
  const base =
    'w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-transparent rounded-lg ' +
    'focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ' +
    'placeholder-gray-400 text-white';

  return (
    <input
      className={`${base} ${error ? 'border-red-500' : ''} ${className}`}
      {...props}
    />
  );
};

export default Input;