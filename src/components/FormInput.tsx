"use client";

import { useState } from "react";

interface FormInputProps {
  type?: "text" | "email" | "password" | "tel" | "url";
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: "default" | "premium" | "minimal";
  error?: string;
  success?: string;
  className?: string;
}

export default function FormInput({
  type = "text",
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  variant = "default",
  error,
  success,
  className = "",
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getInputClass = () => {
    const baseClass = "w-full";
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
      
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={getInputClass()}
      />
      
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
