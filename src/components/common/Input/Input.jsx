import React from 'react';

export const Input = ({ label, placeholder, value, onChange, type = 'text', required = false, name, className = '' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }} className={className}>
      {label && <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>{label} {required && '*'}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: '1px solid var(--border-light)',
          outline: 'none',
          fontSize: '0.95rem',
          width: '100%',
          backgroundColor: '#FFFFFF',
          transition: 'border-color 0.2s'
        }}
      />
    </div>
  );
};

export default Input;
