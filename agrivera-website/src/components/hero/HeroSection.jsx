import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Sprout,
  Leaf,
  Headphones,
  Users,
  Handshake,
  Award,
  Trophy
} from 'lucide-react';

export const HeroSection = () => {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#F8FAF8' }}>
      {/* 1920x1080 Enterprise Canvas Hero Section */}
      <div style={{
        position: 'relative',
        minHeight: '680px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: "url('/images/hero-banner.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        paddingTop: '90px',
        paddingBottom: '120px'
      }}>


        {/* Animated Peeking Green Leaves Overlay */}
        <img
          src="/images/leaves_peeking.png"
          alt="Agrivera Green Leaves"
          className="peeking-leaf-animated"
        />

        {/* Centered Hero Content Section with Radial Text Shade */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2.2rem 2rem',
            borderRadius: '30px',
            background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0) 100%)'
          }}>
            {/* Top Tag Line */}
            <div style={{
              color: '#0B6E3C',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.4rem'
            }}>
              <span>SCIENCE</span> • <span>INNOVATION</span> • <span>SUSTAINABILITY</span>
            </div>

            {/* Large Bold Heading */}
            <h1 style={{
              fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
              fontWeight: 800,
              color: '#032512',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              margin: 0
            }}>
              Empowering Farmers.<br />
              <span style={{ color: '#008738', position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                Enriching Future.
                <span style={{ position: 'relative', display: 'inline-flex', marginLeft: '0.3rem', marginTop: '-0.6rem' }}>
                  <svg width="42" height="36" viewBox="0 0 40 34" fill="none" style={{ transform: 'rotate(12deg)' }}>
                    <path d="M12 28C12 28 8 16 20 8C20 8 26 20 12 28Z" fill="#76BA1B" />
                    <path d="M12 28C12 28 16 12 28 18C28 18 22 28 12 28Z" fill="#4B9B0E" />
                    <path d="M12 28C14 20 20 12 20 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Paragraph Description */}
            <p style={{
              fontSize: '1.15rem',
              color: '#0F172A',
              lineHeight: 1.55,
              fontWeight: 600,
              margin: '1.4rem auto 0 auto',
              maxWidth: '640px'
            }}>
              Advanced crop solutions, innovative technologies and dedicated support for higher yields and sustainable farming.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '2.5rem'
            }}>
              <Link
                to="/products"
                style={{
                  backgroundColor: '#006837',
                  color: '#FFFFFF',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '35px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 8px 24px rgba(0, 104, 55, 0.4)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                  border: '1.8px solid #006837'
                }}
              >
                <Sprout size={20} color="#FFFFFF" strokeWidth={2.4} />
                Explore Products
                <ArrowRight size={18} color="#FFFFFF" strokeWidth={2.5} style={{ marginLeft: '0.2rem' }} />
              </Link>

              <Link
                to="/crop-solutions"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#006837',
                  border: '1.8px solid #006837',
                  padding: '0.9rem 2.2rem',
                  borderRadius: '35px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
              >
                <Sprout size={20} color="#006837" strokeWidth={2.4} />
                Find Crop Solutions
                <ArrowRight size={18} color="#006837" strokeWidth={2.5} style={{ marginLeft: '0.2rem' }} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Dark Green Feature Bar (5 Corporate Pillars) */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        marginTop: '-3rem',
        paddingBottom: '1.8rem'
      }}>
        <div className="container">
          <div style={{
            backgroundColor: '#065A2C',
            borderRadius: '24px',
            padding: '1.6rem 2.2rem',
            color: '#FFFFFF',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '1rem',
            alignItems: 'center'
          }}>
            {/* Feature 1: Quality Products */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0A7A3B 0%, #044421 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShieldCheck size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  Quality Products
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.2rem 0 0 0', lineHeight: 1.25 }}>
                  Assured Quality for Best Results
                </p>
              </div>
            </div>

            {/* Feature 2: Research Driven */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0A7A3B 0%, #044421 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FlaskConical size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  Research Driven
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.2rem 0 0 0', lineHeight: 1.25 }}>
                  Backed by Science and Innovation
                </p>
              </div>
            </div>

            {/* Feature 3: Farmer First */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0A7A3B 0%, #044421 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Sprout size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  Farmer First
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.2rem 0 0 0', lineHeight: 1.25 }}>
                  Solutions Tailored for Every Farmer
                </p>
              </div>
            </div>

            {/* Feature 4: Sustainable Future */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0A7A3B 0%, #044421 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Leaf size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  Sustainable Future
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.2rem 0 0 0', lineHeight: 1.25 }}>
                  Care for Soil, Crop and Environment
                </p>
              </div>
            </div>

            {/* Feature 5: Expert Support */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.2rem' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(145deg, #0A7A3B 0%, #044421 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Headphones size={26} color="#FFFFFF" strokeWidth={2.2} />
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap' }}>
                  Expert Support
                </h4>
                <p style={{ fontSize: '0.76rem', color: 'rgba(255, 255, 255, 0.85)', margin: '0.2rem 0 0 0', lineHeight: 1.25 }}>
                  24×7 Technical Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
