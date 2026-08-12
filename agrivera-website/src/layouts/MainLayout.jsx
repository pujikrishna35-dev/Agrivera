import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import MobileBottomBar from '../components/common/MobileBottomBar';
import SearchModal from '../components/common/SearchModal';
import { Phone, Mail, MessageSquare, ShoppingBag, X } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, removeFromCart } from '../redux/slices/cartSlice';
import { formatCurrency } from '../utils/formatter';

import FloatingContactWidget from '../components/common/FloatingContactWidget';

export const MainLayout = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Modern Floating Contact Widget (Bottom Right Corner) */}
      <FloatingContactWidget />

      {/* Slide-out Shopping Cart Drawer */}
      {cart.isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '420px',
            backgroundColor: '#FFFFFF',
            height: '100%',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.15)'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                  <ShoppingBag size={22} /> Order Cart ({cart.items.length})
                </h3>
                <button onClick={() => dispatch(toggleCart())} style={{ padding: '0.3rem', cursor: 'pointer' }}>
                  <X size={22} />
                </button>
              </div>

              {cart.items.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '3rem' }}>Your order cart is empty.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
                  {cart.items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderBottom: '1px solid var(--border-light)', paddingBottom: '0.8rem' }}>
                      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '6px' }} />
                      <div style={{ flex: 1 }}>
                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>{item.name}</h5>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.quantity} x {formatCurrency(item.price)}</p>
                      </div>
                      <button onClick={() => dispatch(removeFromCart(item.id))} style={{ color: '#EF4444', cursor: 'pointer' }}>
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.items.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                  <span>Total Amount:</span>
                  <span style={{ color: 'var(--color-primary)' }}>{formatCurrency(totalAmount)}</span>
                </div>
                <button
                  onClick={() => alert('Order inquiry dispatched to nearest AGRIVERA dealer network!')}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Proceed to Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Global Search Modal Overlay */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Sticky Bottom Navbar */}
      <MobileBottomBar onOpenSearch={() => setIsSearchOpen(true)} />

      <Footer />
    </div>
  );
};

export default MainLayout;
