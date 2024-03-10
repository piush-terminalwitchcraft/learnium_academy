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
  style?: React.CSSProperties | undefined;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultValue = '',
  onChange,
  placeholder,
  style
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
      style={
        {padding: '8px',
        fontSize: '1.4rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '90%',
        marginLeft: '5%',
        backgroundColor: '#fff',
        color: '#333', ...style}
      }
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


