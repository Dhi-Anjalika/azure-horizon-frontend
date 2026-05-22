import React, { useState } from 'react';
import ModernFooter from '../components/common/footer';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');

  const images = [
    { id: 1, category: 'exterior', url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', caption: 'Resort Exterior at Sunset' },
    { id: 2, category: 'interior', url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80', caption: 'Luxury Lobby' },
    { id: 3, category: 'pool', url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80', caption: 'Infinity Pool' },
    { id: 4, category: 'dining', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', caption: 'Fine Dining Restaurant' },
    { id: 5, category: 'interior', url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80', caption: 'Ocean View Suite' },
    { id: 6, category: 'pool', url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80', caption: 'Spa & Wellness' },
    { id: 7, category: 'exterior', url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80', caption: 'Beachfront Access' },
    { id: 8, category: 'dining', url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80', caption: 'Seafood Buffet' }
  ];

  const filteredImages = activeTab === 'all' ? images : images.filter(img => img.category === activeTab);

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#F8FAFC', paddingBottom: '60px' }}>
      {/* HEADER SECTION */}
      <div style={{
        width: '100%',
        height: '400px',
        backgroundImage: 'linear-gradient(rgba(10,37,64,0.6), rgba(10,37,64,0.8)), url("https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '10px' }}>Our Gallery</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>Take a visual journey through the luxurious spaces and breathtaking views at Azure Horizon.</p>
      </div>

      {/* FILTER TABS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {[
          { id: 'all', label: 'All Photos' },
          { id: 'exterior', label: 'Exteriors' },
          { id: 'interior', label: 'Interiors' },
          { id: 'pool', label: 'Pool & Spa' },
          { id: 'dining', label: 'Dining' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            style={{
              padding: '10px 24px', borderRadius: '25px', border: 'none', fontWeight: '600', cursor: 'pointer',
              backgroundColor: activeTab === cat.id ? '#0A2540' : '#E2E8F0',
              color: activeTab === cat.id ? 'white' : '#475569',
              transition: '0.3s'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* MASONRY/GRID GALLERY */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredImages.map((img) => (
          <div key={img.id} style={{
            position: 'relative',
            borderRadius: '16px',
            overflow: 'hidden',
            cursor: 'pointer',
            height: '300px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            group: 'true' // Used for hover targeting in plain react if needed, here we'll just use inline hover simulation or standard CSS.
          }}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('.overlay').style.opacity = '1';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('.overlay').style.opacity = '0';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
          >
            <img src={img.url} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
            <div className="overlay" style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(10,37,64,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              opacity: 0, transition: 'opacity 0.3s ease'
            }}>
              <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700', textAlign: 'center', padding: '0 20px' }}>{img.caption}</h3>
            </div>
          </div>
        ))}
      </div>
      <div style={{marginTop: '60px'}}>
        <ModernFooter />
      </div>
    </div>
  );
};

export default Gallery;
