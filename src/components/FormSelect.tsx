"use client";

import { useState } from "react";

interface FormSelectOption {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  label?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: FormSelectOption[];
  placeholder?: string;
  variant?: "default" | "premium" | "minimal";
  error?: string;
  success?: string;
  className?: string;
}

export default function FormSelect({
  name,
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder,
  variant = "default",
  error,
  success,
  className = "",
}: FormSelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getSelectClass = () => {
    const baseClass = "w-full appearance-none cursor-pointer";
    const variantClass = {
      default: "form-input",
      premium: "form-input-premium",
      minimal: "form-input-minimal",
    }[variant];
    
    const stateClass = error ? "form-input-error" : success ? "form-input-success" : "";
    
    return `${baseClass} ${variantClass} ${stateClass} ${className}`.trim();
  };

  const getLabelClass = () => {
    const baseClass = "form-label";
    const requiredClass = required ? "form-label-required" : "";
    const focusedClass = isFocused ? "form-label-focused" : "";
    
    return `${baseClass} ${requiredClass} ${focusedClass}`.trim();
  };

  return (
    <div className={`form-group ${isFocused ? "form-group-focused" : ""}`}>
      {label && (
        <label htmlFor={name} className={getLabelClass()}>
          {label}
        </label>
      )}
      
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={getSelectClass()}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Custom dropdown arrow */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-green/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      
      {error && (
        <div className="form-error">
          <span>⚠</span>
          <span>{error}</span>
        </div>
      )}
      
      {success && (
        <div className="form-success">
          <span>✓</span>
          <span>{success}</span>
        </div>
      )}
    </div>
  );
}
