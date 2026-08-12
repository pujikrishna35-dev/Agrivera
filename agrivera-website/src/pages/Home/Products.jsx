import React from 'react';
import { PRODUCT_CATEGORIES } from '../../data/products';
import { Link } from 'react-router-dom';
import { Sprout, ShieldCheck, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export const Products = () => {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'seeds':
        return <Sprout size={20} color="#15803D" strokeWidth={2.2} />;
      case 'nutrition':
        return <Sprout size={20} color="#15803D" strokeWidth={2.2} />;
      case 'protection':
        return <ShieldCheck size={20} color="#15803D" strokeWidth={2.2} />;
      case 'bio':
        return <Leaf size={20} color="#15803D" strokeWidth={2.2} />;
      case 'pgr':
        return <Sprout size={20} color="#15803D" strokeWidth={2.2} />;
      case 'micronutrients':
        return <Sparkles size={20} color="#15803D" strokeWidth={2.2} />;
      default:
        return <Leaf size={20} color="#15803D" strokeWidth={2.2} />;
    }
  };

  return (
    <section style={{ backgroundColor: '#FFFFFF', padding: '4rem 0 1.5rem 0' }}>
      <div className="container">
        {/* Header Section matching Image 1 */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              SOLUTIONS PORTFOLIO
            </span>
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{
            color: '#062E1B',
            fontSize: '2.5rem',
            fontWeight: 800,
            margin: '0.3rem 0 0 0',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            Our Product Categories <Leaf size={28} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)' }} />
          </h2>

          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.5rem', fontWeight: 500 }}>
            Wide range of solutions for every stage of crop growth
          </p>
        </div>

        {/* 6 Category Cards Grid matching Image 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1.25rem'
        }}>
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'block'
              }}
            >
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '0.85rem 0.85rem 1.25rem 0.85rem',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 35px rgba(21, 128, 61, 0.12)';
                  e.currentTarget.style.borderColor = '#DCFCE7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '#F1F5F9';
                }}
              >
                <div style={{ width: '100%' }}>
                  {/* Top Image */}
                  <img
                    src={category.image}
                    alt={category.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/category_seeds.png';
                    }}
                    style={{
                      width: '100%',
                      height: '145px',
                      objectFit: 'cover',
                      borderRadius: '16px'
                    }}
                  />

                  {/* Circular Light Green Icon Badge directly below image */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '-22px auto 0.75rem auto',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {getCategoryIcon(category.id)}
                  </div>

                  {/* Title */}
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    margin: '0.2rem 0 0.4rem 0',
                    color: '#0F172A',
                    lineHeight: 1.25
                  }}>
                    {category.name}
                  </h4>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.76rem',
                    color: '#64748B',
                    lineHeight: 1.35,
                    margin: '0 0 1.2rem 0',
                    minHeight: '44px'
                  }}>
                    {category.description}
                  </p>
                </div>

                {/* Explore -> link matching Image 1 */}
                <div style={{
                  color: '#15803D',
                  fontWeight: 700,
                  fontSize: '0.825rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}>
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Leaf Accent Flourish matching Image 1 */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          marginTop: '1.8rem'
        }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#15803D' }} />
          <span style={{ width: '50px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          <Leaf size={18} color="#15803D" fill="#15803D" />
          <span style={{ width: '50px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#15803D' }} />
        </div>
      </div>
    </section>
  );
};

export default Products;
