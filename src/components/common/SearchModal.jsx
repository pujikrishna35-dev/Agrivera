import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/products';
import { CROPS_DATA } from '../../data/crops';
import { Link } from 'react-router-dom';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedProducts = query ? PRODUCTS_DATA.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())) : [];
  const matchedCrops = query ? CROPS_DATA.filter(c => c.name.toLowerCase().includes(query.toLowerCase())) : [];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '5rem',
      paddingLeft: '1rem',
      paddingRight: '1rem'
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        maxWidth: '650px',
        width: '100%',
        height: 'fit-content',
        maxHeight: '80vh',
        padding: '2rem',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>Search AGRIVERA Solutions</h3>
          <button onClick={onClose} style={{ cursor: 'pointer', padding: '0.3rem' }}><X size={22} /></button>
        </div>

        <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
          <input
            type="text"
            autoFocus
            placeholder="Search products, crop advisory, diseases..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.85rem 1rem 0.85rem 2.8rem',
              borderRadius: '30px',
              border: '2px solid var(--color-primary)',
              outline: 'none',
              fontSize: '1rem'
            }}
          />
          <Search size={20} color="var(--color-primary)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
        </div>

        {query && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {matchedProducts.length > 0 && (
              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Products</h5>
                {matchedProducts.map(p => (
                  <Link key={p.id} to={`/products/${p.id}`} onClick={onClose} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span>{p.name}</span>
                    <ArrowRight size={14} color="var(--color-primary)" />
                  </Link>
                ))}
              </div>
            )}

            {matchedCrops.length > 0 && (
              <div>
                <h5 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Crop Solutions</h5>
                {matchedCrops.map(c => (
                  <Link key={c.id} to={`/crop-solutions?crop=${c.id}`} onClick={onClose} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)' }}>
                    <span>{c.icon} {c.name} Advisory</span>
                    <ArrowRight size={14} color="var(--color-primary)" />
                  </Link>
                ))}
              </div>
            )}

            {matchedProducts.length === 0 && matchedCrops.length === 0 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '2rem 0' }}>No matching products or crop advisories found for "{query}".</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
