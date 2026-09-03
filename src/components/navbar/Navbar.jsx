import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Sprout, Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';

export const Navbar = () => {
  const { scrolled, visible } = useScroll();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Header should be visible if user is at top, scrolling up, or mobile menu is active
  const isNavVisible = visible || mobileMenuOpen;

  return (
    <header style={{
      position: 'fixed',
      top: '0.75rem',
      left: 0,
      zIndex: 1000,
      width: '100%',
      padding: '0 1.5rem',
      boxSizing: 'border-box',
      transform: isNavVisible ? 'translateY(0)' : 'translateY(-140%)',
      opacity: isNavVisible ? 1 : 0,
      pointerEvents: isNavVisible ? 'auto' : 'none',
      transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease'
    }}>
      {/* Floating Translucent Glass Navigation Bar */}
      <nav style={{
        maxWidth: '1360px',
        margin: '0 auto',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '18px',
        border: scrolled ? '1px solid rgba(226, 232, 240, 0.9)' : '1px solid rgba(255, 255, 255, 0.85)',
        boxShadow: scrolled ? '0 12px 36px rgba(0, 0, 0, 0.12)' : '0 8px 30px rgba(0, 0, 0, 0.06)',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        padding: '0.75rem 1.6rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Left: Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #0B6E3C 0%, #22C55E 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(11, 110, 60, 0.25)'
            }}>
              <Sprout size={24} color="#FFFFFF" />
            </div>
            <div>
              <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0B6E3C', letterSpacing: '-0.025em', display: 'block', lineHeight: 1 }}>
                AGRIVERA
              </span>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CROP SOLUTIONS PVT. LTD.
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.8rem', fontWeight: 600, fontSize: '0.925rem' }}>
            <Link to="/" style={{
              color: isActive('/') ? '#0B6E3C' : '#1E293B',
              fontWeight: isActive('/') ? 700 : 600,
              position: 'relative',
              paddingBottom: '0.2rem',
              textDecoration: 'none'
            }}>
              Home
              {isActive('/') && (
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  backgroundColor: '#0B6E3C',
                  borderRadius: '2px'
                }} />
              )}
            </Link>

            <Link to="/about" style={{ color: isActive('/about') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: isActive('/products') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
                Products <ChevronDown size={14} />
              </Link>
              {productsDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '220px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                  padding: '0.75rem 0',
                  border: '1px solid #E2E8F0',
                  animation: 'fadeIn 0.2s ease',
                  zIndex: 10
                }}>
                  <Link to="/products?category=seeds" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Seeds</Link>
                  <Link to="/products?category=nutrition" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Crop Nutrition</Link>
                  <Link to="/products?category=protection" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Crop Protection</Link>
                  <Link to="/products?category=bio" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Bio Solutions</Link>
                </div>
              )}
            </div>

            <Link to="/crop-solutions" style={{ color: isActive('/crop-solutions') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
              Crop Solutions
            </Link>
            <Link to="/innovation" style={{ color: isActive('/innovation') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
              Innovation
            </Link>
            <Link to="/dealer-network" style={{ color: isActive('/dealer-network') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
              Dealer Network
            </Link>

            {/* Resources Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <Link to="/blogs" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: isActive('/blogs') ? '#0B6E3C' : '#1E293B', textDecoration: 'none' }}>
                Resources <ChevronDown size={14} />
              </Link>
              {resourcesDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '200px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.12)',
                  padding: '0.75rem 0',
                  border: '1px solid #E2E8F0',
                  animation: 'fadeIn 0.2s ease',
                  zIndex: 10
                }}>
                  <Link to="/blogs" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Agronomy Blogs</Link>
                  <Link to="/gallery" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>Field Gallery</Link>
                  <Link to="/faq" style={{ display: 'block', padding: '0.5rem 1.25rem', color: '#1E293B', textDecoration: 'none' }}>FAQ & Guides</Link>
                </div>
              )}
            </div>
          </div>

          {/* Right: Rounded Call Button with Phone Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="tel:+919876543210"
              style={{
                backgroundColor: '#0B6E3C',
                color: '#FFFFFF',
                padding: '0.65rem 1.5rem',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                boxShadow: '0 4px 16px rgba(11, 110, 60, 0.28)',
                transition: 'all 0.25s ease',
                textDecoration: 'none'
              }}
              className="hide-mobile"
            >
              <div style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Phone size={13} color="#FFFFFF" />
              </div>
              <span>+91 98765 43210</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button className="hide-desktop" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              {mobileMenuOpen ? <X size={26} color="#0B6E3C" /> : <Menu size={26} color="#0B6E3C" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            marginTop: '0.75rem',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            fontWeight: 700,
            animation: 'fadeIn 0.2s ease',
            boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
          }}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>About Us</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Products</Link>
            <Link to="/crop-solutions" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Crop Solutions</Link>
            <Link to="/innovation" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Innovation</Link>
            <Link to="/dealer-network" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Dealer Network</Link>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} style={{ textDecoration: 'none', color: '#1E293B' }}>Resources</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
