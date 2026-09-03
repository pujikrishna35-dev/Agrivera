import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { PRODUCTS_DATA } from '../../data/products';
import { ShoppingBag, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';
import { formatCurrency } from '../../utils/formatter';
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '../../redux/slices/cartSlice';

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = PRODUCTS_DATA.find(p => p.id === id) || PRODUCTS_DATA[0];

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <MainLayout>
      <SeoMeta title={product.name} description={product.description} />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6.5rem 0 2.5rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Products', link: '/products' }, { label: product.name }]} />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', borderRadius: '20px', boxShadow: 'var(--shadow-md)', maxHeight: '420px', objectFit: 'cover' }}
              />
            </div>

            <div>
              <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0A2312', marginBottom: '0.5rem' }}>
                {product.name}
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1.2rem' }}>
                {product.tagline}
              </p>


              <p style={{ color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {product.description}
              </p>

              <div style={{ backgroundColor: '#F8FBF8', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-light)', marginBottom: '1.8rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>Product Specifications:</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                  <li><strong>Active Composition:</strong> {product.composition}</li>
                  <li><strong>Recommended Dosage:</strong> {product.dosage}</li>
                  <li><strong>Target Crops:</strong> {product.targetCrops?.join(', ')}</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={handleAddToCart} className="btn btn-primary" style={{ padding: '0.9rem 2rem' }}>
                  <ShoppingBag size={18} /> Add to Cart
                </button>
                <Link to="/contact" className="btn btn-secondary" style={{ padding: '0.9rem 1.5rem' }}>
                  Ask Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
