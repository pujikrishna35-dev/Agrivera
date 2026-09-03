import React from 'react';

export const Card = ({ children, className = '', hover = true, style }) => {
  return (
    <div className={`${hover ? 'card-hover' : ''} ${className}`} style={{ padding: '1.5rem', ...style }}>
      {children}
    </div>
  );
};

export default Card;
