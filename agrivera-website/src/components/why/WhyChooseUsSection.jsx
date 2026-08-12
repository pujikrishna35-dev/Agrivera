import React from 'react';
import {
  Cpu,
  ShieldCheck,
  Users,
  BookOpen,
  Leaf,
  PhoneCall,
  UserCheck,
  MessageSquare,
  Award,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { triggerSuccessConfetti } from '../../utils/animations';

export const WhyChooseUsSection = () => {
  const handleAdvisoryClick = (e) => {
    e.preventDefault();
    triggerSuccessConfetti();
    alert('Agrivera Expert Crop Advisory request sent! An agronomist will contact you shortly.');
  };

  const pillars = [
    {
      title: 'Advanced Technology',
      desc: 'Latest global technologies and innovative solutions for better outcomes.',
      icon: Cpu,
      svgWatermark: (
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.18 }}>
          <path d="M20 50 L35 25 L45 35 L60 10 L75 30 L90 20 L105 50 Z" />
          <circle cx="35" cy="25" r="4" />
          <circle cx="60" cy="10" r="4" />
          <circle cx="90" cy="20" r="4" />
          <path d="M15 50 L105 50" />
        </svg>
      )
    },
    {
      title: 'Strict Quality Standards',
      desc: 'World-class manufacturing processes and rigorous quality control.',
      icon: ShieldCheck,
      svgWatermark: (
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.18 }}>
          <circle cx="60" cy="25" r="18" />
          <path d="M52 25 L57 30 L68 18" />
          <path d="M48 40 L40 55 L52 50 L60 56 L68 50 L80 55 L72 40" />
        </svg>
      )
    },
    {
      title: 'Extensive Field Network',
      desc: 'Strong pan-India network for on-time delivery and reliable customer support.',
      icon: Users,
      svgWatermark: (
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.18 }}>
          <path d="M10 50 C30 35, 50 35, 70 50" />
          <path d="M50 50 C70 35, 90 35, 110 50" />
          <circle cx="40" cy="30" r="8" />
          <path d="M35 30 L45 30" />
          <path d="M40 22 L40 38" />
        </svg>
      )
    },
    {
      title: 'Farmer-Centric Approach',
      desc: 'Focused on farmer success through knowledge, guidance and long-term partnerships.',
      icon: BookOpen,
      svgWatermark: (
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none" stroke="#16A34A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.18 }}>
          <path d="M40 45 C45 30, 60 20, 60 20 C60 20, 75 30, 80 45" />
          <circle cx="60" cy="16" r="6" />
          <path d="M20 50 Q60 42 100 50" />
        </svg>
      )
    }
  ];

  const advisoryPillars = [
    {
      title: 'Expert Agronomists',
      subtitle: 'Experienced and certified professionals',
      icon: UserCheck
    },
    {
      title: 'Personalized Solutions',
      subtitle: 'Customized advice for your crops',
      icon: MessageSquare
    },
    {
      title: 'Trusted by Farmers',
      subtitle: 'Proven results across thousands of fields',
      icon: Award
    },
    {
      title: 'Better Yields',
      subtitle: 'Healthier crops, higher returns',
      icon: TrendingUp
    }
  ];

  return (
    <section style={{
      backgroundColor: '#F8FAF8',
      padding: '3.5rem 0 4rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Left Fresh Peeking Leaf Accent */}
      <img
        src="/images/cutout_leaves.png"
        alt="Peeking Fresh Leaf"
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{
          position: 'absolute',
          top: '-15px',
          left: '-20px',
          width: '180px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Top Right Dot Grid Pattern */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '140px',
        height: '140px',
        backgroundImage: 'radial-gradient(#16A34A 1.5px, transparent 1.5px)',
        backgroundSize: '14px 14px',
        opacity: 0.18,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Centered Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.8rem auto' }}>
          <h2 style={{
            fontSize: '2.6rem',
            fontWeight: 800,
            color: '#04341A',
            margin: '0 0 0.4rem 0',
            letterSpacing: '-0.02em'
          }}>
            Why Choose Agrivera?
          </h2>

          {/* Header Leaf Flourish Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', margin: '0.4rem 0 0.8rem 0' }}>
            <span style={{ width: '35px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={16} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '35px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <p style={{
            color: '#475569',
            fontSize: '1.025rem',
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.5
          }}>
            Science, quality and trust — delivering better results for farmers across India.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.4rem',
          marginBottom: '3rem'
        }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.2rem 1.4rem 1.6rem 1.4rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(22, 163, 74, 0.12)';
                  e.currentTarget.style.borderColor = '#86EFAC';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                {/* Top Green Circle Badge */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5E9',
                  border: '1px solid #C8E6C9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem',
                  color: '#16A34A'
                }}>
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h4 style={{
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  margin: '0 0 0.4rem 0',
                  lineHeight: 1.25
                }}>
                  {item.title}
                </h4>

                {/* Gold Accent Underline */}
                <span style={{ width: '32px', height: '2.5px', backgroundColor: '#F59E0B', margin: '0.4rem auto 0.9rem auto', borderRadius: '2px' }} />

                {/* Description */}
                <p style={{
                  fontSize: '0.865rem',
                  color: '#64748B',
                  margin: '0 0 1.2rem 0',
                  lineHeight: 1.5,
                  fontWeight: 400
                }}>
                  {item.desc}
                </p>

                {/* Bottom Watermark Sketch */}
                <div style={{ marginTop: 'auto', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  {item.svgWatermark}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner: Need Expert Crop Advisory for Your Field? */}
        <div style={{
          backgroundColor: '#04341A',
          backgroundImage: `linear-gradient(90deg, #04341A 0%, rgba(4, 52, 26, 0.92) 50%, rgba(6, 78, 43, 0.75) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          borderRadius: '24px',
          padding: '2.8rem 3rem 2.2rem 3rem',
          boxShadow: '0 20px 50px rgba(4, 52, 26, 0.35)',
          position: 'relative',
          overflow: 'hidden',
          color: '#FFFFFF'
        }}>
          {/* Bottom Left Fresh Peeking Leaf Overlay */}
          <img
            src="/images/cutout_leaves.png"
            alt="Leaf Sprig"
            onError={(e) => { e.target.style.display = 'none'; }}
            style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-20px',
              width: '160px',
              pointerEvents: 'none',
              zIndex: 3
            }}
          />

          {/* Main Top Banner Content Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '2.5rem',
            position: 'relative',
            zIndex: 2
          }}>
            {/* Left Column: Big Farmer Icon + Text Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {/* White Circle Badge with Green Agronomist/Farmer Icon */}
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '3px solid #86EFAC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                flexShrink: 0
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <UserCheck size={32} color="#16A34A" strokeWidth={2.2} />
                </div>
              </div>

              <div>
                <h3 style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  margin: 0,
                  lineHeight: 1.2
                }}>
                  Need Expert Crop Advisory for Your Field?
                </h3>

                {/* Gold Accent Underline */}
                <span style={{ display: 'block', width: '45px', height: '3px', backgroundColor: '#F59E0B', margin: '0.5rem 0 0.7rem 0', borderRadius: '2px' }} />

                <p style={{
                  color: '#D1FAE5',
                  fontSize: '0.95rem',
                  margin: 0,
                  fontWeight: 400
                }}>
                  Connect with Agrivera agronomists for customized dosage schedules and effective solutions.
                </p>
              </div>
            </div>

            {/* Right Buttons Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
              {/* Gold Button */}
              <button
                onClick={handleAdvisoryClick}
                style={{
                  backgroundColor: '#F59E0B',
                  color: '#0F172A',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  padding: '0.85rem 1.8rem',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 25px rgba(245, 158, 11, 0.55)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(245, 158, 11, 0.75)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(245, 158, 11, 0.55)';
                }}
              >
                Get Free Advisory <ArrowRight size={18} color="#0F172A" strokeWidth={2.5} />
              </button>

              {/* Call Expert White Pill Button */}
              <a
                href="tel:18001234567"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#04341A',
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  padding: '0.85rem 1.8rem',
                  borderRadius: '30px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.backgroundColor = '#F8FAF8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                <PhoneCall size={18} color="#04341A" strokeWidth={2.5} /> Call Expert
              </a>
            </div>
          </div>

          {/* Bottom Divider Line inside Banner */}
          <div style={{ height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.15)', margin: '0 0 1.8rem 0' }} />

          {/* Bottom 4 Advisory Pillars Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.2rem',
            position: 'relative',
            zIndex: 2
          }}>
            {advisoryPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    paddingLeft: idx > 0 ? '1.2rem' : '0',
                    borderLeft: idx > 0 ? '1px solid rgba(255, 255, 255, 0.15)' : 'none'
                  }}
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={20} color="#86EFAC" strokeWidth={2.2} />
                  </div>

                  <div>
                    <h5 style={{
                      fontSize: '0.875rem',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      margin: '0 0 0.15rem 0',
                      lineHeight: 1.2
                    }}>
                      {item.title}
                    </h5>
                    <p style={{
                      fontSize: '0.74rem',
                      color: '#A7F3D0',
                      margin: 0,
                      lineHeight: 1.3,
                      fontWeight: 400
                    }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
