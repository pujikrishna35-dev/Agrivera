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
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
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
            <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              <button
                onClick={() => setSearchParams({ category: 'all' })}
                className={`btn ${activeCategory === 'all' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              >
                All Products
              </button>
              {PRODUCT_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSearchParams({ category: cat.id })}
                  className={`btn ${activeCategory === cat.id ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                >
                  {cat.name}
                </button>
              ))}
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
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '1rem' }} />
                  <span className="badge badge-primary" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{product.badge}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0.3rem 0', color: 'var(--text-main)' }}>{product.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>
                  
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600, backgroundColor: '#E8F5E9', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1.2rem' }}>
                    Dosage: {product.dosage}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)' }}>{formatCurrency(product.price)}</span>
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
