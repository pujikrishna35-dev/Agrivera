import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { BLOGS_DATA } from '../../data/blogs';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const BlogsPage = () => {
  return (
    <MainLayout>
      <SeoMeta title="Agricultural News & Blogs" description="Latest farming news, pest management advisories and crop nutrition insights from Agrivera experts." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Blogs & Articles' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Agronomy News & Resources</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Actionable farming tips, crop protection advisories, and soil health studies.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem' }}>
            {BLOGS_DATA.map(blog => (
              <div key={blog.id} className="card-hover" style={{ backgroundColor: '#FFF', borderRadius: '16px', border: '1px solid var(--border-light)', overflow: 'hidden' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {blog.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={14} /> {blog.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.6rem' }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.2rem' }}>{blog.summary}</p>
                  <Link to={`/blogs/${blog.id}`} className="btn btn-primary btn-sm">
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogsPage;
