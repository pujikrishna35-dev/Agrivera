import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import ContactForm from '../../components/forms/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <MainLayout>
      <SeoMeta title="Contact Us" description="Get in touch with Agrivera Crop Solutions. Phone support, office addresses and agronomy assistance." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6.5rem 0 3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Contact Agrivera Experts</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            We are here to answer your crop queries and assist with product orders.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0A2312', marginBottom: '1.5rem' }}>Headquarters & Advisory Helpdesk</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: '#E8F5E9', color: 'var(--color-primary)' }}><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Corporate Office</h4>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Plot No. 123, Agri Business Park, Hyderabad, Telangana - 500 030</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: '#E8F5E9', color: 'var(--color-primary)' }}><Phone size={24} /></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Toll-Free Helpline</h4>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 98765 43210 (24x7 Farmer Helpline)</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '12px', backgroundColor: '#E8F5E9', color: 'var(--color-primary)' }}><Mail size={24} /></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700 }}>Email Support</h4>
                    <p style={{ margin: '0.2rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>info@agrivera.com / support@agrivera.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', padding: '2rem', borderRadius: '20px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.2rem', color: 'var(--color-primary)' }}>Send an Agronomic Inquiry</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
