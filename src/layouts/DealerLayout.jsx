import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ShoppingCart, FileText, ArrowLeft } from 'lucide-react';

export const DealerLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FBF8' }}>
      <header style={{ backgroundColor: '#0F4C25', color: '#FFF', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <Store size={26} color="#10B981" />
          <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>AGRIVERA DEALER PORTAL</span>
        </div>
        <Link to="/" style={{ color: '#A7F3D0', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
          <ArrowLeft size={16} /> Back to Website
        </Link>
      </header>
      <main style={{ padding: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </main>
    </div>
  );
};

export default DealerLayout;
