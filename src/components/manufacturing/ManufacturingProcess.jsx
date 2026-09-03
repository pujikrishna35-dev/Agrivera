import React from 'react';
import {
  Leaf,
  Sprout,
  FlaskConical,
  Settings,
  ShieldCheck,
  Package,
  Truck,
  ArrowRight,
  Award,
  ClipboardCheck,
  Users
} from 'lucide-react';

export const ManufacturingProcess = () => {
  const steps = [
    {
      stage: 1,
      title: 'Raw Materials',
      desc: '100% Grade-A active bio-ingredients sourced globally',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80'
    },
    {
      stage: 2,
      title: 'Research',
      desc: 'Custom molecular formulation & stability testing',
      icon: FlaskConical,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80'
    },
    {
      stage: 3,
      title: 'Production',
      desc: 'Automated temperature-controlled bioreactors',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80'
    },
    {
      stage: 4,
      title: 'Testing',
      desc: 'HPLC, mass spec & batch purity audit',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=400&q=80'
    },
    {
      stage: 5,
      title: 'Packaging',
      desc: 'UV-shielded leakproof eco-packaging',
      icon: Package,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80'
    },
    {
      stage: 6,
      title: 'Distribution',
      desc: 'Dispatched to 200+ authorized retail centers',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const qualityFeatures = [
    {
      title: 'International Quality',
      desc: 'Global standards we follow',
      icon: Award
    },
    {
      title: 'Advanced Technology',
      desc: 'Precision, automation & innovation',
      icon: ClipboardCheck
    },
    {
      title: 'Sustainable Approach',
      desc: 'Eco-friendly practices for a better future',
      icon: Leaf
    },
    {
      title: 'Farmer First',
      desc: 'Every product drives farmer success',
      icon: Users
    }
  ];

  return (
    <section style={{
      backgroundColor: '#F8FAF8',
      padding: '3rem 0 3.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Left Decorative Leaf Accent */}
      <img
        src="/images/cutout_leaves.png"
        alt="Fresh Leaf"
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-10px',
          width: '130px',
          transform: 'scaleX(-1)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section matching Image 1 */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              MANUFACTURING EXCELLENCE INFOGRAPHIC
            </span>
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{ color: '#04341A', fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0 0 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            State-of-the-Art Production Flow{' '}
            <Leaf size={28} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
          </h2>

          <span style={{ display: 'block', width: '35px', height: '3px', backgroundColor: '#F59E0B', margin: '0.4rem auto 0.8rem auto', borderRadius: '2px' }} />

          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem', fontWeight: 500, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            Precision engineering and international quality protocols at our Hyderabad manufacturing complex.
          </p>
        </div>

        {/* 6-Stage Horizontal Step Bar matching Image 1 */}
        <div style={{
          position: 'relative',
          marginBottom: '1.5rem',
          padding: '0 0.5rem'
        }}>
          {/* Continuous Green Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '7.5%',
            right: '7.5%',
            height: '2px',
            backgroundColor: '#16A34A',
            zIndex: 1,
            transform: 'translateY(-50%)'
          }} />

          {/* 6 Green Numbered Circles with Connecting Arrows */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '1rem',
            position: 'relative',
            zIndex: 2
          }}>
            {steps.map((step, idx) => (
              <div key={step.stage} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: '#0F5B31',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(15, 91, 49, 0.3)',
                  zIndex: 2
                }}>
                  {step.stage}
                </div>

                {idx < steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    color="#16A34A"
                    style={{
                      position: 'absolute',
                      right: '-8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 3
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 Process Cards Grid matching Image 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.stage}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '1.4rem 0.9rem',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.8rem auto'
                  }}>
                    <Icon size={24} color="#16A34A" />
                  </div>

                  {/* Stage Title */}
                  <h4 style={{
                    fontSize: '0.925rem',
                    fontWeight: 800,
                    color: '#0F172A',
                    margin: '0 0 0.3rem 0',
                    lineHeight: 1.25
                  }}>
                    {item.title}
                  </h4>

                  {/* Gold Underline Bar */}
                  <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#F59E0B', margin: '0.2rem auto 0.6rem auto', borderRadius: '1px' }} />

                  {/* Description */}
                  <p style={{
                    fontSize: '0.76rem',
                    color: '#64748B',
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Card Photo */}
                <div style={{
                  width: '100%',
                  height: '110px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  marginTop: '1rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quality Guarantee Banner matching Image 1 */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #F1F5F9',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 310px',
          alignItems: 'center'
        }}>
          {/* Left 4 Quality Features */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            padding: '1.2rem 1.8rem',
            alignItems: 'center'
          }}>
            {qualityFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    paddingLeft: idx > 0 ? '1rem' : '0',
                    borderLeft: idx > 0 ? '1px solid #F1F5F9' : 'none'
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={22} color="#16A34A" />
                  </div>
                  <div>
                    <h5 style={{ fontSize: '0.825rem', fontWeight: 800, color: '#0F172A', margin: 0, lineHeight: 1.2 }}>
                      {feat.title}
                    </h5>
                    <span style={{ fontSize: '0.74rem', color: '#64748B', display: 'block', marginTop: '0.15rem' }}>
                      {feat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Dark Green Tag Banner */}
          <div style={{
            backgroundColor: '#04341A',
            backgroundImage: 'linear-gradient(90deg, #04341A 0%, #064E2B 100%)',
            padding: '1.2rem 1.8rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            height: '100%'
          }}>
            <Leaf size={26} color="#86EFAC" fill="#86EFAC" />
            <div style={{ fontWeight: 800, fontSize: '0.875rem', lineHeight: 1.35 }}>
              Quality in every step.<br />
              <span style={{ color: '#86EFAC' }}>Trust in every product.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
