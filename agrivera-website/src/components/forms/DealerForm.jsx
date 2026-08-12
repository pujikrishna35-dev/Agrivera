import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { dealerService } from '../../services/dealerService';
import { triggerSuccessConfetti } from '../../utils/animations';
import { Building2 } from 'lucide-react';

export const DealerForm = () => {
  const [formData, setFormData] = useState({ shopName: '', proprietorName: '', phone: '', email: '', district: '', state: '', gstNo: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await dealerService.applyDealer(formData);
    setLoading(false);
    setResult(res.message);
    triggerSuccessConfetti();
  };

  if (result) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#FEF3C7', borderRadius: '12px', color: '#B45309' }}>
        <h3>🤝 Application Received!</h3>
        <p style={{ marginTop: '0.5rem' }}>{result}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <Input label="Shop / Enterprise Name" placeholder="e.g. Kisan Krishi Kendra" required value={formData.shopName} onChange={e => setFormData({ ...formData, shopName: e.target.value })} />
      <div className="grid-2">
        <Input label="Proprietor Name" placeholder="e.g. Srinivas Rao" required value={formData.proprietorName} onChange={e => setFormData({ ...formData, proprietorName: e.target.value })} />
        <Input label="Phone Number" placeholder="e.g. 9848012345" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
      </div>
      <div className="grid-2">
        <Input label="District" placeholder="e.g. Hyderabad / Guntur" required value={formData.district} onChange={e => setFormData({ ...formData, district: e.target.value })} />
        <Input label="State" placeholder="e.g. Telangana / AP" required value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} />
      </div>
      <Input label="GST Number (Optional)" placeholder="e.g. 36AAAAA0000A1Z5" value={formData.gstNo} onChange={e => setFormData({ ...formData, gstNo: e.target.value })} />
      <Button type="submit" variant="gold" disabled={loading} icon={Building2}>
        {loading ? 'Processing Application...' : 'Apply for Dealership'}
      </Button>
    </form>
  );
};

export default DealerForm;
