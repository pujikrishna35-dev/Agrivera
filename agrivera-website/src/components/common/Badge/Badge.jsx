import React from 'react';

export const Badge = ({ children, variant = 'primary', className = '' }) => {
  const badgeClass = variant === 'gold' ? 'badge-gold' : 'badge-primary';
  return (
    <span className={`badge ${badgeClass} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
