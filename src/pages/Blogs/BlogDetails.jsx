import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import { BLOGS_DATA } from '../../data/blogs';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';

export const BlogDetails = () => {
  const { id } = useParams();
  const blog = BLOGS_DATA.find(b => b.id === id) || BLOGS_DATA[0];

  return (
    <MainLayout>
      <SeoMeta title={blog.title} description={blog.summary} />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6rem 0 3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Blogs & Articles', path: '/blogs' }, { label: blog.title }]} />
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.8rem', marginTop: '0.5rem' }}>
            <span className="badge badge-primary">{blog.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Clock size={14} /> {blog.readTime}
            </span>
          </div>
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.25, maxWidth: '900px' }}>
            {blog.title}
          </h1>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><User size={15} color="var(--color-primary)" /> {blog.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={15} color="var(--color-primary)" /> {blog.date}</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <img
            src={blog.image}
            alt={blog.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/category_nutrition.png';
            }}
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px', marginBottom: '2.5rem', boxShadow: 'var(--shadow-md)' }}
          />

          <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#334155', backgroundColor: '#FFFFFF', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontWeight: 700, fontSize: '1.15rem', color: '#0F172A', marginBottom: '1.5rem' }}>
              {blog.summary}
            </p>
            <div style={{ whiteSpace: 'pre-line' }}>
              {blog.content}
            </div>

            <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '2.5rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/blogs" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ArrowLeft size={16} /> Back to Articles
              </Link>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: blog.title, text: blog.summary, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
                className="btn btn-primary btn-sm"
              >
                <Share2 size={15} /> Share Article
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogDetails;
