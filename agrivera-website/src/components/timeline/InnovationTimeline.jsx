import React from 'react';
import {
  Leaf,
  Microscope,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Package,
  Truck,
  Trophy,
  Dna,
  Sprout,
  Settings,
  FlaskConical,
  Shield,
  MapPin,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export const InnovationTimeline = () => {
  const steps = [
    {
      stage: 1,
      title: 'Research',
      desc: 'Genomic & bio-catalyst discovery in molecular labs',
      icon: Microscope,
      bottomIcon: Dna
    },
    {
      stage: 2,
      title: 'Testing',
      desc: '3 Seasons of multi-location field trials',
      icon: ClipboardCheck,
      bottomIcon: Sprout
    },
    {
      stage: 3,
      title: 'Manufacturing',
      desc: 'ISO 9001:2015 precision synthesis & batch formulation',
      icon: Factory,
      bottomIcon: Settings
    },
    {
      stage: 4,
      title: 'Quality Check',
      desc: 'HPLC & spectroscopy purity verification',
      icon: ShieldCheck,
      bottomIcon: FlaskConical
    },
    {
      stage: 5,
      title: 'Packaging',
      desc: 'Tamper-proof & moisture-barrier sealing',
      icon: Package,
      bottomIcon: Shield
    },
    {
      stage: 6,
      title: 'Distribution',
      desc: 'Express supply chain to 200+ dealer hubs',
      icon: Truck,
      bottomIcon: MapPin
    },
    {
      stage: 7,
      title: 'Farmer Success',
      desc: '20%+ average harvest yield enhancement',
      icon: Trophy,
      bottomIcon: TrendingUp,
      isGoal: true
    }
  ];

  return (
    <section style={{
      backgroundColor: '#F8FAF8',
      padding: '3rem 0 3.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Top Right Decorative Leaf Accent */}
      <img
        src="/images/cutout_leaves.png"
        alt="Fresh Leaf"
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '130px',
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
              FROM BENCHTOP TO BREADBASKET
            </span>
            <Leaf size={12} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '25px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{ color: '#04341A', fontSize: '2.5rem', fontWeight: 800, margin: '0.2rem 0 0 0', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            Research & Innovation Timeline{' '}
            <Leaf size={28} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
          </h2>

          <span style={{ display: 'block', width: '35px', height: '3px', backgroundColor: '#F59E0B', margin: '0.4rem auto 0.8rem auto', borderRadius: '2px' }} />

          <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem', fontWeight: 500, maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
            A rigorous 7-stage quality lifecycle ensuring every product delivers proven agronomic excellence.
          </p>
        </div>

        {/* 7-Stage Horizontal Step Bar matching Image 1 */}
        <div style={{
          position: 'relative',
          marginBottom: '1.5rem',
          padding: '0 0.5rem'
        }}>
          {/* Continuous Green Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5.5%',
            right: '5.5%',
            height: '2px',
            backgroundColor: '#16A34A',
            zIndex: 1,
            transform: 'translateY(-50%)'
          }} />

          {/* Right Arrow End */}
          <ArrowRight
            size={18}
            color="#16A34A"
            style={{
              position: 'absolute',
              right: '3.5%',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2
            }}
          />

          {/* 7 Green Numbered Circles */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '0.9rem',
            position: 'relative',
            zIndex: 2
          }}>
            {steps.map((step) => (
              <div key={step.stage} style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  border: '1.5px dashed #86EFAC',
                  backgroundColor: '#F8FAF8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    backgroundColor: '#0F5B31',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(15, 91, 49, 0.3)'
                  }}>
                    {step.stage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Stage Cards Grid matching Image 1 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '0.9rem'
        }}>
          {steps.map((item) => {
            const TopIcon = item.icon;
            const BottomIcon = item.bottomIcon;
            return (
              <div
                key={item.stage}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  padding: '1.4rem 0.75rem',
                  border: '1px solid #F1F5F9',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '265px',
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
                    <TopIcon size={24} color="#16A34A" />
                  </div>

                  {/* Stage Title */}
                  <h4 style={{
                    fontSize: '0.875rem',
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
                    lineHeight: 1.4,
                    fontWeight: item.isGoal ? 600 : 400
                  }}>
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Accent Icon */}
                <div style={{ marginTop: '0.8rem' }}>
                  <BottomIcon size={18} color="#16A34A" strokeWidth={1.8} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Right "Our Ultimate Goal" Badge matching Image 1 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#E8F5E9',
            border: '1px solid #BBF7D0',
            color: '#15803D',
            fontSize: '0.78rem',
            fontWeight: 700,
            padding: '0.35rem 0.85rem',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)'
          }}>
            <Leaf size={14} color="#15803D" fill="#15803D" /> Our Ultimate Goal
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationTimeline;
