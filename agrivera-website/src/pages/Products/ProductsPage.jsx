import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from '../../data/products';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Search, Filter } from 'lucide-react';
import { formatCurrency } from '../../utils/formatter';
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '../../redux/slices/cartSlice';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const filteredProducts = PRODUCTS_DATA.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <MainLayout>
      <SeoMeta title="Product Catalog" description="Browse Agrivera seeds, crop nutrition, insecticides, bio-fertilizers and micronutrients." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6.5rem 0 3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Products' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Complete Product Catalog</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            High performance crop solutions tested and certified for maximum yield.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Category Tabs & Search Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '0.65rem', overflowX: 'auto', padding: '0.35rem 0.35rem 0.75rem 0.35rem', flex: 1, minWidth: 0, scrollbarWidth: 'none' }}>
              <button
                onClick={() => setSearchParams({ category: 'all' }, { preventScrollReset: true })}
                style={{
                  padding: '0.55rem 1.35rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '30px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeCategory === 'all' ? '#0F5B31' : '#FFFFFF',
                  color: activeCategory === 'all' ? '#FFFFFF' : '#0F5B31',
                  border: activeCategory === 'all' ? '1.5px solid #0F5B31' : '1.5px solid #16A34A',
                  boxShadow: activeCategory === 'all' ? '0 4px 14px rgba(15, 91, 49, 0.25)' : 'none'
                }}
              >
                All Products
              </button>
              {PRODUCT_CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSearchParams({ category: cat.id }, { preventScrollReset: true })}
                    style={{
                      padding: '0.55rem 1.35rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      borderRadius: '30px',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      backgroundColor: isActive ? '#0F5B31' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#0F5B31',
                      border: isActive ? '1.5px solid #0F5B31' : '1.5px solid #16A34A',
                      boxShadow: isActive ? '0 4px 14px rgba(15, 91, 49, 0.25)' : 'none'
                    }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.4rem',
                  borderRadius: '30px',
                  border: '1px solid var(--border-light)',
                  outline: 'none'
                }}
              />
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="card-hover" style={{ backgroundColor: '#FFF', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = '/images/category_seeds.png'; }}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }}
                  />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0.3rem 0', color: 'var(--text-main)' }}>{product.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>
                  
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, backgroundColor: '#E8F5E9', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1.2rem' }}>
                    Dosage: {product.dosage}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>⭐ {product.rating} ({product.reviewsCount})</span>
                  </div>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <Link to={`/products/${product.id}`} className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                      Details
                    </Link>
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                      <ShoppingBag size={15} /> Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductsPage;
