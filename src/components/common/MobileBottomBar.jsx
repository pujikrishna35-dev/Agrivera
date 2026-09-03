import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Phone, MessageSquare, Search } from 'lucide-react';

export const MobileBottomBar = ({ onOpenSearch }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="hide-desktop" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid var(--border-light)',
      boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
      zIndex: 999,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '0.5rem 0'
    }}>
      <Link to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: isActive('/') ? 'var(--color-primary)' : 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600 }}>
        <Home size={20} />
        <span>Home</span>
      </Link>

      <Link to="/products" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: isActive('/products') ? 'var(--color-primary)' : 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600 }}>
        <Package size={20} />
        <span>Products</span>
      </Link>

      <button onClick={onOpenSearch} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.7rem', fontWeight: 600 }}>
        <Search size={20} />
        <span>Search</span>
      </button>

      <a href="tel:+919876543210" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--color-primary)', fontSize: '0.7rem', fontWeight: 700 }}>
        <Phone size={20} />
        <span>Call</span>
      </a>

      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#25D366', fontSize: '0.7rem', fontWeight: 700 }}>
        <MessageSquare size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default MobileBottomBar;
