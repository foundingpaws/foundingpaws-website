"use client";

import { useState } from "react";

interface FormTextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  variant?: "default" | "premium" | "minimal";
  error?: string;
  success?: string;
  rows?: number;
  className?: string;
}

export default function FormTextarea({
  name,
  label,
  placeholder,
  required = false,
  value,
  onChange,
  variant = "default",
  error,
  success,
  rows = 4,
  className = "",
}: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getTextareaClass = () => {
    const baseClass = "w-full resize-none";
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
      
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        className={getTextareaClass()}
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
