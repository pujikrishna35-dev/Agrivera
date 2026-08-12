import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
      <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Home</Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} />
          {item.link ? (
            <Link to={item.link} style={{ color: 'var(--color-primary)' }}>{item.label}</Link>
          ) : (
            <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
