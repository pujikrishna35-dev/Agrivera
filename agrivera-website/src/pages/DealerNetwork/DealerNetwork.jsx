import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import SeoMeta from '../../components/seo/SeoMeta';
import DealerForm from '../../components/forms/DealerForm';
import StoreLocatorMap from '../../components/map/StoreLocatorMap';
import { DEALERS_DATA } from '../../data/dealers';
import { MapPin, Phone, Star, Store, Search, ChevronDown } from 'lucide-react';

export const DealerNetwork = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const states = ['all', 'Telangana', 'Andhra Pradesh', 'Punjab', 'Haryana', 'Tamil Nadu'];

  const filteredDealers = DEALERS_DATA.filter(dealer => {
    const matchesState = selectedState === 'all' || dealer.state === selectedState;
    const matchesQuery = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesQuery;
  });

  return (
    <MainLayout>
      <SeoMeta title="Dealer Network & Partnership" description="Locate 200+ authorized Agrivera dealers across India or apply to become a franchisee distributor." />
      
      <div style={{ backgroundColor: '#F1F7F2', padding: '6.5rem 0 3rem 0' }}>
        <div className="container">
          <Breadcrumb items={[{ label: 'Dealer Network' }]} />
          <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', fontWeight: 800 }}>Pan-India Dealer Network</h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Find authorized Agrivera centers near you or join our growing distribution network.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0A2312', marginBottom: '1.5rem' }}>
                Locate Authorized Dealers
              </h2>
              
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    style={{
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundColor: '#FFFFFF',
                      color: '#1F2937',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      padding: '0.65rem 2.4rem 0.65rem 1.25rem',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      outline: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {states.map((s, i) => (
                      <option key={i} value={s}>{s === 'all' ? 'All States' : s}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} color="#4B5563" style={{ position: 'absolute', right: '14px', pointerEvents: 'none' }} />
                </div>

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', flex: 1 }}>
                  <input
                    type="text"
                    placeholder="Search city / district..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    style={{
                      padding: '0.65rem 1.25rem',
                      borderRadius: '16px',
                      border: '1px solid #E2E8F0',
                      outline: 'none',
                      width: '100%',
                      fontSize: '0.9rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                      backgroundColor: '#FFFFFF'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
                {filteredDealers.map(dealer => (
                  <div key={dealer.id} style={{ backgroundColor: '#FFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-primary)' }}>{dealer.name}</h4>
                      <span style={{ fontSize: '0.8rem', color: '#B45309', fontWeight: 700 }}>⭐ {dealer.rating}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>Prop: {dealer.proprietor}</p>
                    <p style={{ margin: '0.4rem 0', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={14} color="var(--color-primary)" /> {dealer.address}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Phone size={14} color="#10B981" /> {dealer.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <StoreLocatorMap selectedState={selectedState === 'all' ? 'All India' : selectedState} />
            </div>
          </div>

          {/* Become a Dealer Form Section */}
          <div style={{ backgroundColor: '#F8FBF8', borderRadius: '24px', padding: '3rem', border: '1px solid var(--border-light)' }}>
            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>BUSINESS OPPORTUNITY</span>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0A2312' }}>Become an Authorized Agrivera Dealer</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '0.4rem' }}>
                  Partner with India’s fastest growing crop science brand. Attractive margins and field marketing support provided.
                </p>
              </div>
              <DealerForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DealerNetwork;
