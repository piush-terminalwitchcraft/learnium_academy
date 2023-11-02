import React, { ReactNode, ChangeEvent } from 'react';
import './style.css';

interface InputProps {
    type: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Input = (props: InputProps) => {
    const { type, value, onChange, placeholder, className, style } = props;

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`input ${className}`}
            style={style}
        />
    );
};

export default Input;

