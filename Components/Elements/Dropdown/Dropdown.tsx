import React, { useState, ChangeEvent } from 'react';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue = '',
  onChange,
  placeholder,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <select
      value={selectedValue}
      onChange={handleSelectChange}
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
  );
};

export default Dropdown;


