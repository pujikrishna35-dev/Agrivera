import React from 'react';
import { BLOGS_DATA } from '../../data/blogs';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Calendar, User } from 'lucide-react';

export const Blogs = () => {
  return (
    <section className="section" style={{ backgroundColor: '#F8FAF8', padding: '4.5rem 0' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0B6E3C', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            AGRONOMIC INSIGHTS & RESOURCES
          </span>
          <h2 style={{ color: '#0A2312', fontSize: '2.4rem', fontWeight: 800, marginTop: '0.3rem' }}>
            Latest News, Blogs & Advisory 📖
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', marginTop: '0.4rem', maxWidth: '650px', margin: '0.4rem auto 0 auto' }}>
            Expert agricultural articles, pest advisories, crop nutrition guides, and downloadable product catalogs.
          </p>
        </div>

        {/* 4 Columns Responsive Blog Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {BLOGS_DATA.slice(0, 7).map((blog) => (
            <div
              key={blog.id}
              className="card-hover"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                {/* Image Header with Category Badge */}
                <div style={{ position: 'relative', height: '175px', overflow: 'hidden' }}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/category_nutrition.png';
                    }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(11, 110, 60, 0.9)',
                    color: '#FFFFFF',
                    fontSize: '0.725rem',
                    fontWeight: 700,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '20px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {blog.category}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.35rem 1.25rem 1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.775rem', color: '#64748B', marginBottom: '0.6rem' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <Calendar size={13} color="#0B6E3C" /> {blog.date}
                    </span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#1E293B', lineHeight: 1.35 }}>
                    {blog.title}
                  </h4>

                  <p style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {blog.summary}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div style={{ padding: '0 1.25rem 1.25rem 1.25rem' }}>
                <Link
                  to={`/blogs/${blog.id}`}
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 800,
                    color: '#0B6E3C',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    textDecoration: 'none'
                  }}
                >
                  Read Full Article <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}

          {/* Download Product Catalog Card */}
          <div
            style={{
              backgroundColor: '#072213',
              backgroundImage: `linear-gradient(145deg, #072213 0%, #0B6E3C 100%)`,
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.8rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 12px 30px rgba(7, 34, 19, 0.3)',
              border: '1.5px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem'
              }}>
                <BookOpen size={24} color="#FFC107" />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 0.6rem 0', lineHeight: 1.3 }}>
                Download Agrivera Product Catalog 2024
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#D1FAE5', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                Complete technical guidelines, dosage charts, seed spacing advisories, and crop defense schedules.
              </p>
            </div>

            <button
              type="button"
              onClick={() => alert('Agrivera Product Catalog PDF downloaded!')}
              style={{
                backgroundColor: '#FFC107',
                color: '#072213',
                padding: '0.8rem 1.2rem',
                borderRadius: '30px',
                fontWeight: 800,
                fontSize: '0.875rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(255, 193, 7, 0.3)',
                textDecoration: 'none',
                width: '100%'
              }}
            >
              Download PDF Catalog <Download size={16} />
            </button>
          </div>
        </div>

        {/* View All Articles Action */}
        <div style={{ textAlign: 'center' }}>
          <Link
            to="/blogs"
            style={{
              backgroundColor: '#0B6E3C',
              color: '#FFFFFF',
              padding: '0.9rem 2rem',
              borderRadius: '30px',
              fontWeight: 800,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 6px 18px rgba(11, 110, 60, 0.25)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            Explore All Blogs & Agronomic Field Guides <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
