import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sprout,
  Phone,
  Mail,
  MapPin,
  Send,
  Link2,
  Leaf,
  FileText,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
  ArrowUp
} from 'lucide-react';
import { contactService } from '../../services/contactService';
import { triggerSuccessConfetti } from '../../utils/animations';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    await contactService.subscribeNewsletter(newsletterEmail);
    setSubscribed(true);
    triggerSuccessConfetti();
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#021D0E', color: '#E2E8F0', paddingTop: '3.5rem', paddingBottom: '1.8rem', position: 'relative' }}>
      <div className="container">
        {/* Main 5-Column Grid matching Image 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.95fr 1.05fr 0.95fr 1.3fr',
          gap: '1.8rem',
          paddingBottom: '2.8rem'
        }}>
          {/* Column 1: Brand Info & Socials */}
          <div style={{ paddingRight: '0.5rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem', textDecoration: 'none' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: '#16A34A',
                backgroundImage: 'linear-gradient(135deg, #16A34A 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(22, 163, 74, 0.4)'
              }}>
                <Sprout size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, display: 'block', letterSpacing: '0.02em' }}>
                  AGRIVERA
                </span>
                <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#22C55E', letterSpacing: '0.08em', marginTop: '0.2rem', display: 'block' }}>
                  CROP SOLUTIONS PVT. LTD.
                </span>
              </div>
            </Link>

            <p style={{ fontSize: '0.865rem', color: '#94A3B8', marginBottom: '1.2rem', lineHeight: 1.55 }}>
              A step ahead in delivering innovative crop solutions for sustainable agriculture and better tomorrow.
            </p>

            <span style={{ display: 'block', width: '40px', height: '2px', backgroundColor: '#16A34A', marginBottom: '1.4rem', borderRadius: '1px' }} />

            {/* 4 Social Icon Buttons */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Link2 size={16} color="#22C55E" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, margin: 0, letterSpacing: '0.05em' }}>
                QUICK LINKS
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.865rem' }}>
              <li>
                <Link to="/" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> Products
                </Link>
              </li>
              <li>
                <Link to="/crop-solutions" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> Crop Solutions
                </Link>
              </li>
              <li>
                <Link to="/innovation" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> Innovation
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}>
                  <ChevronRight size={14} color="#22C55E" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Leaf size={16} color="#22C55E" fill="#22C55E" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, margin: 0, letterSpacing: '0.05em' }}>
                PRODUCTS
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.865rem' }}>
              <li>
                <Link to="/products?category=seeds" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Seeds
                </Link>
              </li>
              <li>
                <Link to="/products?category=nutrition" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Crop Nutrition
                </Link>
              </li>
              <li>
                <Link to="/products?category=protection" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Crop Protection
                </Link>
              </li>
              <li>
                <Link to="/products?category=bio" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Bio Solutions
                </Link>
              </li>
              <li>
                <Link to="/products?category=pgr" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Plant Growth Regulators
                </Link>
              </li>
              <li>
                <Link to="/products?category=micronutrients" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Micronutrients
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FileText size={16} color="#22C55E" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, margin: 0, letterSpacing: '0.05em' }}>
                RESOURCES
              </h4>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.865rem' }}>
              <li>
                <Link to="/knowledge-center" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Knowledge Center
                </Link>
              </li>
              <li>
                <Link to="/blogs" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Videos
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> Downloads
                </Link>
              </li>
              <li>
                <Link to="/faq" style={{ color: '#CBD5E1', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  <ChevronRight size={14} color="#22C55E" /> FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Us & Newsletter */}
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.08)', paddingLeft: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <PhoneCall size={16} color="#22C55E" />
              </div>
              <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, margin: 0, letterSpacing: '0.05em' }}>
                CONTACT US
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '1.4rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Plot No. 123, Agri Business Park, Hyderabad, Telangana - 500 030</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Phone size={16} color="#22C55E" style={{ flexShrink: 0 }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                <Mail size={16} color="#22C55E" style={{ flexShrink: 0 }} />
                <span>info@agrivera.com</span>
              </div>
            </div>

            {/* Newsletter Divider */}
            <span style={{ display: 'block', width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.08)', margin: '1rem 0 1.1rem 0' }} />

            <h5 style={{ color: '#FFFFFF', fontSize: '0.9rem', fontWeight: 800, margin: '0 0 0.3rem 0', letterSpacing: '0.05em' }}>
              NEWSLETTER
            </h5>
            <p style={{ fontSize: '0.78rem', color: '#94A3B8', margin: '0 0 0.8rem 0' }}>
              Get the latest updates, crop tips and product news.
            </p>

            {subscribed ? (
              <p style={{ color: '#22C55E', fontSize: '0.85rem', fontWeight: 700, margin: 0 }}>✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', position: 'relative' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  style={{
                    padding: '0.65rem 1.1rem',
                    borderRadius: '25px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#FFFFFF',
                    outline: 'none',
                    fontSize: '0.84rem',
                    width: '100%'
                  }}
                />
                <button type="submit" style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  backgroundColor: '#22C55E',
                  border: 'none',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)'
                }}>
                  <Send size={16} color="#FFFFFF" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar separated by top border line */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.4rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.825rem',
          color: '#94A3B8'
        }}>
          {/* Left Item: Shield Icon Badge + Copyright Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ShieldCheck size={16} color="#22C55E" />
            </div>
            <span>
              <span style={{ color: '#86EFAC', fontWeight: 700 }}>© 2026</span> Agrivera Crop Solutions Pvt. Ltd. All Rights Reserved.
            </span>
          </div>

          {/* Center Item: Slogan */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, color: '#FFFFFF' }}>
            <Leaf size={16} color="#22C55E" fill="#22C55E" /> Grow Better. <span style={{ color: '#86EFAC' }}>Live Better.</span>
          </div>

          {/* Right Items: Links & Back to Top Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <Link to="/faq" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Privacy Policy</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <Link to="/faq" style={{ color: '#CBD5E1', textDecoration: 'none' }}>Terms & Conditions</Link>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>|</span>
            <button
              onClick={scrollToTop}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#CBD5E1',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.825rem',
                fontWeight: 600,
                padding: 0
              }}
            >
              <div style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ArrowUp size={15} color="#86EFAC" />
              </div>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
