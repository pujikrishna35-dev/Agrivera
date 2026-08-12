import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  icon: Icon,
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const variantClass = variant === 'secondary' ? 'btn-secondary' : variant === 'gold' ? 'btn-gold' : 'btn-primary';
  const sizeClass = size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

export default Button;
