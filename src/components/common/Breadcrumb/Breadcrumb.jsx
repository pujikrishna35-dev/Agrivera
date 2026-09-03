import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
      <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
      {items.map((item, index) => {
        const routePath = item.link || item.path;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={14} />
            {routePath ? (
              <Link to={routePath} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{item.label}</Link>
            ) : (
              <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{item.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
