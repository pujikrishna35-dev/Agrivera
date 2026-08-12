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
        {/* Cinematic Volumetric Sunrise Glow */}
        <div className="hero-sunrise-glow" />

        {/* Subtle Atmospheric Glowing Sunlight Particles */}
        <div className="hero-particle" style={{ top: '25%', left: '50%', width: '6px', height: '6px', animationDelay: '0s' }} />
        <div className="hero-particle" style={{ top: '40%', left: '58%', width: '4px', height: '4px', animationDelay: '2s' }} />
        <div className="hero-particle" style={{ top: '18%', left: '65%', width: '8px', height: '8px', animationDelay: '4s' }} />
        <div className="hero-particle" style={{ top: '55%', left: '72%', width: '5px', height: '5px', animationDelay: '1.5s' }} />

        {/* Large Semi-Transparent White AI Tech HUD Rings Centered Behind Farmer */}
        <div className="hero-tech-rings-container" style={{ right: '8%', top: '5%' }}>
          <svg viewBox="0 0 680 680" width="680" height="680" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer Dashed Tech Ring (Rotating Clockwise) */}
            <circle
              cx="340" cy="340" r="310"
              stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2"
              strokeDasharray="12 16 30 16 8 14"
              className="tech-ring-outer-cw"
            />
            <circle
              cx="340" cy="340" r="310"
              stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1"
              className="tech-ring-outer-cw"
            />

            {/* Mid-Outer Tech Node Ring (Rotating Counter-Clockwise) */}
            <g className="tech-ring-mid-ccw">
              <circle cx="340" cy="340" r="235" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.6" strokeDasharray="40 18 8 18 14 14" />
              <circle cx="575" cy="340" r="6" fill="#FFFFFF" />
              <circle cx="105" cy="340" r="5" fill="#FFFFFF" />
              <circle cx="340" cy="105" r="6" fill="#FFFFFF" />
              <circle cx="340" cy="575" r="5" fill="#FFFFFF" />
            </g>

            {/* Middle Dashed Ring */}
            <circle
              cx="340" cy="340" r="165"
              stroke="rgba(255, 255, 255, 0.75)" strokeWidth="1.8"
              strokeDasharray="20 10 6 10"
              className="tech-ring-outer-cw"
            />

            {/* Inner Glowing Pulse Ring */}
            <circle
              cx="340" cy="340" r="105"
              stroke="rgba(255, 255, 255, 0.85)" strokeWidth="2"
              strokeDasharray="16 8 3 8"
              className="tech-ring-inner-pulse"
            />
            <circle
              cx="340" cy="340" r="65"
              fill="rgba(255, 255, 255, 0.12)"
              className="tech-ring-inner-pulse"
            />
          </svg>
        </div>

        {/* Floating Trust Card 1: Trusted by 1 Million+ Farmers */}
        <div style={{
          position: 'absolute',
          left: '52%',
          top: '25%',
          zIndex: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '0.65rem 1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)',
          animation: 'floatLeaf 6s ease-in-out infinite'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            backgroundColor: 'rgba(220, 252, 231, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0B6E3C'
          }}>
            <Users size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', color: '#bdb4b4ff', display: 'block', fontWeight: 600 }}>Trusted by</span>
            <span style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>1 Million+ Farmers</span>
          </div>
        </div>

        {/* Floating Trust Card 2: ISO 9001:2015 Certified */}
        <div style={{
          position: 'absolute',
          left: '48%',
          top: '40%',
          zIndex: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '0.65rem 1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)',
          animation: 'floatLeaf 7s ease-in-out infinite 1.5s'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            backgroundColor: 'rgba(220, 252, 231, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0B6E3C'
          }}>
            <ShieldCheck size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800, display: 'block' }}>ISO 9001:2015</span>
            <span style={{ fontSize: '0.72rem', color: '#bdb4b4ff', fontWeight: 600 }}>Certified Quality</span>
          </div>
        </div>

        {/* Floating Trust Card 3: Award Winning Brand */}
        <div style={{
          position: 'absolute',
          left: '51%',
          top: '55%',
          zIndex: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '0.65rem 1.1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.07)',
          animation: 'floatLeaf 6.5s ease-in-out infinite 0.8s'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            backgroundColor: 'rgba(254, 243, 199, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D97706'
          }}>
            <Trophy size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800, display: 'block' }}>Award Winning</span>
            <span style={{ fontSize: '0.79rem', color: '#ffffffff', fontWeight: 600 }}>Brand 2025</span>
          </div>
        </div>

        {/* Realistic Indian Farmer Cutout Overlay (Scaled to 520px max height) */}
        <img
          src="/images/smart_farmer_cutout.png"
          alt="Agrivera Smart Farmer"
          className="hero-smart-farmer-overlay"
          style={{ maxHeight: '525px' }}
        />

        {/* Integrated Flying Spraying Drone Overlay */}
        <div className="hero-flying-drone-wrapper">
          <img
            src="/images/smart_drone_cutout.png"
            alt="Agrivera Smart Spraying Drone"
            className="hero-drone-body-img"
          />
          {/* Rapid 360° Propeller Blades Overlays */}
          <div className="drone-propeller-spin" style={{ top: '32px', left: '14px' }} />
          <div className="drone-propeller-spin" style={{ top: '30px', right: '16px' }} />
          <div className="drone-propeller-spin" style={{ top: '48px', left: '38px' }} />
          <div className="drone-propeller-spin" style={{ top: '46px', right: '36px' }} />
        </div>

        {/* AI Crop Recommendation Cards (Right Side Dashboard Cards with Floating Animation) */}
        {/* Card 1: Paddy Healthy Crop 98% Success */}
        <div style={{
          position: 'absolute',
          right: '5.5%',
          bottom: '42%',
          zIndex: 4,
          width: '225px',
          backgroundColor: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '0.75rem 1rem',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
          animation: 'aiCardFloat1 5.5s ease-in-out infinite'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'rgba(220, 252, 231, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>
              🌾
            </div>
            <div>
              <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Paddy</h5>
              <span style={{ fontSize: '0.72rem', color: '#208954ff', fontWeight: 700 }}>Healthy Crop • 98% Success</span>
            </div>
          </div>
          {/* Green Progress Bar */}
          <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(226, 232, 240, 0.7)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '58%', height: '100%', backgroundColor: '#208954ff', borderRadius: '4px' }} />
          </div>
        </div>

        {/* Card 2: Maize AI Recommendation Ready to Harvest */}
        <div style={{
          position: 'absolute',
          right: '5.5%',
          bottom: '26%',
          zIndex: 4,
          width: '225px',
          backgroundColor: 'rgba(255, 255, 255, 0.48)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '16px',
          padding: '0.75rem 1rem',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
          animation: 'aiCardFloat2 6.2s ease-in-out infinite 1s'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: '#FEF3C7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}>
              🌽
            </div>
            <div>
              <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Maize</h5>
              <span style={{ fontSize: '0.72rem', color: '#efd179ff', fontWeight: 800 }}>AI Rec • Ready to Harvest</span>
            </div>
          </div>
          {/* Progress Bar */}
          <div style={{ width: '100%', height: '6px', backgroundColor: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '48%', height: '100%', backgroundColor: '#EAB308', borderRadius: '4px' }} />
          </div>
        </div>

        {/* Animated Peeking Green Leaves Overlay */}
        <img
          src="/images/leaves_peeking.png"
          alt="Agrivera Green Leaves"
          className="peeking-leaf-animated"
        />

        {/* Left Hero Content Section (45% Width Boundary) */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            maxWidth: '520px',
            textAlign: 'left',
            paddingTop: '40px',
          }}>
            {/* Top Label */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#0B6E3C',
              fontSize: '0.825rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.2rem'
            }}>
              <span>SCIENCE</span> • <span>INNOVATION</span> • <span>SUSTAINABILITY</span>
            </div>

            {/* Large Bold Heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              color: '#0A2312',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              margin: 0,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(255, 255, 255, 0.8)'
            }}>
              Empowering Farmers.<br />
              <span style={{ color: '#0B6E3C', textShadow: '0 2px 12px rgba(11, 110, 60, 0.25), 0 1px 3px rgba(255, 255, 255, 0.8)' }}>Enriching Future.</span>
            </h1>

            {/* Paragraph Description */}
            <p style={{
              fontSize: '1.08rem',
              color: '#0A2312',
              lineHeight: 1.6,
              fontWeight: 700,
              marginTop: '20px',
              marginBottom: 0,
              textShadow: '0 1px 4px rgba(255, 255, 255, 0.8)'
            }}>
              Advanced crop solutions, innovative technologies and dedicated support for higher yields and sustainable farming.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              flexWrap: 'nowrap',
              marginTop: '32px'
            }}>
              <Link
                to="/products"
                style={{
                  backgroundColor: '#0B6E3C',
                  color: '#FFFFFF',
                  border: '1.5px solid #ffffffff',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(11, 110, 60, 0.3)',
                  transition: 'all 0.25s ease',
                  flexShrink: 0,
                  textDecoration: 'none'
                }}
              >
                Explore Products <ArrowRight size={17} />
              </Link>

              <Link
                to="/crop-solutions"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#0B6E3C',
                  border: '1.5px solid #0B6E3C',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.25s ease',
                  flexShrink: 0,
                  textDecoration: 'none'
                }}
              >
                Find Crop Solutions <ArrowRight size={17} />
              </Link>
            </div>

            {/* Floating Glass Statistics Card */}
            <div style={{
              marginTop: '36px',
              backgroundColor: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              padding: '1.1rem 1.4rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.8rem',
              alignItems: 'center'
            }}>
              {/* Stat 1: 1M+ Happy Farmers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B6E3C',
                  flexShrink: 0
                }}>
                  <Users size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>1M+</h4>
                  <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, display: 'block', marginTop: '2px' }}>Happy Farmers</span>
                </div>
              </div>

              {/* Stat 2: 500+ Dealers */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B6E3C',
                  flexShrink: 0
                }}>
                  <Handshake size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>500+</h4>
                  <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, display: 'block', marginTop: '2px' }}>Dealers</span>
                </div>
              </div>

              {/* Stat 3: 25+ Crop Solutions */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B6E3C',
                  flexShrink: 0
                }}>
                  <Sprout size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>25+</h4>
                  <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, display: 'block', marginTop: '2px' }}>Crop Solutions</span>
                </div>
              </div>

              {/* Stat 4: 15+ Years of Innovation */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: '#DCFCE7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0B6E3C',
                  flexShrink: 0
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>15+</h4>
                  <span style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600, display: 'block', marginTop: '2px' }}>Years of Innovation</span>
                </div>
              </div>
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
