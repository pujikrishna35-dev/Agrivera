import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, LayoutDashboard, Package, Users, Settings, LogOut } from 'lucide-react';

export const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F8FBF8' }}>
      {/* Admin Sidebar */}
      <aside style={{ width: '260px', backgroundColor: '#0A2312', color: '#FFF', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <Sprout size={28} color="#10B981" />
            <div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#FFF', display: 'block', lineHeight: 1 }}>AGRIVERA</span>
              <span style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700 }}>ADMIN PORTAL</span>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
            <Link to="/admin" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#FFF', padding: '0.6rem 0.8rem', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <LayoutDashboard size={18} /> Dashboard
            </Link>
            <Link to="/products" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D1E7DD', padding: '0.6rem 0.8rem' }}>
              <Package size={18} /> Product Catalog
            </Link>
            <Link to="/dealer-network" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#D1E7DD', padding: '0.6rem 0.8rem' }}>
              <Users size={18} /> Dealer Requests
            </Link>
          </nav>
        </div>

        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: '#EF4444', padding: '0.6rem 0.8rem', fontWeight: 600 }}>
          <LogOut size={18} /> Exit Portal
        </Link>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '2.5rem' }}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
