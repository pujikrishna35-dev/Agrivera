import React, { useState } from 'react';

export const ImageGallery = () => {
  const images = [
    { url: '/images/drone_spraying_demo.png', title: 'Drone Spraying Demonstration' },
    { url: '/images/paddy_field_trials.png', title: 'Paddy Field Trials' },
    { url: '/images/bio_fertilizer_soil_health.png', title: 'Bio-Fertilizer Soil Soil Health' },
    { url: '/images/cotton_harvest_excellence.jpg', title: 'Cotton Harvest Excellence' },
    { url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80', title: 'R&D Laboratory Testing' },
    { url: '/images/farmer_field_training.png', title: 'Farmer Field Training' }
  ];

  return (
    <div className="grid-3">
      {images.map((item, idx) => (
        <div key={idx} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '220px' }}>
          <img
            src={item.url}
            alt={item.title}
            onError={(e) => { e.target.onerror = null; e.target.src = '/images/paddy_field_trials.png'; }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '1rem',
            color: '#FFF',
            fontWeight: 700
          }}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
