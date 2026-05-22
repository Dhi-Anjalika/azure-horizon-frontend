import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModernFooter from '../components/common/footer';
import { roomsData } from '../data/roomsData';

const RoomsPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRooms = activeCategory === 'all' ? roomsData : roomsData.filter(r => r.category === activeCategory);

  return (
    <div style={{ width: '100%', backgroundColor: '#FAFAFA', minHeight: '100vh', fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
      
      {/* HERO SECTION - INDUSTRIAL / PREMIUM LOOK */}
      <div style={{ 
        width: '100vw', height: '60vh', position: 'relative',
        backgroundImage: 'linear-gradient(rgba(10,37,64,0.3), rgba(10,37,64,0.8)), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', color: '#FFFFFF', padding: '0 20px', boxSizing: 'border-box'
      }}>
        <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', color: '#FFD700', marginBottom: '15px' }}>
          Azure Horizon Collections
        </span>
        <h1 style={{ fontSize: '4.5rem', fontWeight: '800', margin: 0, textShadow: '0 10px 30px rgba(0,0,0,0.5)', fontFamily: 'serif' }}>
          Curated Elegance
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginTop: '20px', color: '#E2E8F0', lineHeight: '1.6' }}>
          Discover a sanctuary of unparalleled luxury. Every space is meticulously designed to offer you the ultimate retreat.
        </p>
      </div>

      {/* FILTER TABS - ELEGANT DESIGN */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '-30px', position: 'relative', zIndex: 10, flexWrap: 'wrap', padding: '0 20px' }}>
        {[
          { id: 'all', label: 'All Collections' },
          { id: 'presidential', label: 'Presidential' },
          { id: 'suite', label: 'Suites' },
          { id: 'family', label: 'Villas' },
          { id: 'cabana', label: 'Cabanas' },
          { id: 'executive', label: 'Executive' }
        ].map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            style={{
              padding: '15px 35px', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer',
              backgroundColor: activeCategory === cat.id ? '#0A2540' : '#FFFFFF',
              color: activeCategory === cat.id ? '#FFFFFF' : '#0A2540',
              boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
              transition: 'all 0.4s ease',
              fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase',
              transform: activeCategory === cat.id ? 'translateY(-5px)' : 'none'
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* PREMIUM ROOMS LISTING - MAGAZINE STYLE LAYOUT */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {filteredRooms.map((room, index) => (
            <div key={room.id} style={{ 
              display: 'flex', 
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '60px',
              backgroundColor: 'white',
              boxShadow: '0 30px 60px rgba(0,0,0,0.03)',
              borderRadius: '24px',
              overflow: 'hidden',
              padding: '30px'
            }}>
              
              {/* IMAGE SHOWCASE */}
              <div style={{ flex: '1.2', height: '500px', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                <img src={room.images[0]} alt={room.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '30px', left: '30px', backgroundColor: 'rgba(255,255,255,0.95)', padding: '10px 20px', borderRadius: '30px', fontWeight: 'bold', color: '#0A2540', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                  {room.tag}
                </div>
              </div>

              {/* DETAILS SECTION */}
              <div style={{ flex: '1', padding: '20px 40px' }}>
                <span style={{ color: '#A07817', fontWeight: '700', letterSpacing: '2px', fontSize: '12px', textTransform: 'uppercase' }}>{room.category} Collection</span>
                <h2 style={{ fontSize: '3rem', color: '#0A2540', margin: '15px 0 20px 0', fontFamily: 'serif', lineHeight: '1.1' }}>{room.title}</h2>
                <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                  {room.description}
                </p>
                
                {/* AMENITIES GRID */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px', borderTop: '1px solid #F1F5F9', borderBottom: '1px solid #F1F5F9', padding: '20px 0' }}>
                  <div style={{ color: '#0A2540', fontWeight: '600' }}><span style={{ color: '#A07817' }}>📐</span> {room.size}</div>
                  <div style={{ color: '#0A2540', fontWeight: '600' }}><span style={{ color: '#A07817' }}>🛏️</span> {room.bedType}</div>
                  <div style={{ color: '#0A2540', fontWeight: '600' }}><span style={{ color: '#A07817' }}>🍳</span> {room.breakfast}</div>
                  <div style={{ color: '#0A2540', fontWeight: '600' }}><span style={{ color: '#A07817' }}>👥</span> Up to {room.maxGuests} Guests</div>
                </div>

                {/* PRICING & ACTIONS */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '14px', color: '#64748B', textDecoration: 'line-through', display: 'block', marginBottom: '-5px' }}>{room.originalPrice}</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0A2540' }}>${room.price}</span>
                    <span style={{ fontSize: '14px', color: '#64748B' }}> / night</span>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button 
                      onClick={() => navigate(`/room/${room.id}`)}
                      style={{ padding: '16px 30px', backgroundColor: 'transparent', color: '#0A2540', border: '1px solid #0A2540', borderRadius: '4px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', transition: '0.3s' }}
                      onMouseEnter={e => { e.target.style.backgroundColor = '#0A2540'; e.target.style.color = 'white'; }}
                      onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#0A2540'; }}
                    >
                      VIEW DETAILS
                    </button>
                    <button 
                      onClick={() => navigate(`/book/${room.id}`)}
                      style={{ padding: '16px 30px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', transition: '0.3s', boxShadow: '0 10px 20px rgba(10,37,64,0.2)' }}
                      onMouseEnter={e => e.target.style.backgroundColor = '#A07817'}
                      onMouseLeave={e => e.target.style.backgroundColor = '#0A2540'}
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </main>

      <ModernFooter />
    </div>
  );
};

export default RoomsPage;