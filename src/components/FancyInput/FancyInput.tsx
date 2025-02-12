import React, { useState } from "react";
import "./FancyInput.css";

interface FancyInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const FancyInput: React.FC<FancyInputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange(event);
  };

  return (
    <>
      <input
        type="text"
        className="fancy-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder || "Fancy Input"}
      />
      {inputValue.toLowerCase().includes("error") && (
        <div className="callout">Error word detected!</div>
      )}
    </>
  );
};

export default FancyInput;
