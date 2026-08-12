import React from 'react';
import {
  Leaf,
  Package,
  Users,
  Store,
  MapPin,
  ThumbsUp,
  FlaskConical,
  Handshake,
  TrendingUp
} from 'lucide-react';

export const ImpactSection = () => {
  const stats = [
    {
      num: '01',
      number: '500+',
      label: 'Products',
      desc: 'Custom formulated solutions for every farming need.',
      icon: Package
    },
    {
      num: '02',
      number: '10,000+',
      label: 'Farmers',
      desc: 'Empowered across villages and regions of India.',
      icon: Users
    },
    {
      num: '03',
      number: '200+',
      label: 'Dealers',
      desc: 'Strong and trusted authorized retail network.',
      icon: Store
    },
    {
      num: '04',
      number: '25+',
      label: 'States Covered',
      desc: 'Pan-India presence delivering impact at scale.',
      icon: MapPin
    },
    {
      num: '05',
      number: '98%',
      label: 'Customer Satisfaction',
      desc: 'Proven field success backed by trust and results.',
      icon: ThumbsUp
    }
  ];

  const bannerPillars = [
    { title: 'Science-backed Solutions', icon: FlaskConical },
    { title: 'Sustainable Practices', icon: Leaf },
    { title: 'Stronger Partnerships', icon: Handshake },
    { title: 'Better Yields, Better Tomorrow', icon: TrendingUp }
  ];

  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#042813',
      backgroundImage: `linear-gradient(180deg, rgba(6, 45, 20, 0.92) 0%, rgba(3, 30, 13, 0.95) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem 0 2.2rem 0',
      color: '#FFFFFF',
      overflow: 'hidden'
    }}>
      {/* Right Edge Organic Curved Farm Backdrop Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '280px',
        backgroundImage: `url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'ellipse(100% 100% at 100% 50%)',
        opacity: 0.75,
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Left Bottom Fresh Leaf Cut-out Overlay */}
      <img
        src="/images/cutout_leaves.png"
        alt="Fresh Leaf"
        onError={(e) => { e.target.style.display = 'none'; }}
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '-10px',
          width: '120px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
            <span style={{ width: '20px', height: '1.5px', backgroundColor: '#86EFAC' }} />
            <Leaf size={11} color="#16A34A" fill="#16A34A" />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F59E0B', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
              MEASURABLE FIELD IMPACT
            </span>
            <Leaf size={11} color="#16A34A" fill="#16A34A" />
            <span style={{ width: '20px', height: '1.5px', backgroundColor: '#86EFAC' }} />
          </div>

          <h2 style={{ color: '#FFFFFF', fontSize: '2rem', fontWeight: 800, margin: '0.15rem 0 0 0', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            Transforming Indian Agriculture at Scale{' '}
            <Leaf size={22} color="#22C55E" fill="#22C55E" style={{ transform: 'rotate(15deg)', verticalAlign: 'middle' }} />
          </h2>

          <span style={{ display: 'block', width: '30px', height: '2.5px', backgroundColor: '#F59E0B', margin: '0.3rem auto 0.5rem auto', borderRadius: '2px' }} />

          <p style={{ color: '#D1FAE5', fontSize: '0.925rem', marginTop: '0.2rem', fontWeight: 500, maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            Empowering farmers, strengthening communities and creating a sustainable future for India.
          </p>
        </div>

        {/* 5 White Impact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.9rem',
          marginBottom: '1.2rem'
        }}>
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '1.7rem 0.75rem 1.1rem 0.75rem',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  textAlign: 'center',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Number Circle Badge at Card Top */}
                <div style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#0F5B31',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #FFFFFF',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
                }}>
                  {stat.num}
                </div>

                {/* Circular Icon Badge */}
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#E8F5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0.3rem auto 0.6rem auto'
                }}>
                  <Icon size={20} color="#16A34A" />
                </div>

                {/* Big Stat Number */}
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', lineHeight: 1, marginBottom: '0.25rem', display: 'block' }}>
                  {stat.number}
                </span>

                {/* Label */}
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A', margin: '0 0 0.3rem 0', lineHeight: 1.2 }}>
                  {stat.label}
                </h4>

                {/* Gold Underline Bar */}
                <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#F59E0B', margin: '0.15rem auto 0.4rem auto', borderRadius: '1px' }} />

                {/* Description */}
                <p style={{ fontSize: '0.72rem', color: '#64748B', margin: 0, lineHeight: 1.35 }}>
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Floating Dark Green Banner Bar */}
        <div style={{
          backgroundColor: 'rgba(4, 40, 18, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '0.75rem 1.5rem',
          color: '#FFFFFF',
          marginTop: '1.2rem',
          display: 'grid',
          gridTemplateColumns: '270px 1fr',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.18)'
        }}>
          {/* Left Title Block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Leaf size={18} color="#86EFAC" fill="#86EFAC" />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2 }}>
              Rooted in Innovation.<br />
              <span style={{ color: '#86EFAC' }}>Driven by Impact.</span>
            </div>
          </div>

          {/* Right 4 Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.8rem',
            alignItems: 'center'
          }}>
            {bannerPillars.map((item, idx) => {
              const PillarIcon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    paddingLeft: idx > 0 ? '0.8rem' : '0',
                    borderLeft: idx > 0 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                >
                  <PillarIcon size={16} color="#86EFAC" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
