import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { contactService } from '../../services/contactService';
import { triggerSuccessConfetti } from '../../utils/animations';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', crop: '', state: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await contactService.submitContactForm(formData);
    setLoading(false);
    setSubmitted(true);
    triggerSuccessConfetti();
  };

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#E8F5E9', borderRadius: '12px', color: 'var(--color-primary)' }}>
        <h3>✓ Advisory Request Submitted!</h3>
        <p style={{ marginTop: '0.5rem' }}>Our area field expert will reach out to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <Input label="Full Name" placeholder="e.g. Ramesh Kumar" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <Input label="Mobile Number" placeholder="e.g. 9876543210" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
      <div className="grid-2">
        <Input label="Crop Grown" placeholder="e.g. Paddy / Cotton" value={formData.crop} onChange={e => setFormData({ ...formData, crop: e.target.value })} />
        <Input label="State" placeholder="e.g. Telangana" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <label style={{ fontSize: '0.9rem', fontWeight: 600 }}>Message / Query</label>
        <textarea
          rows={4}
          placeholder="Describe your crop query or requirement..."
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-light)', outline: 'none' }}
        />
      </div>
      <Button type="submit" disabled={loading} icon={Send}>
        {loading ? 'Submitting...' : 'Submit Request'}
      </Button>
    </form>
  );
};

export default ContactForm;
