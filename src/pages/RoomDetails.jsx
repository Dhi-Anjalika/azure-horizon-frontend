import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { roomsData } from '../data/roomsData';
import ModernFooter from '../components/common/footer';

const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = roomsData.find(r => r.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return <div style={{ padding: '100px', textAlign: 'center', fontSize: '2rem' }}>Room Not Found</div>;
  }

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF', fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
      
      {/* 1. MASSIVE HERO GALLERY */}
      <div style={{ width: '100%', height: '75vh', display: 'flex', gap: '5px', padding: '5px', boxSizing: 'border-box' }}>
        <div style={{ flex: '2', height: '100%', overflow: 'hidden', borderRadius: '16px 0 0 16px' }}>
          <img src={room.images[0]} alt={room.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '5px', height: '100%' }}>
          <div style={{ flex: '1', overflow: 'hidden', borderRadius: '0 16px 0 0' }}>
            <img src={room.images[1]} alt="Detail 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: '1', overflow: 'hidden', borderRadius: '0 0 16px 0', position: 'relative' }}>
            <img src={room.images[2] || room.images[0]} alt="Detail 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {room.images.length > 3 && (
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', cursor: 'pointer' }}>
                + {room.images.length - 3} Photos
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. CONTENT AREA */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
        
        {/* LEFT MAIN DETAILS */}
        <div style={{ flex: '1 1 600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <span style={{ backgroundColor: '#0A2540', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{room.category}</span>
            <span style={{ color: '#A07817', fontWeight: 'bold' }}>⭐ {room.rating} Rating</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', color: '#0A2540', margin: '0 0 20px 0', fontFamily: 'serif', lineHeight: '1.1' }}>{room.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#64748B', lineHeight: '1.8', marginBottom: '40px' }}>
            {room.fullDescription}
          </p>

          <h3 style={{ fontSize: '1.8rem', color: '#0A2540', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '20px' }}>Premium Amenities</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            {room.amenities.map((amenity, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', color: '#334155' }}>
                <span style={{ color: '#A07817' }}>✦</span> {amenity}
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.8rem', color: '#0A2540', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px', marginBottom: '20px' }}>Room Specifications</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: '#64748B', lineHeight: '2' }}>
            <li><strong>Size:</strong> {room.size}</li>
            <li><strong>Bed Type:</strong> {room.bedType}</li>
            <li><strong>Occupancy:</strong> Up to {room.maxGuests} Guests</li>
            <li><strong>View:</strong> {room.view}</li>
            <li><strong>Dining:</strong> {room.breakfast}</li>
          </ul>
        </div>

        {/* RIGHT SIDEBAR - BOOKING WIDGET */}
        <div style={{ flex: '1 1 350px', position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
          <div style={{ backgroundColor: '#F8FAFC', padding: '40px', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '10px' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0A2540' }}>${room.price}</span>
              <span style={{ color: '#64748B' }}>/ night</span>
            </div>
            <div style={{ color: '#10B981', fontWeight: '600', fontSize: '14px', marginBottom: '30px' }}>
              ✓ {room.cancellation}
            </div>

            {/* Mock Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#64748B', marginBottom: '5px' }}>CHECK-IN</label>
                  <input type="date" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#64748B', marginBottom: '5px' }}>CHECK-OUT</label>
                  <input type="date" style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#64748B', marginBottom: '5px' }}>GUESTS</label>
                <select style={{ width: '100%', padding: '12px', border: '1px solid #CBD5E1', borderRadius: '8px', boxSizing: 'border-box' }}>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>

            <button 
              onClick={() => navigate(`/book/${room.id}`)}
              style={{ width: '100%', padding: '16px', backgroundColor: '#0A2540', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '16px', cursor: 'pointer', transition: '0.3s' }}
              onMouseEnter={e => e.target.style.backgroundColor = '#A07817'}
              onMouseLeave={e => e.target.style.backgroundColor = '#0A2540'}
            >
              Reserve Now
            </button>
            <p style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8', marginTop: '15px' }}>You won't be charged yet.</p>
          </div>
        </div>
      </div>

      <ModernFooter />
    </div>
  );
};

export default RoomDetails;
