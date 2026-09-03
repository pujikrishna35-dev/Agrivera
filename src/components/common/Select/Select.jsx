import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = ({ label, options = [], value, onChange, name, className = '' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }} className={className}>
      {label && <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1F2937' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        <select
          name={name}
          value={value}
          onChange={onChange}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            width: '100%',
            padding: '0.65rem 2.4rem 0.65rem 1.25rem',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            outline: 'none',
            fontSize: '0.9rem',
            fontWeight: 600,
            color: '#1F2937',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
            transition: 'all 0.2s ease'
          }}
        >
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} color="#4B5563" style={{ position: 'absolute', right: '14px', pointerEvents: 'none' }} />
      </div>
    </div>
  );
};

export default Select;
