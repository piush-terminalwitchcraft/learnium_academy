import React, { ReactNode } from 'react';
import './style.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = (props: CardProps) => {
  const { children, className, style } = props;
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;

