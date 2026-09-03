import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {FAQS_DATA.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-light)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <button
              onClick={() => toggle(faq.id)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: isOpen ? 'var(--color-primary)' : 'var(--text-main)',
                backgroundColor: isOpen ? '#F1F7F2' : '#FFFFFF'
              }}
            >
              <span>{faq.question}</span>
              {isOpen ? <ChevronUp size={20} color="var(--color-primary)" /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
              <div style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
